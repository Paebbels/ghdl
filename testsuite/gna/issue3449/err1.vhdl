--  An alias of an element denotes the element, not the object.
use work.p2.all, work.p5.all;
entity err1 is
end entity;

architecture arch of err1 is
  constant c : integer := f;
begin
end architecture;
