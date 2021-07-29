# =============================================================================
#               ____ _   _ ____  _          _
#  _ __  _   _ / ___| | | |  _ \| |      __| | ___  _ __ ___
# | '_ \| | | | |  _| |_| | | | | |     / _` |/ _ \| '_ ` _ \
# | |_) | |_| | |_| |  _  | |_| | |___ | (_| | (_) | | | | | |
# | .__/ \__, |\____|_| |_|____/|_____(_)__,_|\___/|_| |_| |_|
# |_|    |___/
# =============================================================================
# Authors:
#   Patrick Lehmann
#
# Package module:   A pretty printer to format the DOM as a tree in text form.
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
from typing import List, Union

from pydecor import export

from pyVHDLModel.SyntaxModel import (
    GenericInterfaceItem,
    NamedEntity,
    PortInterfaceItem,
    WithDefaultExpressionMixin,
    Function,
    BaseType,
    FullType,
)

from pyGHDL import GHDLBaseException
from pyGHDL.dom.NonStandard import Document, Design, Library
from pyGHDL.dom.DesignUnit import (
    Entity,
    Architecture,
    Package,
    PackageBody,
    Configuration,
    Context,
    Component,
    UseClause,
    PackageInstantiation,
)
from pyGHDL.dom.Symbol import (
    SimpleSubtypeSymbol,
    ConstrainedCompositeSubtypeSymbol,
)
from pyGHDL.dom.Type import (
    IntegerType,
    Subtype,
    ArrayType,
    RecordType,
    AccessType,
    EnumeratedType,
    FileType,
    ProtectedType,
    ProtectedTypeBody,
    PhysicalType,
    IncompleteType,
)
from pyGHDL.dom.InterfaceItem import (
    GenericConstantInterfaceItem,
    PortSignalInterfaceItem,
    GenericTypeInterfaceItem,
)
from pyGHDL.dom.Object import Constant, Signal, SharedVariable, File
from pyGHDL.dom.Attribute import Attribute, AttributeSpecification
from pyGHDL.dom.Subprogram import Procedure
from pyGHDL.dom.Misc import Alias
from pyGHDL.dom.PSL import DefaultClock


StringBuffer = List[str]


@export
class PrettyPrintException(GHDLBaseException):
    pass


