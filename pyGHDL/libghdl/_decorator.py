# =============================================================================
#               ____ _   _ ____  _       _ _ _           _         _ _
#  _ __  _   _ / ___| | | |  _ \| |     | (_) |__   __ _| |__   __| | |
# | '_ \| | | | |  _| |_| | | | | |     | | | '_ \ / _` | '_ \ / _` | |
# | |_) | |_| | |_| |  _  | |_| | |___ _| | | |_) | (_| | | | | (_| | |
# | .__/ \__, |\____|_| |_|____/|_____(_)_|_|_.__/ \__, |_| |_|\__,_|_|
# |_|    |___/                                     |___/
# =============================================================================
#  Authors:
#    Patrick Lehmann
#
# Package module:   Python binding and low-level API for shared library 'libghdl'.
#
# License:
# ============================================================================
#  Copyright (C) 2019-2021 Tristan Gingold
#
#  This program is free software: you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation, either version 2 of the License, or
#  (at your option) any later version.
#
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with this program.  If not, see <gnu.org/licenses>.
#
# SPDX-License-Identifier: GPL-2.0-or-later
# ============================================================================
#
from re import search as re_search
from ctypes import c_int32, c_char_p
from textwrap import dedent
from typing import Callable, List, Dict, Any, TypeVar

from pydecor import export

from pyGHDL.libghdl import libghdl


@export
def EnumLookupTable(cls) -> Callable:
	"""
	Decorator to precalculate a enum lookup table (LUT) for enum position to
	enum literal name.

	.. todo:: Make compatible to chained decorators

	:param cls: Enumerator class for which a LUT shall be pre-calculated.
	"""
	def decorator(func) -> Callable:
		def gen() -> List[str]:
			d = [e for e in dir(cls) if e[0] != "_"]
			res = [None] * len(d)
			for e in d:
				res[getattr(cls, e)] = e
			return res

		__lut = gen()

		def wrapper(id: int) -> str:
			# function that replaces the placeholder function
			return __lut[id]

		return wrapper

	return decorator


class __Environment():
	"""
	Create a Python root environment with local and global symbols and a builtins
	namespace
	"""

	globals: Dict     #: global symbols
	locals: Dict      #: local symbols
	builtins: Dict    #: builtins namespace (``__builtins__``)

	def __init__(self):
		# Setup the local and global dictionaries of the execution
		self.globals = dict()
		self.locals = dict()

		# Setup a standard-compatible Python environment
		self.builtins = {
			"locals":  lambda: self.locals,
			"globals": lambda: self.globals,
		}
		self.globals['__builtins__'] = self.builtins
		self.globals['__name__'] = "BindingEnvironment"

		# Import these symbols into new environments builtins
		symbolsToImport = ("list", "dict", "tuple", "float", "bool", "True", "False", "int", "len", "str", "type", "None")
		for key in symbolsToImport:
			try:
				self.builtins[key] = __builtins__[key]
			except KeyError:
				raise KeyError("Symbol {0} not found in environments.".format(key))


# Create environment once and store it in a private variable
__environment = __Environment()


