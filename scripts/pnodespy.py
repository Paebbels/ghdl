#!/usr/bin/env python3

"""Like pnodes but output for Python."""

from textwrap import dedent

try:
    import scripts.pnodes as pnodes
except ImportError:
    import pnodes

libname = "libghdl"


def print_enum(name, vals):
    print(dedent(f"""

        @export
        @unique
        class {name}(IntEnum):
        """), end=''
    )
    for n, k in enumerate(vals):
        if k == "None":
            k = "PNone"
        print(f"    {k} = {n}")


def print_file_header(includeIntEnumUnique: bool = True, includeBindToLibGHDL: bool = True):
    print(dedent(f"""\
# Auto generated Python source file from Ada sources
# Call 'make' in 'src/vhdl' to regenerate:
#
{'from enum import IntEnum, unique\n\n' if includeIntEnumUnique else ''}\
from pyTooling.Decorators import export
{'\nfrom pyGHDL.libghdl._decorator import BindToLibGHDL\n' if includeBindToLibGHDL else ''}\
    """)
    )


def do_class_kinds():
    print_enum(pnodes.prefix_name.rstrip("_"), pnodes.kinds)
    print(dedent("""

        @export
        class Iir_Kinds:
        """), end=''
    )
    for k, v in pnodes.kinds_ranges.items():
        print(f"    {k} = [")
        for e in v:
            print(f"        Iir_Kind.{e},")
        print("    ]")
        print()


def do_iirs_subprg():
    classname = "vhdl__nodes"
    print(dedent(f"""

        @export
        @BindToLibGHDL("{classname}__get_kind")
        def Get_Kind(node: Iir) -> IirKind:
            \"\"\"Get node kind.\"\"\"
            return 0  # pragma: no cover

        @export
        @BindToLibGHDL("{classname}__get_location")
        def Get_Location(node: Iir) -> LocationType:
            \"\"\"\"\"\"
            return 0  # pragma: no cover
        """)
    )
    for k in pnodes.funcs:
        # Don't use the Iir_* subtypes (as they are not described).
        rtype = k.rtype.replace("_", "") if not k.rtype.startswith("Iir_") else "Iir"
        # Exceptions...
        if rtype == "TokenType":
            rtype = "Tok"

        print(dedent(f"""
            @export
            @BindToLibGHDL("{classname}__get_{k.name.lower()}")
            def Get_{k.name}(obj: Iir) -> {rtype}:
                \"\"\"\"\"\"
                return 0  # pragma: no cover
            @export
            @BindToLibGHDL("{classname}__set_{k.name.lower()}")
            def Set_{k.name}(obj: Iir, value: {rtype}) -> None:
                \"\"\"\"\"\"
            """)
        )


def do_libghdl_elocations():
    classname = "vhdl__elocations"
    print_file_header(includeIntEnumUnique=False, includeBindToLibGHDL=False)
    print("from pyGHDL.libghdl import libghdl")
    print()
    for k in pnodes.funcs:
        print(dedent(f"""
            @export
            def Get_{k.name}(obj):
                return {libname}.{classname}__get_{k.name.lower()}(obj)
            @export
            def Set_{k.name}(obj, value) -> None:
                {libname}.{classname}__set_{k.name.lower()}(obj, value)
            """)
        )


def do_class_types():
    print_enum("types", pnodes.get_types())


def do_types_subprg():
    print()
    for k in pnodes.get_types():
        print(dedent(f"""
            def Get_{k}(node, field):
                return {libname}.vhdl__nodes_meta__get_{k.lower()}(node, field)
            """)
        )


def do_has_subprg():
    print()
    for f in pnodes.funcs:
        print(dedent(f"""
            @export
            @BindToLibGHDL("vhdl__nodes_meta__has_{f.name.lower()}")
            def Has_{f.name}(kind: IirKind) -> bool:
                \"\"\"\"\"\"
            """)
        )


def do_class_field_attributes():
    print_enum("Attr", ["ANone" if a == "None" else a for a in pnodes.get_attributes()])


def do_class_fields():
    print_enum("fields", [f.name for f in pnodes.funcs])


def read_spec_enum(type_name, prefix, class_name):
    """Read an enumeration declaration from iirs.ads."""
    enum = pnodes.read_enum(pnodes.kind_file, type_name, prefix)
    print_enum(class_name, enum)


