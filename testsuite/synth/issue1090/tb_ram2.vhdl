entity tb_ram2 is
end tb_ram2;

library ieee;
use ieee.std_logic_1164.all;

architecture behav of tb_ram2 is
  signal raddr : std_logic_vector(5 downto 0);
  signal rdat : std_logic_vector(31 downto 0);
  signal en : std_logic;
  signal waddr : std_logic_vector(5 downto 0);
  signal wdat : std_logic_vector(31 downto 0);
  signal we : std_logic_vector (3 downto 0);
  signal clk : std_logic;
begin
  dut: entity work.ram2
    port map (clk => clk,
              en => en, raddr => raddr, dout => rdat,
              we => we, waddr => waddr, din => wdat);

  process
    procedure pulse is
    begin
      clk <= '0';
      wait for 1 ns;
      clk <= '1';
      wait for 1 ns;
    end pulse;
  begin
    en <= '1';
    raddr <= "000000";
    we <= "0000";
    waddr <= "000001";
    wdat <= x"00_00_00_01";
    pulse;
    assert rdat = x"0000_0110" severity failure;

    raddr <= "000001";
    waddr <= "000010";
    wdat <= x"00_00_00_02";
    pulse;
    assert rdat = x"0000_1ffc" severity failure;

    raddr <= "000101";
    waddr <= "000010";
    wdat <= x"00_00_00_02";
    we <= "0001";
    pulse;
    assert rdat = (0 to 31 => 'X') severity failure;

    wait;
  end process;
end behav;
