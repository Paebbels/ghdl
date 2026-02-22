#! /bin/sh

. ../../testenv.sh

synth_tb simple_ram
synth_tb ram2
synth_tb ram3
synth_tb ram4

echo "Test successful"
