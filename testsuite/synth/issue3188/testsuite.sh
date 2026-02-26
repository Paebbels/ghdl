#! /bin/sh

. ../../testenv.sh

GHDL_STD_FLAGS=--std=08
synth_only test2

if ghdl_is_preelaboration; then
    synth_tb test
fi


echo "Test successful"
