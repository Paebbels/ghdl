--  An object alias and the object it denotes are not homographs.
use work.p1.all, work.p2.all;
entity repro is
end entity;

architecture arch of repro is
  constant c : integer := k;
begin
  s <= '1';

  process
  begin
    assert c = 1 severity failure;
    wait;
  end process;
end architecture;

--  Same, with the alias made potentially visible first.
use work.p2.all, work.p1.all;
entity repro2 is
end entity;

architecture arch of repro2 is
  constant c : integer := k;
begin
  s <= '1';
end architecture;

--  An alias of an alias.
use work.p1.all, work.p3.all;
entity repro3 is
end entity;

architecture arch of repro3 is
  constant c : integer := k;
begin
end architecture;

--  Two aliases of the same object.
use work.p2.all, work.p4.all;
entity repro4 is
end entity;

architecture arch of repro4 is
  constant c : integer := k;
begin
end architecture;
