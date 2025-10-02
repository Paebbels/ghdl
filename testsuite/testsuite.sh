#! /usr/bin/env bash

# Stop in case of error
set -e

ANSI_RED=$'\x1b[31m'
ANSI_GREEN=$'\x1b[32m'
ANSI_YELLOW=$'\x1b[33m'
ANSI_BLUE=$'\x1b[34m'
ANSI_MAGENTA=$'\x1b[35m'
ANSI_GRAY=$'\x1b[90m'
ANSI_CYAN=$'\x1b[36;1m'
ANSI_DARKCYAN=$'\x1b[36m'
ANSI_NOCOLOR=$'\x1b[0m'

# Display an error message in red and exit.
# In case multiple arguments are given, display multiple error messages line-by-line.
# $1 - error message
die() {
  printf "${ANSI_RED}%s${ANSI_NOCOLOR}\n" "$@" >&2
  exit 1
}

# Print a section start
# $1            - section title
# $2 (optional) - color
print_start() {
  COLOR=${2:-$ANSI_YELLOW}
  printf "${COLOR}%s$ANSI_NOCOLOR\n" "${1}"
}

# Start a section/group
gstart () {
  print_start "$@"
}

# Close a section/group
gend () {
  :
}

# Override functions with enhanced features for CI environments
if [ -n "$GITHUB_ACTIONS" ]; then
  printf "${ANSI_DARKCYAN}INFO:${ANSI_NOCOLOR} override 'gstart' and 'gend' for CI environments\n"

  # Start a section/group
  gstart () {
    printf '::group::'
    print_start "$@"
    SECONDS=0
  }

  # Close a section/group
  gend () {
    duration=$SECONDS
    echo '::endgroup::'
    printf "${ANSI_GRAY}took $((duration / 60)) min $((duration % 60)) sec.${ANSI_NOCOLOR}\n"
  }
fi

#---

# The VESTS testsuite: compliance testsuite, from: https://github.com/nickg/vests.git 388250486a
_vests () {
  gstart "[GHDL - test] vests"
  cd vests

  if ./testsuite.sh > vests.log 2>&1; then
    printf "${ANSI_GREEN}Vests is OK$ANSI_NOCOLOR\n"
    wc -l vests.log
  else
    cat vests.log
    printf "${ANSI_RED}Vests failure$ANSI_NOCOLOR\n"
    failures=vests
  fi

  cd ..

  gend
  [ -z "$failures" ] || exit 1
}

#---

if [ -z "$GHDL" ]; then
  if [ -n "$prefix" ]; then
    export GHDL="$prefix/bin/ghdl"
  elif [ -n "$(command -v which)" ]; then
    export GHDL="$(which ghdl)"
  else
    die "error: GHDL environment variable is not defined"
  fi
fi

