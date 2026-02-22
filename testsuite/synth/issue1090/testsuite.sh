#! /bin/sh

. ../../testenv.sh

synth_tb simple_ram
synth_tb ram2

echo "Test successful"
