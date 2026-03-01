library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity memmux03b is
  port (
    wen : std_logic;
    addr : std_logic_vector (1 downto 0);
    rtag : out std_logic;
    rdat : out std_logic_vector(3 downto 0);
    wdat : std_logic_vector (19 downto 0);
    clk : std_logic;
    rst : std_logic);
end memmux03b;

architecture rtl of memmux03b is
begin
  process (clk)
  is
    type mem_el_t is record
      tag : std_logic;
      dat : std_logic_vector(3 downto 0);
    end record;
    type mem_t is array(0 to 3) of mem_el_t;
    variable mem : mem_t;
    variable ad : natural range 0 to 3;
  begin
    if rising_edge(clk) then
      if rst = '1' then
        mem := (others => (tag => '0', dat => "0000"));
      else
        ad := to_integer(unsigned(addr));
        rtag <= mem (ad).tag;
        rdat <= mem (ad).dat;
        if wen = '1' then
          for i in mem_t'range loop
            mem(i) := (tag => wdat(i*5), dat => wdat(i*5+4 downto i*5+1));
          end loop;
        end if;
      end if;
    end if;
  end process;
end rtl;
