#! /bin/sh

. ../../testenv.sh

export GHDL_STD_FLAGS=--std=08
analyze test_pkg.vhdl test_tb.vhdl
elab_simulate test_tb

clean

echo "Test successful"
