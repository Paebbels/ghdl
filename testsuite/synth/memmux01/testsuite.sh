#! /bin/sh

. ../../testenv.sh

GHDL_STD_FLAGS=--std=08

TESTS="memmux01 memmux02 memmux02b memmux03 memmux03b memmux04 memmux05 memmux07"

for t in $TESTS; do
    GHDL_SYNTH_FLAGS=
    synth_tb $t

    GHDL_SYNTH_FLAGS=-de
    synth_tb $t
done

echo "Test successful"