def __CreateBindingFunction(subprogramName, parameters=None, returnType=None, additionalSymbols=None):
	"""Function to create an interface function at runtime.

	:param subprogramName:    Subprogram name in libghdl.
	:param parameters:        Parameters of the called subprogram. Each parameter is a dictionary entry of parameter name and type.
	:param returnType:        ``None`` if subprogram is a procedure.
	:param additionalSymbols: A dictionary of additional symbols for linking.
	"""
	# Inspired by https://code.activestate.com/recipes/550804-create-a-restricted-python-function-from-a-string/
	# Author:  David Decotigny
	# Created: Sat, 1 Mar 2008
	# License: Python Software Foundation License (PSFL) - BSD-style, permissive
	params = []
	convs = [""]
	args = []

	if parameters is not None:
		for parameterName, parameterType in parameters.items():
			params.append("{param}:{type}".format(param=parameterName, type=parameterType.__name__))

			if parameterType is str:
				convs.append("{param} = {param}.encode(\"utf-8\")".format(param=parameterName))
				args.append("c_char_p({param})".format(param=parameterName))
				args.append("len({param})".format(param=parameterName))
			else:
				args.append(parameterName)

	if (returnType is None):
		returnType = "None"
		returnStatement = ""
		returnConversion = ""
	else:
		returnStatement = "return "

		if returnType is str:
			returnConversion = ".decode(\"utf-8\")"
		else:
			returnConversion = ""

		returnType = returnType.__name__

	code = dedent("""\
		def Binder({params}) -> {returnType}:{convertStatements}
			{returnStatement}libghdl.{sub}({args}){convert}
		""").format(
			params=", ".join(params),
			returnType=returnType,
			convertStatements="\n\t".join(convs),
			returnStatement=returnStatement,
			sub=subprogramName,
			args=", ".join(args),
			convert=returnConversion
		)

	# print(subprogramName)
	# print(code)
	# print("-"*40)

	new_locals = __environment.locals# .copy()
	new_globals = __environment.globals.copy()

	new_globals.update(libghdl=libghdl, c_char_p=c_char_p)
	if additionalSymbols is not None:
		new_globals.update(additionalSymbols)

	# Execute the bytecode to get a function object. This is added to new_locals
	byteCode = compile(code, "<string>", 'exec')
	eval(byteCode, new_globals, new_locals)

	func = new_locals["Binder"]

	return func


@export
def BindToLibGHDL(subprogramName, context = None):
	"""
	This decorator creates a Python function to interface with subprograms in
	libghdl via :mod:`ctypes`.

	.. todo:: Make compatible to chained decorators

	"""
	def wrapper(func: Callable):
		typeHints: Dict[str, Any] = func.__annotations__
		typeHintCount = len(typeHints)

		if typeHintCount == 0:
			raise ValueError("Function {0} is not annotated with types.".format(func.__name__))

		try:
			returnType = typeHints['return']
		except KeyError:
			raise ValueError("Function {0} is not annotated with a return type.".format(func.__name__))

		if (typeHintCount - 1) != func.__code__.co_argcount:
			raise ValueError("Number of type annotations ({0}) for function '{1}' does not match number of parameters ({2}).".format(
				typeHintCount - 1,
				func.__name__,
				func.__code__.co_argcount)
			)

#		print(typeHints)

		parameters = typeHints.copy()
		del parameters['return']

		parameterTypes = []
		for parameter in parameters.values():
			if parameter is int:
				parameterTypes.append(c_int32)
			elif parameter is str:
				parameterTypes.append(c_char_p)
				parameterTypes.append(c_int32)
			elif isinstance(parameter, TypeVar):
				if parameter.__bound__ is int:
					parameterTypes.append(c_int32)
				else:
					raise Exception("Unsupported parameter type '{0!s}' in function '{1}'.".format(parameter, func.__name__))
			else:
				raise Exception("Unsupported parameter type '{0!s}' in function '{1}'.".format(parameter, func.__name__))

		if returnType is None:
			resultType = None
		elif returnType is str:
			resultType = c_char_p
		elif (returnType is int):
			resultType = c_int32
		elif isinstance(returnType, TypeVar):
			if (returnType.__bound__ is int):
				resultType = c_int32
			else:
				raise Exception("Unsupported return type '{0!s}' in function '{1}'.".format(returnType, func.__name__))
		else:
			raise Exception("Unsupported return type '{0!s}' in function '{1}'.".format(returnType, func.__name__))

		functionPointer = getattr(libghdl, subprogramName)
		functionPointer.parameterTypes = parameterTypes
		functionPointer.restype = resultType

		additionalSymbols = dict(func=functionPointer)
		if context is not None:
			additionalSymbols.update(context)

		try:
			inner = __CreateBindingFunction(
				subprogramName=subprogramName,
				parameters=parameters,
				returnType=returnType,
				additionalSymbols=additionalSymbols
			)
		except NameError as ex:
			match = re_search("'(\w+)'", str(ex))
			if match is not None:
				raise Exception("Type '{0}' is unknown for function '{1}'. Hint: provide type via 'context=...' to decorator.".format(
					match.group(1),
					func.__name__
				)) from ex
			else:
				raise ex

		setattr(inner, "__doc__", func.__doc__)
		setattr(inner, "__name__", func.__name__)

		return inner

	return wrapper
