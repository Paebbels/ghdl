library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity memmux03c is
  port (
    wen_tag : std_logic;
    wen_dat : std_logic;
    addr : std_logic_vector (1 downto 0);
    wtag : std_logic;
    wdat : std_logic_vector(3 downto 0);
    rdat : out std_logic_vector (19 downto 0);
    clk : std_logic;
    rst : std_logic);
end memmux03c;

architecture rtl of memmux03c is
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
        if wen_tag = '1' then
          mem (ad).tag := wtag;
        end if;
        if wen_dat = '1' then
          mem (ad).dat := wdat;
        end if;
      end if;
      
      for i in mem_t'range loop
        rdat(i*5) <= mem(i).tag;
        rdat(i*5+4 downto i*5+1) <= mem(i).dat;
      end loop;
    end if;
  end process;
end rtl;
