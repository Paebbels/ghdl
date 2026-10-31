#! /bin/sh

. ../../testenv.sh

export GHDL_STD_FLAGS=--std=93
analyze pkg.vhdl
analyze_failure err3.vhdl

clean

export GHDL_STD_FLAGS=--std=08
analyze pkg.vhdl
analyze repro.vhdl
elab_simulate repro

analyze_failure err1.vhdl
analyze_failure err2.vhdl

clean

echo "Test successful"
