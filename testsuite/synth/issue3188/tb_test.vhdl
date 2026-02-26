library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity tb_test is
end entity;

architecture behav of tb_test is
    signal s_clk  : std_ulogic := '0';
    signal s_in  : std_ulogic := '0';
    signal s_out : std_ulogic;
begin
    inst: entity work.test
        port map (
            i_clk    => s_clk,
            i_data   => s_in,
            o_data   => s_out
        );

    process
    begin
        s_clk <= '0';
        s_in <= '1';
        wait for 10 ns;

        wait for 10 ns;
        assert s_out = 'U' severity failure;

        s_clk <= '1';
        wait for 10 ns;
        assert s_out = 'U' severity failure;

        s_clk <= '0';
        wait for 10 ns;
        s_clk <= '1';
        wait for 10 ns;
        assert s_out = '1' severity failure;

        wait;
    end process;
end architecture;
