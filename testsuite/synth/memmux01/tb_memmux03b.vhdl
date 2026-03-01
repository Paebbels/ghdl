entity tb_memmux03b is
end tb_memmux03b;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

architecture behav of tb_memmux03b is
  signal wen  : std_logic;
  signal addr : std_logic_vector (1 downto 0);
  signal rtag : std_logic;
  signal rdat : std_logic_vector(3 downto 0);
  signal wdat : std_logic_vector (19 downto 0);
  signal clk  : std_logic;
  signal rst  : std_logic;
begin
  dut : entity work.memmux03b
    port map (
      wen  => wen,
      addr => addr,
      rtag => rtag,
      rdat => rdat,
      wdat => wdat,
      clk  => clk,
      rst  => rst);

  process
    procedure pulse is
    begin
      clk <= '0';
      wait for 1 ns;
      clk <= '1';
      wait for 1 ns;
    end pulse;
  begin
    rst <= '1';
    wen <= '0';
    wdat <= b"0011_1_0110_1_1101_1_1000_0";
--    wdat <= b"0011_1_0110_1_1101_0_1000_1";
    addr <= "00";
    pulse;

    rst <= '0';
    pulse;
    assert rdat = "0000" and rtag = '0' severity failure;

    addr <= "01";
    wen <= '1';
    pulse;
    assert rdat = "0000" and rtag = '0' severity failure;

    wen <= '0';
    addr <= "00";
    pulse;
    assert rdat = "1000" and rtag = '0' severity failure;

    addr <= "01";
    pulse;
    assert rdat = "1101" and rtag = '1' severity failure;

    addr <= "10";
    pulse;
    assert rdat = "0110" and rtag = '1' severity failure;

    addr <= "11";
    pulse;
    assert rdat = "0011" and rtag = '1' severity failure;

    wait;
  end process;
end behav;
