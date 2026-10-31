--  An alias with a subtype indication still conflicts.
use work.p1.all, work.p2.all;
entity err2 is
end entity;

architecture arch of err2 is
  constant c : integer := n;
begin
end architecture;
