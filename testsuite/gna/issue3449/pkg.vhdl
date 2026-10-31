package p1 is
  constant k : integer := 1;
  signal s : bit;
  type rec is record
    f : integer;
  end record;
  constant r : rec := (f => 2);
  constant n : natural := 3;
end package;

package p2 is
  alias k is work.p1.k;
  alias s is work.p1.s;
  alias f is work.p1.r.f;
  alias n : natural is work.p1.n;
end package;

package p3 is
  alias k is work.p2.k;
end package;

package p4 is
  alias k is work.p1.k;
end package;

package p5 is
  constant f : integer := 2;
end package;
