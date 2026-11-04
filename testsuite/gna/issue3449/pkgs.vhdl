package p1 is
  type T is (a, b);
  type L is (lit);
  subtype ST is T range a to a;
  type P is range 0 to 1000 units u1; u2 = 10 u1; end units;
  type R is record x : bit; end record;
  constant K : integer := 1;
  function F return integer;
  procedure Q;
end package;

package body p1 is
  function F return integer is begin return 1; end function;
  procedure Q is begin null; end procedure;
end package body;

package p2 is
  alias T is work.p1.T;
  alias ST is work.p1.ST;
  alias P is work.p1.P;
  alias R is work.p1.R;
  alias K is work.p1.K;
  alias F is work.p1.F [return integer];
  alias Q is work.p1.Q [];
  alias lit is work.p1.lit [return work.p1.L];
end package;

package p3 is
  alias R is work.p1.R;
  alias K is work.p1.K;
  alias F is work.p1.F [return integer];
  alias lit is work.p1.lit [return work.p1.L];
end package;

package p4 is
  alias A_T is work.p1.T;
end package;

package p5 is
  component C is end component;
end package;

package p6 is
  alias C is work.p5.C;
end package;