def do_libghdl_nodes():
    print_file_header()
    print(dedent("""\
        from typing import TypeVar
        from ctypes import c_int32
        from pyGHDL.libghdl._types import (
            Iir,
            IirKind,
            LocationType,
            FileChecksumId,
            TimeStampId,
            SourceFileEntry,
            NameId,
            TriStateType,
            SourcePtr,
            Int32,
            Int64,
            Fp64,
            String8Id,
            Boolean,
            DirectionType,
            PSLNode,
            PSLNFA,
        )
        from pyGHDL.libghdl.vhdl.tokens import Tok

        __all__ = [
            "Null_Iir",
            "Null_Iir_List",
            "Iir_List_All",
            "Null_Iir_Flist",
            "Iir_Flist_Others",
            "Iir_Flist_All",
        ]

        Null_Iir = 0
        \"\"\"
        Null element for an IIR node reference.
        \"\"\"

        Null_Iir_List = 0
        Iir_List_All = 1

        Null_Iir_Flist = 0
        Iir_Flist_Others = 1
        Iir_Flist_All = 2

        DateType = TypeVar("DateType", bound=c_int32)
        """), end=''
    )

    do_class_kinds()
    read_spec_enum("Iir_Mode", "Iir_", "Iir_Mode")
    read_spec_enum("Scalar_Size", "", "ScalarSize")
    read_spec_enum("Iir_Staticness", "", "Iir_Staticness")
    read_spec_enum("Iir_Constraint", "", "Iir_Constraint")
    read_spec_enum("Iir_Delay_Mechanism", "Iir_", "Iir_Delay_Mechanism")
    read_spec_enum("Date_State_Type", "Date_", "DateStateType")
    read_spec_enum("Number_Base_Type", "", "NumberBaseType")
    read_spec_enum("Iir_Predefined_Functions", "Iir_Predefined_", "Iir_Predefined")
    do_iirs_subprg()


def do_libghdl_meta():
    print_file_header()
    print(dedent("""\
        from pyGHDL.libghdl import libghdl
        from pyGHDL.libghdl._types import IirKind


        # From nodes_meta
        @export
        @BindToLibGHDL("vhdl__nodes_meta__get_fields_first")
        def get_fields_first(K: IirKind) -> int:
            \"\"\"
            Return the list of fields for node :obj:`K`.

            In Ada ``Vhdl.Nodes_Meta.Get_Fields`` returns a ``Fields_Array``. To emulate
            this array access, the API provides ``get_fields_first`` and :func:`get_fields_last`.

            The fields are sorted: first the non nodes/list of nodes, then the
            nodes/lists that aren't reference, and then the reference.

            :param K: Node to get first array index from.
            \"\"\"
            return 0  # pragma: no cover


        @export
        @BindToLibGHDL("vhdl__nodes_meta__get_fields_last")
        def get_fields_last(K: IirKind) -> int:
            \"\"\"
            Return the list of fields for node :obj:`K`.

            In Ada ``Vhdl.Nodes_Meta.Get_Fields`` returns a ``Fields_Array``. To emulate
            this array access, the API provides :func:`get_fields_first` and ``get_fields_last``.

            The fields are sorted: first the non nodes/list of nodes, then the
            nodes/lists that aren't reference, and then the reference.

            :param K: Node to get last array index from.
            \"\"\"
            return 0  # pragma: no cover

        @export
        @BindToLibGHDL("vhdl__nodes_meta__get_field_by_index")
        def get_field_by_index(K: IirKind) -> int:
            \"\"\"\"\"\"
            return 0  # pragma: no cover

        @export
        def get_field_type(*args):
            return libghdl.vhdl__nodes_meta__get_field_type(*args)

        @export
        def get_field_attribute(*args):
            return libghdl.vhdl__nodes_meta__get_field_attribute(*args)
        """), end=''
    )

    do_class_types()
    do_class_field_attributes()
    do_class_fields()
    do_types_subprg()
    do_has_subprg()


def do_libghdl_names():
    res = pnodes.read_std_names()
    print_file_header(includeIntEnumUnique=False, includeBindToLibGHDL=False)
    print(dedent("""

        @export
        class Name:
        """), end=''
    )

    for n, v in res:
        # Avoid clash with Python names
        if n in ["False", "True", "None"]:
            n = "N" + n
        print(f"    {n} = {v}")


def do_libghdl_tokens():
    print_file_header(includeBindToLibGHDL=False)
    enum = pnodes.read_enum("vhdl-tokens.ads", "Token_Type", "Tok_")
    print_enum("Tok", enum)


def do_libghdl_errorout():
    print_file_header()
    print(dedent("""\
        @export
        @BindToLibGHDL("errorout__enable_warning")
        def Enable_Warning(Id: int, Enable: bool) -> None:
            \"\"\"\"\"\"
        """), end=''
    )

    enum = pnodes.read_enum(
        "../errorout.ads",
        "Msgid_Type",
        "(Msgid|Warnid)_",
        g=lambda m: m.group(1) + "_" + m.group(2),
    )
    print_enum("Msgid", enum)


pnodes.actions.update(
    {
        "class-kinds": do_class_kinds,
        "libghdl-nodes": do_libghdl_nodes,
        "libghdl-meta": do_libghdl_meta,
        "libghdl-names": do_libghdl_names,
        "libghdl-tokens": do_libghdl_tokens,
        "libghdl-elocs": do_libghdl_elocations,
        "libghdl-errorout": do_libghdl_errorout,
    }
)


def _generateCLIParser():
    return pnodes._generateCLIParser()


if __name__ == "__main__":
    pnodes.main()
