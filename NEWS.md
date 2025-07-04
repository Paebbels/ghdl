## [2025-06-17] 5.1

- Improve release management
- Add llvm-jit build

## [2025-03-01] 5.0

- Fix some crashes on errors on Windows x64 with mcode backend
- Multiple minor fixes and improvements

## [2024-04-14] 4.1

- The mcode backend is now fully supported on Windows x64
- Coverage output has been improved for being supported by vunit.

## [2024-03-06] 4.0

- For the mcode backend, elaboration of the designs is now performed
  before code generation.  This allows some optimizations and the support
  of external names.
- There is a new signal dumper (using FST format) for the mcode backend.
- The GCC backend will be deprecated and the  LLVM backend will be used like
  the mcode backend (code generation in memory). As a consequence, no backend
  will generate object files anymore.

## [2023-03-08] 3.0

[![GitHub v3.0 milestone](https://img.shields.io/github/milestones/progress/ghdl/ghdl/11?style=flat-square)](https://github.com/ghdl/ghdl/milestone/11?closed=1)

- Handle IEEE operators for static expressions.
- Improved support of VHDL 2008 (still!).
- Start support of VHDL 2019 (`--std=19`).
- pyGHDL:
  - Experimental support to preserve VHDL code comments for documentation
	  extraction.
  - Experimental packaging with a platform-specific shared library for
	  standalone installation using PIP.
  - DOM: dependency graphs, instantiation graphs (design hierarchy),
	  file dependencies (compile order).
- Pre-releases are published to GitHub Releases and assets are uploaded to
  pre-releases and releases.

## [2023-03-06] 3.0.0-rc.4

See `3.0`.

## [2022-02-28] 2.0

[![GitHub v2.0 milestone](https://img.shields.io/github/milestones/progress/ghdl/ghdl/10?style=flat-square)](https://github.com/ghdl/ghdl/milestone/10?closed=1)

- Improvements to VHDL 2008 supports and synthesis.

## [2021-02-02] 1.0

[![GitHub v1.0 milestone](https://img.shields.io/github/milestones/progress/ghdl/ghdl/9?style=flat-square)](https://github.com/ghdl/ghdl/milestone/9?closed=1)

- Python bindings overhauled and renamed to `pyGHDL`. Three modules are included:
  `libghdl`, `lsp` and `dom`.
- Utility scripts in the codebase moved into subdir `scripts`: CI, binding
  generation, vendors, etc.
- Repository [ghdl/ghdl-cosim](https://github.com/ghdl/ghdl-cosim) created.
  It contains documentation and code examples related to VHPIDIRECT, VPI and SystemC.
- GitHub Action [ghdl/setup-ghdl-ci](https://github.com/ghdl/setup-ghdl-ci)
  created, to allow easy installation of nightly GHDL assets in GitHub Actions
  workflows.
- Main documentation site(s) moved to [ghdl.github.io/ghdl](https://ghdl.github.io/ghdl/)
  and [ghdl.github.io/ghdl-cosim](https://ghdl.github.io/ghdl-cosim/).
- Repository [ghdl/extended-tests](https://github.com/ghdl/extended-tests)
  created for testing `vendors` build scripts.
- Logo updated (org, ghdl/ghdl, ghdl/docker and ghdl/ghdl-cosim).
- Assets not added to releases or pre-releases anymore.
  Users should use package managers or nightly assets (updated after each
  successful CI run of branch `master`):
  [nightly](https://github.com/ghdl/ghdl/releases/tag/nightly).

## [2021-01-31] 1.0.0rc1

See `1.0`.

## [2020-05-21] Nightly build assets

- After each successful CI run of branch `master`, packages are published as assets of pre-release [nightly](https://github.com/ghdl/ghdl/releases/tag/nightly).
- GitHub Action [ghdl/setup-ghdl-ci](https://github.com/ghdl/setup-ghdl-ci) was created, to allow easy installation of nightly GHDL assets in GitHub Actions workflows.

## [2020-05-09] New repositories and a wiki

- The plugin for Yosys was moved from [tgingold/ghdlsynth-beta](https://github.com/tgingold/ghdlsynth-beta)
  to [ghdl/ghdl-yosys-plugin](https://github.com/ghdl/ghdl-yosys-plugin).
- Repository [ghdl/ghdl-cosim](https://github.com/ghdl/ghdl-cosim) was created.
  It contains documentation and code examples related to VHPIDIRECT, VPI and SystemC.
	See {ref}`COSIM` and [Previous work and future ideas](https://github.com/ghdl/ghdl-cosim/issues/1).
- A [Wiki](https://github.com/ghdl/ghdl/wiki) was created.
  The roadmap and ideas for documentation and internship programs were moved there.
	If you want to contribute anyhow, [have a look](https://github.com/ghdl/ghdl/wiki)!

## [2020-02-28] 0.37

[![GitHub v0.37 milestone](https://img.shields.io/github/milestones/progress/ghdl/ghdl/8?style=flat-square)](https://github.com/ghdl/ghdl/milestone/8?closed=1)

- Python binding added
- Experimental support of synthesis (either with --synth or with the Yosys plugin)
- Fixes and improved support of VHDL 2008
  - PSL keywords are directly handled in VHDL 2008
- Add support for assume.
- Last version that supports the Mentor variation of `std_logic_arith`.
  The Synopsys one is still available.

## [2019-03-03] 0.36

[![GitHub v0.36 milestone](https://img.shields.io/github/milestones/progress/ghdl/ghdl/7?style=flat-square)](https://github.com/ghdl/ghdl/milestone/7?closed=1)

- More support of unbounded arrays and records.
- Support of UVVM and VUnit.

## [2019-02-23] 0.36-rc1

See `0.36`.

## [2018-11-29] 20181129

## [2017-12-20] GitHub organization

A new GitHub organization is created and the main repo is moved from
[github.com/tgingold/ghdl](https://github.com/tgingold/ghdl) to [github.com/ghdl/ghdl](https://github.com/ghdl/ghdl).
Old refs will continue working, because permanent redirects are set up.
However, we suggest every contributor to update the remote URLs in their local clones.

## [2017-12-14] 0.35

[![GitHub v0.35 milestone](https://img.shields.io/github/milestones/progress/ghdl/ghdl/3?style=flat-square)](https://github.com/ghdl/ghdl/milestone/3?closed=1)

- Assert and report messages are sent to stdout (#394)
- Improve support for unbounded records
- Bugs fixed

## [2017-08-15] 0.34

[![GitHub v0.34 milestone](https://img.shields.io/github/milestones/progress/ghdl/ghdl/1?style=flat-square)](https://github.com/ghdl/ghdl/milestone/1?closed=1)

- Display stack backtraces on errors or assert failures
- Compile scripts for vendor libraries (Xilinx, Altera, osvvm, vunit)
- Use SSE2 for mcode backend
- mcode backend ported to `x86_64`
- Support cocotb [potentialventures/cocotb](https://github.com/potentialventures/cocotb)
- Main repository is now on github: [github.com/tgingold/ghdl](https://github.com/tgingold/ghdl)
- Docs available on rtd: [ghdl.readthedocks.org](https://ghdl.readthedocs.org/en/latest/)
- Speed improved.
- New option `--psl-report`, to report status of PSL assert and cover.
- VHDL2008: support nested package

## [2015-10-23] 0.33

- Improve support of VHDL2008
- Support [OSVVM](http://osvvm.org) 2015
- Support VUnit: [LarsAsplund/vunit](https://github.com/LarsAsplund/vunit)
- Many bugs fixed

## [2014-11-XX] 0.32

- Updated to build with `gcc-4.9.2`.
- support:
	- partial of VHDL2008 (available with `--std=08`):
	- new `std.env` package.
	- added features in `std.textio` package
	- all standard IEEE packages.
	- new operations (relation operators, maximum and minimum, unary reduction operators)
	- `boolean_vector`, `integer_vector`, `real_vector`.
	- process(all).
	- generic packages and interface package declarations.
	- block comments (aka delimited comments)
	- implicitly defined to_string functions.
	- OSVVM 2014_01
- Bugs fixed

## [2014-01-XX] 0.31

- Updated to build with `gcc-4.8.2`.
- Supports OSVVM (Open-Source VHDL Verification Methodology) (see [osvvm.org](http://osvvm.org)) in its VHDL-2002 form.
- Adds `'image` and `'value` attributes for all required datatypes
- Many bugs and support issues fixed.
- New home on `https://sourceforge.net/projects/ghdl-updates/`

## 0.30

Never released, switch to Dunoon Edition.

## [2010-01-09] 0.29

- Initial implementation of embedded PSL assertions.
- Improve:
	- speed of non-sensitized processes.
	- speed of string case statement (dichotomy instead of linear search).
- bug fix:
	- and improvements in SDF annotator.
	- when the bound of a string literal type is not locally static.
	- gcov crash

## [2009-09-17] 0.28

- Add `--std=08` to enable VHDL2008 features.
- Support all-sensitized processes from VHDL2008.
- Documentation typos (thanks to Peter Huewe).
- bug fix:
  - handle `'pos/'leftof/'rightof/'succ/'pred` in concurrent statements.
  - overloaded resolution functions.
  - direct drivers elaboration for unconstrained array signals.
  - many minor bugs.

## [2008-07-01] 0.27

- Improve SDF annotation (handles much more annotations)
- Add `--ieee-asserts=` option to control assert messages from ieee packages.
- bug fix:
  - aliases in port map
  - crash during elaboration for top entities with ports/generic
  - crash when string literal in aggregate.
  - concatenation with an array subtype element.
  - non-static subtype used by type conversions in associations.
  - clear timeout in wait for.
  - minor bugs.

## [2007-04-08] 0.26

- `GHDL_PREFIX` environment variable overrides default installation prefix.
- simulation speed improved with 'direct drivers'.
- windows version:
	- exceptions are caught
	- use executable path instead of registry for prefix
- bug fix:
	- individual association by expression (was not working)
	- individual association of string
	- within windows code generator
	- [windows] large local variables crashed
	- crash when overloaded aggregate target.
	- forbid individual association with open
	- crash when bad array prefix
	- correctly extract sensitivity of record aggregate

## [2006-08-11] 0.25

- VPI functions to schedules values.
- `math_real` now works under windows.
- documentation updated for windows.
- filename/line number displayed for range error during signal update.
- bug fix:
	- ieee math libraries available when `--ieee=synopsys`.
	- `'image` in package bodies.
	- scan of fp literals.
	- interface identifier is checked for conformance rules.
	- avoid a crash in case of error in configuration specification.
	- non-static choice in unidim case are now correctly checked.
	- do not crash in case of bad use of incomplete type.
	- `'range` are not expressions.
	- handle file declaration in concurrent procedure calls.
	- correctly handle static `'image` attribute.
	- handle in-conversion for signal associated with an expression.
	- emit an error when a function tries to exit without a return.

## [2006-06-25] 0.24

- Handle enums with more than 256 elements.
- Relax expr static rules in 93c to analyze Xilinx core lib from 8.1
- man page, `ghdl.1`, added.
- windows installer improved
- bug fix:
	- correctly handle empty file name.
	- correctly handle unused subprograms of protected types.
	- avoid a crash if unused library are used.
	- avoid crashes during error reports.
	- add a missing case array conversion.
	- build on `x86_64`.
	- code generated for conversion after mod/rem (windows version).
	- `-fexplicit` crashed with `std.standard` functions.
	- handle recursion of pure/wait checks.
	- correctly handle error cases of user attributes
	- time and character read procedure of std.textio.
	- initialize by value parameters (instead of copy-in).

## [2006-05-16] 0.23

- bug fix:
	- handle implicit conversion in resolution functions.
	- missing implicit conversion added.
	- avoid a crash in error.

## [2006-03-28] 0.22

- direntry added in `ghdl.texi`
- updated:
	- Documentation (explain bug in Xilinx unisim library).
	- to `gcc 4.1`
	- math_real
- bug fix:
	- avoid crash if type conversion is indexed/sliced
	- do not allow anymore uncomplete individual association
	- missing check on array association
	- check bounds for val attribute on enumerated type
	- array inequality of locally static expressions evaluated
	- configuration issue
	- `--warn-no-vital-generic` is now working

## [2005-12-18] 0.21

- local optimizations (loops, indexed name).
- simulation speed improved by 20% due to processes mngt optimizations.
- stack-switching code ported to `x86_64` (`amd64/em64t`).
- stack-switching code ported to `ia64`.
- `--syn-binding` option extended (see documentation).
- bug fix:
	- line number for some bound violation messages.
	- improved message error for deferred constants.
	- file parameter for functions.
	- universal real divided by integer handled in locally static expr.
	- `std_ulogic` types and arrays are known by VPI.
	- missing space added in VCDs for integers.
	- `CR+LF` is also end of line for `std.textio.readline`.
	- avoid a crash if parse error on choice.
	- handle `'image` in nested subprograms.
	- handle `'image` for floating point types.
	- do not use varargs C calls.
	- handle missing `EOL` for `readline`.
	- for `x86_64`

## 0.20 [2005-10-15]

- stack memory usage improved for shortcut operations.
- gtkwave now displays nice waves for bit and std_ulogic signals.
- time unit is displayed in assert/report message.
- `-fexplicit` option added.
- integers are now written in VCD files.
- hash table added for design_units (speed optimization).
- range checks slightly optimized.
- `--vcdz` run time option added.
- improved error message for invalid expressions.
- grt now compiles with GNAT-GPL-2005 (use a GNAT bug work-around).
- bug fix:
	- handle more types for `--dump-rti` and `--wave`.
	- `'last_event` and `'last_active` (bad value returned when no previous event or activity).
	- `'image` attribute for physical types (was bad unit).
	- `'image` attribute for locally static integers.
	- for reading `.ghw` files.
	- in `--xref`.

## [2005-08-17] 0.19

- `ADAFLAGS` has been replaced by `GHDL_ADAFLAGS` to ease compilation.
- `ieee.math_real` and `ieee.math_complex` added (only partially, based on a
  draft).
- current time is printed with assert/report messages.
- stack switch assembly code ported to powerpc-linux.
- documentation on how to use grt from Ada added.
- allow indexes of indexed names to be non-static in case statements (93c only)
  (this is not standard, but I can't see why it should be required).
- unbound ports of entities are now reported with `--warn-binding`.
- some error or warning messages improved.
- `--wave` option added to dump waveforms (using ghw file format).
- bug fix:
	- internal error (missing close_temp for implicit read)
	- `--xref-html`: avoid to reanalyze unit.
	- handle implicit conversion for `'image`.
	- aggregate assigned to an aggregate: avoid crash.
	- array attributes on unconstrained array: avoid crash.
	- `'last_event` returns `time'high` if no event.
	- `'last_event` on array (uninitialized variable).
	- allow calling `rising_edge` with a port of mode buffer.
	- allow aliases of unconstrained arrays.
	- bound error on aggregate with an unused other association.
	- catch indexed/sliced component (was crashing).
	- catch index/slice of a type conversion (was crashing).
	- handle bad component specification in conf (was crashing).
	- missing ports in component (was crashing).
	- component configurations were dicarded by bug in some cases.
	- no more unused warnings for subprograms in architectures (they may be used in configuration).
	- allow conversion in component configuration.
	- conversion in associations with not statically defined array signals.

## [2005-03-12] 0.18

- Keep last line number to speed-up line number look-up (improvement).
- `--warn-default-binding` added, `--warn-binding` rewritten.
- `'value` implemented for integer numbers.
- bug fix:
	- in `textio.read` for time.
	- `file_close` does not crash if file was already closed.
	- spurious unused warnings for protected types.
	- allow subtype names in slice during sensitivity extraction.
	- correctly set the default value of collapsed ports.
	- handling of stack2 (aka large concatenation bug).

## [2005-02-26] 0.17

- command `--elab-run` added.
- Code generation for aggregate improved.
- Library name of option `--work=` is checked.
- `--no-run` option added to prevent simulation (may be used to disp tree only).
- disp signal name in error when multiple sources drive an unresolved signal.
- `-m`/`--gen-makefile` now handle several libraries.
- dependencies are not stored anymore in libraries (shorter/faster).
- mentor version of ieee library is now provided.
- handling of universal types is more consistent with LRM (almost corner cases).
- iterator and indexes whose bounds were universal expressions are now of type integer or erroneous, according to the weird LRM rules.
- handle selected name as entity name in architecture/configuration.
- bug fix:
	- port map with expression (corner case ?).
	- forbid empty extended identifiers.
	- enumeration literal xrefs.
	- non-object name in sensitivity list crashed.
	- correctly handle alias of signals in processes.

## [2005-01-02] 0.16

- `std.textio`: readline has no limits on line length.
- command `-r` (run) added.
- bug fix:
	- better handling of errors in type conversion.
	- few uninitialized variables in ghdl itself caught.
	- parse error: `begin` in aggregates.
	- bad `unused subprogram` warnings.

## [2004-10-13] 0.15

- library file format modified to handle relative pathes.
- install fixed to use relative pathes.
- internal change: ortho API modified (constant are not anymore expressions).

## [2004-08-29] 0.14

- pretty printing in HTML command, `--pp-html`, added.
- xref generation in HTML command, `--xref-html`, added.
- syntax checking command, `-s`, added.
- Code generation in whole command, `-c files -e unit`, added.
- warns for unused subprograms.
- bug box added to help bug reports.
- `-s` (syntax check) command added.
- Missing grt subprogram to close non-text file added.
- maximum line length of `std.textio.readline` extended to 512 characters.
- `std.textio.readline` assert error on truncated lines.
- Handle P32 and P64 in `--trace-signals`
- sequentials statements are not canonicalized (should be faster).
- `DESTDIR` added in Makefile to ease packaging.
- for `-m` command, re-parse modified files of the work library.
- Many checks added on interfaces.
- Many checks added on associations, better handling of conversions.
- Checks for unassociated entity ports at elaboration.
- bug fix:
	- resolution function can be an expanded name.
	- missing type check in a corner case.
	- emit an error when `EOF` is reached while a text file is read.
	- `std.textio.read` for negative number.
	- `std.textio.read` [integer]: correctly handle end of line.
	- parameters of protected type: handled and checked.
	- `gen_tree.c` modified to work with sparc.

## [2004-06-26] 0.13

- support of 64bits integers and 32bits time (not yet user available)
- handle `'high` and `'low` attributes on non-locally static types and subtypes.
- Many warning switches added (to control output of warnings).
- `--gen-makefile` mode added to ghdl (to generate a Makefile)
- alias identifier restrictions of vhdl-02 implemented.
- declarative region for architecture from vhdl-02 implemented.
- buffer port association rules of vhdl-02 implemented.
- method operator restrictions of vhdl-02 implemented.
- `'driving` and `'driving_value` implemented.
- run-time bound check error message now contains file name and line number.
- strings are not stored anymore with the identifiers.
- parser does not back-track anymore.
- bug fix:
	- name clash in generated `.s` files (arch and port/generic names).
	- implicit conversion of signal parameters.
	- handle locally static type conversion of arrays.
	- stabilize during elaboration of an unconstrained signal.
	- revert previous `vhdl87` conf spec bug fix, according to INT-1991 issue 27.
	- multiple visibility of declarations (eg: direct and alias).
	- names attribute of non-object aliases.

## [2004-05-30] 0.12

- simulation speed improved (2 fold) due to reduced activity optimization.
- type conversion handled in associations
- make mode of ghdl improved.
- bug fix:
	- attribute specification
	- allow discrete type marks in choices
	- handling of generate statement for VCD
	- allow dereference in variable associations
	- allow function conversion in block port map
	- vhdl87: apply configuration specification inside generate stmts.
	- catch non-passive concurrent procedure calls in entity.
	- association of an unconstrained port with an expression.
	- declaring an uncons. array subtype of an uncons. array subtype.

## [2004-04-24] 0.11.1

- bug fix:
	- corner case of signal not updated
	- handle `'stable`, `'quiet` with a parameter > 0
	- typos (missing `+ `) in sparc.S

## [2004-04-17] 0.11

- signal collapsing improved.
- simulation kernel speed improved (maybe 5x faster).
- `--lines` mode of ghdldrv added.
- boolean signals are now dumped in vcd files.
- bug fix:
	- in code generation for an aggregate.
	- run-time check of ascending order of projected transactions.
	- empty sequence of stmts in case alternatives (unidim array).
	- evaluation of locally static 'range attribute.
	- implicit conversion in formal function convertor.
	- return type is a type mark.

## [2004-02-28] 0.10

- architecture with many instances can be compiled with less memory.
- `--stats` option added to the simulator, to evaluate performance.
- signals are now collapsed between instances, if possible.
- simulation is about 3x faster.
- sparc port available (source only).
- more checks added for attribute specification.
- chop command added (split files by design unit).
- bug fix:
	- absolute source files.
	- empty sequence of statements in case alternatives.

## [2004-02-01] 0.9

- VITAL level 0 restrictions checks added.
- VITAL 2000 packages provided.
- run-time information (such as signal names) rewritten.
- SDF support added (partial and experimental).
- bug fix:
	- allow elaboration even if no package body if the package is present in a file but not used by the hierarchy.
	- `delay_length` range is pre-elaborated (was not in v93).
	- crashed when a design unit is not found at elaboration.
	- allow association of `'stable`, `'quiet`... with signal interfaces.
	- concurrent procedure call creates a non-sensitized process.
	- effective value of non-scalar resolved signal might not be set.

## [2003-11-05] 0.8

- protected types (from 1076a/1076-2000) implemented.
- file declarations are finalized in subprograms.
- an exit call-back has been added in the run-time library.
- internal modifications (nodes are stored in a table).
- name of generated executable can be set with `-o` option.
- IVI (ivi.sourceforge.org) support through a few VPI subprograms.
- pure and wait checks added.
- out ports are correctly dumped in VCD files.
- bug fix:
	- signal declaration not allowed in processes.
	- several bugs fixed.

## [2003-08-02] 0.7

- layout of internal nodes improved.
- incremental binding (vhdl93).
- association of in port with expressions (vhdl93).
- `--disp-time` option added.
- make mode (`ghdl -m`) rewritten.
- `'simple_name`, `'path_name` and `'instance_name` added (vhdl93).
- bug fix:
	- instantiation added in hierarchy.
	- individual association of subelements by expression.
	- `--stop-delta` option is working.
	- correctly handle operators names at function call.
	- several small bugs fixed.

## [2003-06-09] 0.6

- internal modifications (single linked list used instead of arrays).
- Mentor version of std_logic_arith is provided.
- postponed handled (vhdl 93).
- declarations allowed in a generate statement (vhdl 93).
- non object aliases handled (vhdl93).
- signatures handled (vhdl93).
- bug fix:
	- `xnor` on `bit` and `boolean` is working.
	- `selected_name` list in use clauses.
	- many other small bug fixes.

## [2003-05-10] 0.5

- foreign attribute handled.  You can now call subprograms defined in a foreign
  language (such as C or Ada).
- ghdl entry point added: you can start the VHDL simulation from your own
  program.
- bug fix:
	- triple use.
	- incomplete types

## [2003-04-07] 0.4.1

- bug fix: in the vcd output.

## [2003-04-02] 0.4

- `libgrt` does not depend on GNAT library anymore.
  Installation requirements are reduced.
- `'delayed` attribute implemented.
- `'transaction` attribute implemented.
- unaffected (from vhdl-93) implemented.
- ghdl action `--disp-standard` prints the std.standard package.
- exponentiation operator, `**`, implemented for all integer and floating
  point types.
- many other small bug fixes.
- bug fix: subprogram interfaces are now elaborated.
