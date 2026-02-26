library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity memmux02b is
  port (
    wen : std_logic;
    addr : std_logic_vector (3 downto 0);
    rdat : out std_logic;
    wdat : std_logic_vector (15 downto 0);
    clk : std_logic;
    rst : std_logic);
end memmux02b;

architecture rtl of memmux02b is
begin
  process (clk)
  is
    type mem_t is array(0 to 3) of std_logic_vector(3 downto 0);
    variable mem : mem_t;
    variable ad0, ad1 : natural range 0 to 3;
  begin
    if rising_edge(clk) then
      if rst = '1' then
        mem := (others => "0000");
      else
        ad0 := to_integer(unsigned(addr(1 downto 0)));
        ad1 := to_integer(unsigned(addr(3 downto 2)));
        rdat <= mem (ad1)(ad0);
        if wen = '1' then
          mem := (wdat(3  downto 0),
                  wdat(7  downto 4),
                  wdat(11 downto 8),
                  wdat(15 downto 12));
        end if;
      end if;
    end if;
  end process;
end rtl;