@export
class PrettyPrint:
    # _buffer: StringBuffer
    #
    # def __init__(self):
    #     self._buffer = []

    def formatDesign(self, design: Design, level: int = 0) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append("{prefix}Libraries:".format(prefix=prefix))
        for library in design.Libraries.values():
            for line in self.formatLibrary(library, level + 1):
                buffer.append(line)
        buffer.append("{prefix}Documents:".format(prefix=prefix))
        for document in design.Documents:
            buffer.append(
                "{prefix}- Path: '{doc!s}':".format(doc=document.Path, prefix=prefix)
            )
            for line in self.formatDocument(document, level + 1):
                buffer.append(line)

        return buffer

    def formatLibrary(self, library: Library, level: int = 0) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append("{prefix}Entities:".format(prefix=prefix))
        for entity in library.Entities:
            for line in self.formatEntity(entity, level + 1):
                buffer.append(line)
        # buffer.append("{prefix}Architectures:".format(prefix=prefix))
        # for architecture in library.Architectures:
        #     for line in self.formatArchitecture(architecture, level + 1):
        #         buffer.append(line)
        buffer.append("{prefix}Packages:".format(prefix=prefix))
        for package in library.Packages:
            if isinstance(package, Package):
                gen = self.formatPackage
            else:
                gen = self.formatPackageInstance

            for line in gen(package, level + 1):
                buffer.append(line)
        # buffer.append("{prefix}PackageBodies:".format(prefix=prefix))
        # for packageBodies in library.PackageBodies:
        #     for line in self.formatPackageBody(packageBodies, level + 1):
        #         buffer.append(line)
        buffer.append("{prefix}Configurations:".format(prefix=prefix))
        for configuration in library.Configurations:
            for line in self.formatConfiguration(configuration, level + 1):
                buffer.append(line)
        buffer.append("{prefix}Contexts:".format(prefix=prefix))
        for context in library.Contexts:
            for line in self.formatContext(context, level + 1):
                buffer.append(line)

        return buffer

    def formatDocument(self, document: Document, level: int = 0) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append("{prefix}Entities:".format(prefix=prefix))
        for entity in document.Entities:
            for line in self.formatEntity(entity, level + 1):
                buffer.append(line)
        buffer.append("{prefix}Architectures:".format(prefix=prefix))
        for architecture in document.Architectures:
            for line in self.formatArchitecture(architecture, level + 1):
                buffer.append(line)
        buffer.append("{prefix}Packages:".format(prefix=prefix))
        for package in document.Packages:
            if isinstance(package, Package):
                gen = self.formatPackage
            else:
                gen = self.formatPackageInstance

            for line in gen(package, level + 1):
                buffer.append(line)
        buffer.append("{prefix}PackageBodies:".format(prefix=prefix))
        for packageBodies in document.PackageBodies:
            for line in self.formatPackageBody(packageBodies, level + 1):
                buffer.append(line)
        buffer.append("{prefix}Configurations:".format(prefix=prefix))
        for configuration in document.Configurations:
            for line in self.formatConfiguration(configuration, level + 1):
                buffer.append(line)
        buffer.append("{prefix}Contexts:".format(prefix=prefix))
        for context in document.Contexts:
            for line in self.formatContext(context, level + 1):
                buffer.append(line)

        return buffer

    def formatEntity(self, entity: Entity, level: int = 0) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append(
            "{prefix}- Name: {name} at {file}:{line}:{column}".format(
                name=entity.Identifier,
                prefix=prefix,
                file=entity.Position.Filename.name,
                line=entity.Position.Line,
                column=entity.Position.Column,
            )
        )
        buffer.append("{prefix}  Generics:".format(prefix=prefix))
        for generic in entity.GenericItems:
            for line in self.formatGeneric(generic, level + 1):
                buffer.append(line)
        buffer.append("{prefix}  Ports:".format(prefix=prefix))
        for port in entity.PortItems:
            for line in self.formatPort(port, level + 1):
                buffer.append(line)
        buffer.append("{prefix}  Declared:".format(prefix=prefix))
        for item in entity.DeclaredItems:
            for line in self.formatDeclaredItems(item, level + 1):
                buffer.append(line)

        return buffer

    def formatArchitecture(
        self, architecture: Architecture, level: int = 0
    ) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append(
            "{prefix}- Name: {name} at {file}:{line}:{column}".format(
                name=architecture.Identifier,
                prefix=prefix,
                file=architecture.Position.Filename.name,
                line=architecture.Position.Line,
                column=architecture.Position.Column,
            )
        )
        buffer.append(
            "{prefix}  Entity: {entity}".format(
                entity=architecture.Entity.SymbolName, prefix=prefix
            )
        )
        buffer.append("{prefix}  Declared:".format(prefix=prefix))
        for item in architecture.DeclaredItems:
            for line in self.formatDeclaredItems(item, level + 2):
                buffer.append(line)

        return buffer

    def formatComponent(self, component: Component, level: int = 0) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append(
            "{prefix}- Component: {name}".format(
                name=component.Identifier, prefix=prefix
            )
        )
        buffer.append("{prefix}  Generics:".format(prefix=prefix))
        for generic in component.GenericItems:
            for line in self.formatGeneric(generic, level + 1):
                buffer.append(line)
        buffer.append("{prefix}  Ports:".format(prefix=prefix))
        for port in component.PortItems:
            for line in self.formatPort(port, level + 1):
                buffer.append(line)

        return buffer

    def formatPackage(self, package: Package, level: int = 0) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append(
            "{prefix}- Name: {name}".format(name=package.Identifier, prefix=prefix)
        )
        buffer.append("{prefix}  Declared:".format(prefix=prefix))
        for item in package.DeclaredItems:
            for line in self.formatDeclaredItems(item, level + 1):
                buffer.append(line)

        return buffer

    def formatPackageInstance(
        self, package: PackageInstantiation, level: int = 0
    ) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append(
            "{prefix}- Name: {name}".format(name=package.Identifier, prefix=prefix)
        )
        buffer.append(
            "{prefix}  Package: {name!s}".format(
                prefix=prefix, name=package.PackageReference
            )
        )
        buffer.append("{prefix}  Generic Map: ...".format(prefix=prefix))
        #        for item in package.GenericItems:
        #            for line in self.formatGeneric(item, level + 1):
        #                buffer.append(line)

        return buffer

    def formatPackageBody(
        self, packageBody: PackageBody, level: int = 0
    ) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append(
            "{prefix}- Name: {name}".format(name=packageBody.Identifier, prefix=prefix)
        )
        buffer.append("{prefix}  Declared:".format(prefix=prefix))
        for item in packageBody.DeclaredItems:
            for line in self.formatDeclaredItems(item, level + 1):
                buffer.append(line)

        return buffer

    def formatConfiguration(
        self, configuration: Configuration, level: int = 0
    ) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append(
            "{prefix}- Name: {name}".format(
                name=configuration.Identifier, prefix=prefix
            )
        )

        return buffer

    def formatContext(self, context: Context, level: int = 0) -> StringBuffer:
        buffer = []
        prefix = "  " * level
        buffer.append(
            "{prefix}- Name: {name}".format(name=context.Identifier, prefix=prefix)
        )

        return buffer

    def formatGeneric(
        self, generic: Union[NamedEntity, GenericInterfaceItem], level: int = 0
    ) -> StringBuffer:
        if isinstance(generic, GenericConstantInterfaceItem):
            return self.formatGenericConstant(generic, level)
        elif isinstance(generic, GenericTypeInterfaceItem):
            return self.formatGenericType(generic, level)
        else:
            raise PrettyPrintException(
                "Unhandled generic kind for generic '{name}'.".format(
                    name=generic.Identifier
                )
            )

    def formatPort(
        self, port: Union[NamedEntity, PortInterfaceItem], level: int = 0
    ) -> StringBuffer:
        if isinstance(port, PortSignalInterfaceItem):
            return self.formatPortSignal(port, level)
        else:
            raise PrettyPrintException(
                "Unhandled port kind for port '{name}'.".format(name=port.Identifier)
            )

    def formatGenericConstant(
        self, generic: GenericConstantInterfaceItem, level: int = 0
    ) -> StringBuffer:
        buffer = []
        prefix = "  " * level

        buffer.append(
            "{prefix}  - {name} : {mode!s} {subtypeindication}{initialValue}".format(
                prefix=prefix,
                name=", ".join(generic.Identifiers),
                mode=generic.Mode,
                subtypeindication=self.formatSubtypeIndication(
                    generic.Subtype, "generic", generic.Identifiers[0]
                ),
                initialValue=self.formatInitialValue(generic),
            )
        )

        return buffer

    def formatGenericType(
        self, generic: GenericConstantInterfaceItem, level: int = 0
    ) -> StringBuffer:
        buffer = []
        prefix = "  " * level

        buffer.append(
            "{prefix}  - type {name}".format(
                prefix=prefix,
                name=generic.Identifier,
            )
        )

        return buffer

    def formatPortSignal(
        self, port: PortSignalInterfaceItem, level: int = 0
    ) -> StringBuffer:
        buffer = []
        prefix = "  " * level

        buffer.append(
            "{prefix}  - {name} : {mode!s} {subtypeindication}{initialValue}".format(
                prefix=prefix,
                name=", ".join(port.Identifiers),
                mode=port.Mode,
                subtypeindication=self.formatSubtypeIndication(
                    port.Subtype, "port", port.Identifiers[0]
                ),
                initialValue=self.formatInitialValue(port),
            )
        )

        return buffer

    def formatDeclaredItems(self, item, level: int = 0) -> StringBuffer:
        buffer = []
        prefix = "  " * level

        if isinstance(item, Constant):
            buffer.append(
                "{prefix}- constant {name} : {subtype} := {expr}".format(
                    prefix=prefix,
                    name=item.Identifier,
                    subtype=self.formatSubtypeIndication(
                        item.Subtype, "constant", item.Identifier
                    ),
                    expr=str(item.DefaultExpression),
                )
            )
        elif isinstance(item, SharedVariable):
            buffer.append(
                "{prefix}- shared variable {name} : {subtype}".format(
                    prefix=prefix,
                    name=", ".join(item.Identifiers),
                    subtype=self.formatSubtypeIndication(
                        item.Subtype, "shared variable", item.Identifiers[0]
                    ),
                )
            )
        elif isinstance(item, Signal):
            buffer.append(
                "{prefix}- signal {name} : {subtype}{initValue}".format(
                    prefix=prefix,
                    name=", ".join(item.Identifiers),
                    subtype=self.formatSubtypeIndication(
                        item.Subtype, "signal", item.Identifiers[0]
                    ),
                    initValue=" := {expr}".format(expr=str(item.DefaultExpression))
                    if item.DefaultExpression is not None
                    else "",
                )
            )
        elif isinstance(item, File):
            buffer.append(
                "{prefix}- File {name} : {subtype}".format(
                    prefix=prefix,
                    name=", ".join(item.Identifiers),
                    subtype=self.formatSubtypeIndication(
                        item.Subtype, "file", item.Identifiers[0]
                    ),
                )
            )
        elif isinstance(item, (FullType, IncompleteType)):
            buffer.append(
                "{prefix}- {type}".format(prefix=prefix, type=self.formatType(item))
            )
        elif isinstance(item, Subtype):
            buffer.append(
                "{prefix}- subtype {name} is ?????".format(
                    prefix=prefix,
                    name=item.Identifier,
                )
            )
        elif isinstance(item, Alias):
            buffer.append(
                "{prefix}- alias {name} is ?????".format(
                    prefix=prefix,
                    name=item.Identifier,
                )
            )
        elif isinstance(item, Function):
            buffer.append(
                "{prefix}- function {name} return {returnType!s}".format(
                    prefix=prefix, name=item.Identifier, returnType=item.ReturnType
                )
            )
        elif isinstance(item, Procedure):
            buffer.append(
                "{prefix}- procedure {name}".format(
                    prefix=prefix,
                    name=item.Identifier,
                )
            )
        elif isinstance(item, Component):
            for line in self.formatComponent(item, level):
                buffer.append(line)
        elif isinstance(item, Attribute):
            buffer.append(
                "{prefix}- attribute {name} : {type!s}".format(
                    prefix=prefix, name=item.Identifier, type=item.Subtype
                )
            )
        elif isinstance(item, AttributeSpecification):
            buffer.append(
                "{prefix}- attribute {name!s} of {entity} : {entityClass} is {value}".format(
                    prefix=prefix,
                    name=item.Attribute,
                    entity="????",
                    entityClass="????",
                    value="????",
                )
            )
        elif isinstance(item, UseClause):
            buffer.append(
                "{prefix}- use {name!s}".format(prefix=prefix, name=item.Item)
            )
        elif isinstance(item, Package):
            buffer.append(
                "{prefix}- package {name} is ..... end package".format(
                    prefix=prefix, name=item.Identifier
                )
            )
        elif isinstance(item, PackageInstantiation):
            buffer.append(
                "{prefix}- package {name} is new {name2!s} generic map (.....)".format(
                    prefix=prefix, name=item.Identifier, name2=item.PackageReference
                )
            )
        elif isinstance(item, DefaultClock):
            buffer.append(
                "{prefix}- default {name} is {expr}".format(
                    prefix=prefix, name=item.Identifier, expr="..."
                )
            )
        else:
            raise PrettyPrintException(
                "Unhandled declared item kind '{name}'.".format(
                    name=item.__class__.__name__
                )
            )

        return buffer

    def formatType(self, item: BaseType) -> str:
        result = "type {name} is ".format(name=item.Identifier)
        if isinstance(item, IncompleteType):
            result += ""
        elif isinstance(item, IntegerType):
            result += "range {range!s}".format(range=item.Range)
        elif isinstance(item, EnumeratedType):
            result += "(........)"
        elif isinstance(item, PhysicalType):
            result += " is range ....... units ..... end units"
        elif isinstance(item, ArrayType):
            result += "array(........) of ....."
        elif isinstance(item, RecordType):
            result += "record ..... end record"
        elif isinstance(item, AccessType):
            result += "access ....."
        elif isinstance(item, FileType):
            result += "file ....."
        elif isinstance(item, ProtectedType):
            result += "protected ..... end protected"
        elif isinstance(item, ProtectedTypeBody):
            result += "protected body ..... end protected body"
        else:
            raise PrettyPrintException(
                "Unknown type '{name}'".format(name=item.__class__.__name__)
            )

        return result

    def formatSubtypeIndication(self, subtypeIndication, entity: str, name: str) -> str:
        if isinstance(subtypeIndication, SimpleSubtypeSymbol):
            return "{type}".format(type=subtypeIndication.SymbolName)
        elif isinstance(subtypeIndication, ConstrainedCompositeSubtypeSymbol):
            constraints = []
            for constraint in subtypeIndication.Constraints:
                constraints.append(str(constraint))

            return "{type}({constraints})".format(
                type=subtypeIndication.SymbolName, constraints=", ".join(constraints)
            )
        else:
            raise PrettyPrintException(
                "Unhandled subtype kind '{type}' for {entity} '{name}'.".format(
                    type=subtypeIndication.__class__.__name__, entity=entity, name=name
                )
            )

    def formatInitialValue(self, item: WithDefaultExpressionMixin) -> str:
        if item.DefaultExpression is None:
            return ""

        return " := {expr!s}".format(expr=item.DefaultExpression)
