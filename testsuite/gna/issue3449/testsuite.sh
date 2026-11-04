#! /bin/sh

. ../../testenv.sh

for std in 08 19; do
    GHDL_STD_FLAGS=--std=$std
    analyze pkgs.vhdl

    #  LRM08 12.4 c): same designator, neither enumeration literals nor
    #  subprograms.  Not made directly visible, even if they denote the same
    #  named entity.
    for f in type1 type2 type3 type4 type5 type6 type7 unit1 comp1 obj1 obj2; do
        analyze_failure $f.vhdl
    done

    #  Enumeration literals, subprograms and their aliases are overloadable.
    #  A local declaration hides a potentially visible one, a conflict matters
    #  only if the name is used.
    for f in subp1 subp2 subp3 lit1 lit2 lit3 local1 same1 unused1; do
        analyze $f.vhdl
    done

    clean
done

echo "Test successful"
