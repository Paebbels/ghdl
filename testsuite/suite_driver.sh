#! /usr/bin/env bash

# Driver for a testsuite
# The first positional argument is required, it's the name of the suite to be executed

set -e

ANSI_GREEN=$'\x1b[32m'
ANSI_RED=$'\x1b[31m'
ANSI_NOCOLOR=$'\x1b[0m'

parse_cmdline () {
  _suite="$1"
  shift

  # This is the only place where test dirs are specified.
  # Do not duplicate this line
  dirs="*[0-9]*"

  full="n"

  for opt; do
    case "$opt" in
      -k | --keep-going)
        full="y"
        ;;
      -j*)
        NPROC=${opt#-j}
        ;;
      --dir=*)
        dirs="$(echo "$opt" | sed -e 's/--dir=//')"
        ;;
      --skip=*)
        d="$(echo "$opt" | sed -e 's/--skip=//')"
        dirs="$(echo "" "$dirs" | sed -e "s/ $d//")"
        ;;
      --start-at=*)
        d="$(echo "$opt" | sed -e 's/--start-at=//')"
        dirs="$(echo "" "$dirs" | sed -e "s/^.* $d//")"
        dirs="$d $dirs"
        ;;
      --list-tests)
        echo $dirs
        exit 0
        ;;
      *)
        printf "Unknown option %s\n" "$opt"
        exit 2
        ;;
    esac
  done

  # If option '-j' was not used, set NPROC to number of available CPUs
  NPROC=${NPROC:-$(nproc 2> /dev/null || sysctl -n hw.ncpu 2> /dev/null || echo 1)}
}

singlerun() {
  cd "$1"
  startTime=$(date +%s%N)

  ./testsuite.sh > test.log 2>&1
  exitCode=$?

  stopTime=$(date +%s%N)
  elapsedTime=$(((stopTime - startTime) / 1000000))
  elapsedTime="$((elapsedTime / 1000)).$((elapsedTime % 1000))"
  if [ $exitCode -eq 0 ]; then
    printf "$_suite $1: ${ANSI_GREEN}ok${ANSI_NOCOLOR}\n"
    printf '    <testcase classname="%s" name="%s" time="%s" />\n' "$_suite" "$1" "$elapsedTime" >> ../../$_suite.testresults
    # Don't disp log
  else
    printf "$_suite $1: ${ANSI_RED}failed${ANSI_NOCOLOR}\n"
    printf '    <testcase classname="%s" name="%s" time="%s"><failure /></testcase>\n' "$_suite" "$1" "$elapsedTime" >> ../../$_suite.testresults
    printf '%s ' "$1" >> ../failures.log
    if [ "$2" = "n" ]; then
      cat test.log
      exit 1;
    fi
  fi
  cd ..
}

allrun () {
  printf '' > failures.log

  if command -v xargs >/dev/null 2>&1 && [ "$NPROC" -ne 1 ]; then
    printf "Running with %s test workers ...\n" $NPROC >&2
    ndirs=$(printf '%s\n' "${dirs[@]}" | wc -l)
    batchSize=$((1 + ndirs / NPROC))
    batchSize=$(( batchSize > 10 ? 10 : batchSize ))
    echo $dirs | DO_ALLRUN=0 xargs -P$NPROC -n$batchSize sh -c \
      's=$1; _suite=$2 full=$3; shift 3; . "$s";
       for i in "$@"; do singlerun "$i" "$full" || true; done' \
      \
      sh "$0" "$_suite" "$full" || true
  else
    for i in $dirs; do
      singlerun "$i" "$full"
    done
  fi

  if [ ! -e failures.log ]; then
    printf "error: Couldn't find test driver generated failures.log!\n" >&2
    exit 1
  fi

  failures="$(cat failures.log)"
  if [ -z "$failures" ]; then
    printf "%s tests are successful\n" "$_suite" && exit 0
  else
    for failed in $failures; do
      printf "%s %s: ${ANSI_RED}failed${ANSI_NOCOLOR}\n" "$_suite" "$failed"
      cat "$failed/test.log"
      printf '\n\n'
    done

    printf "%s test failed (%s)\n" "$_suite" "$failures" && exit 1
  fi
}

if [ "$DO_ALLRUN" != 0 ]; then
  parse_cmdline "$@"
  allrun
fi
