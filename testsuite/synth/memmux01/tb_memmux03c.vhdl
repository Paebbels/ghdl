entity tb_memmux03c is
end tb_memmux03c;

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

architecture behav of tb_memmux03c is
  signal wen_tag, wen_dat  : std_logic;
  signal addr : std_logic_vector (1 downto 0);
  signal wtag : std_logic;
  signal wdat : std_logic_vector(3 downto 0);
  signal rdat : std_logic_vector (19 downto 0);
  signal clk  : std_logic;
  signal rst  : std_logic;
begin
  dut : entity work.memmux03c
    port map (
      wen_tag  => wen_tag,
      wen_dat => wen_dat,
      addr => addr,
      wtag => wtag,
      wdat => wdat,
      rdat => rdat,
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
    wen_tag <= '0';
    wen_dat <= '0';

    pulse;
    assert rdat = b"0000_0_0000_0_0000_0_0000_0" severity failure;

    rst <= '0';
    wen_tag <= '1';
    wtag <= '1';
    addr <= "00";

    pulse;
    assert rdat = b"0000_0_0000_0_0000_0_0000_1" severity failure;

    wen_tag <= '0';
    wtag <= '1';
    wen_dat <= '1';
    wdat <= "1101";
    addr <= "01";

    pulse;
    assert rdat = b"0000_0_0000_0_1101_0_0000_1" severity failure;

    wen_tag <= '1';
    wtag <= '1';
    wen_dat <= '1';
    wdat <= "0110";
    addr <= "10";

    pulse;
    assert rdat = b"0000_0_0110_1_1101_0_0000_1" severity failure;

    wen_tag <= '0';
    wtag <= '1';
    wen_dat <= '1';
    wdat <= "1011";
    addr <= "11";

    pulse;
    assert rdat = b"1011_0_0110_1_1101_0_0000_1" severity failure;

    wen_tag <= '0';
    wtag <= '1';
    wen_dat <= '1';
    wdat <= "1000";
    addr <= "00";

    pulse;
    assert rdat = b"1011_0_0110_1_1101_0_1000_1" severity failure;
    wait;
  end process;
end behav;