if [ -z "$GHWDUMP" ]; then
  case "$GHDL" in
    */*)
      export GHWDUMP=${GHDL%/*}/ghwdump
      ;;
    *)
      export GHWDUMP=ghwdump
      ;;
  esac
fi

command -v "$GHWDUMP" >/dev/null || die "ghwdump executable not found: $GHWDUMP"
command -v "diff"     >/dev/null || die "diff executable not found"

# Set working directory to directory of this script
cd $(dirname "$0")
# Remove result files from previous runs
rm -fv *.testresults
rm -fv test_ok

failures=""
tests=

for opt; do
  shift
  case "$opt" in
    [a-z]*)
      tests="$tests $opt"
      ;;
    --)
      break
      ;;
    *)
      printf "%s: unknown option '%s'\n" "$0" "$opt"\
      exit 2
      ;;
  esac
done

if [ -z "$tests" ]; then
  tests="sanity pyunit gna vests synth vpi vhpi"
fi

printf "> tests:%s\n" "$tests"
printf "> args: %s\n" "$@"

# Run a testsuite
do_test() {
  case $1 in
    help)
      echo "Usage:"
      echo "  ./testsuite.sh                     run all testsuites"
      echo "  ./testsuite.sh <suite>             run single testsuite"
      echo "  ./testsuite.sh <suite> <suite> ... run multiple testsuites"

      echo "Supported testsuites:"
      echo " * sanity"
      echo " * gna"
      echo " * synth"
      echo " * vpi"
      echo " * vhpi"
      echo " * vests"
      echo " * pyunit"
      echo ""
      exit
      ;;
    sanity|gna|synth|vpi|vhpi)
      gstart "[GHDL - test] $1"
      cd "$1"
      ../suite_driver.sh "$@"
      cd ..
      gend
      [ "$failures" = "" ] || exit 1
    ;;

    pyunit)
      # The Python Unit testsuite: regression testsuite for Python bindings to libghdl
      # pyunit/dom fails with python 3.12
      gstart "[GHDL - test] pyunit"
      PYTHONPATH=$(pwd)/.. ${PYTHON:-python3} -m pytest -vsrA pyunit/lsp pyunit/libghdl
      gend
    ;;

    vests)
      _vests
    ;;
    *)
      die "$0: test name '$1' is unknown"
    ;;
  esac
}

gstart "GHDL is: $GHDL"
$GHDL version
printf "REF:  %s\n" "$($GHDL version ref)"
printf "HASH: %s\n" "$($GHDL version hash)"
gend

gstart "GHDL help"
$GHDL help
gend

totalStartTime=$(date +%s%3N)
totalTestCount=0
totalFailedCount=0
totalErroredCount=0
totalSkippedCount=0
# Run testsuites individually in a sequence.
# Each testsuite might run testcases in parallel.
for t in $tests; do
  startTime=$(date +%s%3N)

  # Run a testsuite
  do_test "$t" "$@"

  stopTime=$(date +%s%3N)
  elapsedTime=$((stopTime - startTime))
  elapsedTime="$((elapsedTime / 1000)).$((elapsedTime % 1000))"

  # Extract statistics from
  testCount=$(   cat "$t.testresults" | grep "<testcase" | wc -l)
  failedCount=$( cat "$t.testresults" | grep "<failure"  | wc -l)
  erroredCount=$(cat "$t.testresults" | grep "<error"    | wc -l)
  skippedCount=$(cat "$t.testresults" | grep "<skipped"  | wc -l)
  # Accumulate statistics
  totalTestCount=$((   totalTestCount    + testCount))
  totalFailedCount=$(( totalFailedCount  + failedCount))
  totalErroredCount=$((totalErroredCount + erroredCount))
  totalSkippedCount=$((totalSkippedCount + skippedCount))

  # Create a partial XML file for every testsuite
  printf '  <testsuite name="%s" tests="%s" failures="%s" errors="%s" skipped="%s" time="%s">\n' \
    "$t" "$testCount" "$failedCount" "$erroredCount" "$skippedCount" "$elapsedTime" \
                             > "$t.testresults.xml"
  cat "$t.testresults"      >> "$t.testresults.xml"
  printf '  </testsuite>\n' >> "$t.testresults.xml"
done

totalStopTime=$(date +%s%3N)
totalElapsedTime=$((totalStopTime - totalStartTime))
totalElapsedTime="$((totalElapsedTime / 1000)).$((totalElapsedTime % 1000))"
timestamp="$(date +"%Y-%m-%dT%H:%M:%S%:z")"

# Create final testsuites XML file
printf "<?xml version=\"1.0\" encoding=\"utf-8\"?>
<testsuites name=\"ghdl\" tests=\"%s\" failures=\"%s\" errors=\"%s\" skipped=\"%s\" time=\"%s\" timestamp=\"%s\">\n" \
  "$totalTestCount" "$totalFailedCount" "$totalErroredCount" "$totalSkippedCount" "$totalElapsedTime" "$timestamp" \
                           >  "testsuites.xml"
for t in $tests; do
  cat "$t.testresults.xml" >> "testsuites.xml"
done
printf "</testsuites>\n"   >> "testsuites.xml"

printf "${ANSI_GREEN}[GHDL - test] SUCCESSFUL${ANSI_NOCOLOR}\n"
touch test_ok
