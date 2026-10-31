--  Before VHDL-08, the alias and the object are homographs.
use work.p1.all, work.p2.all;
entity err3 is
end entity;

architecture arch of err3 is
  constant c : integer := k;
begin
end architecture;
