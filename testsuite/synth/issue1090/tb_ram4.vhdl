entity tb_ram4 is
end tb_ram4;

library ieee;
use ieee.std_logic_1164.all;

architecture behav of tb_ram4 is
  signal raddr : std_logic_vector(2 downto 0);
  signal rdat : std_logic_vector(3 downto 0);
  signal en : std_logic;
  signal waddr : std_logic_vector(2 downto 0);
  signal wdat : std_logic_vector(3 downto 0);
  signal we : std_logic_vector (3 downto 0);
  signal clk : std_logic;
begin
  dut: entity work.ram4
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
    raddr <= "000";
    we <= "0000";
    waddr <= "001";
    wdat <= "0001";
    pulse;
    assert rdat = "0110" severity failure;

    raddr <= "010";
    waddr <= "011";
    wdat <= "0011";
    we <= "0001";
    pulse;
    assert rdat = "XXXX" severity failure;

    raddr <= "011";
    waddr <= "000";
    wdat <= "1100";
    pulse;
    assert rdat = "0001" severity failure;

    wait;
  end process;
end behav;
