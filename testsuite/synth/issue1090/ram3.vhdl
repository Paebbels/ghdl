library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity ram3 is
  port (
    clk : in std_logic;

    en : in std_logic;
    raddr : in std_logic_vector(2 downto 0);
    dout : out std_logic_vector(3 downto 0);

    we : in std_logic_vector(3 downto 0);
    waddr : in std_logic_vector(2 downto 0);
    din : in std_logic_vector(3 downto 0)
    );
end;

architecture behavioral of ram3 is
  type rom_t is array (0 to 7) of std_logic_vector(3 downto 0);
  constant rom : rom_t := (
    "0110",
    "1011",
    "0110",
    others => "0000" );
  signal ram : rom_t := rom;
begin

  process (clk, en)
    variable read : std_logic_vector(3 downto 0);
  begin
    if clk'event and clk = '1' and en = '1' then -- Unsupported: clock enable
      if we(3) = '1' then
        ram(to_integer(unsigned(waddr)))(3) <= din(3);
      end if;
      if we(2) = '1' then
        ram(to_integer(unsigned(waddr)))(2) <= din(2);
      end if;
      if we(1) = '1' then
        ram(to_integer(unsigned(waddr)))(1) <= din(1);
      end if;
      if we(0) = '1' then
        ram(to_integer(unsigned(waddr)))(0) <= din(0);
      end if;
      read := ram(to_integer(unsigned(raddr)));
      dout <= read;
    end if;
  end process;
end behavioral;
