library ieee;
use ieee.std_logic_1164.all;

entity shift_reg is
    generic (
        type g_data_type
    );
    port (
        i_clk: in std_ulogic;
        i_data: in g_data_type;
        o_data: out g_data_type
    );
end entity;

architecture rtl of shift_reg is
    type t_reg is array (1 downto 0) of g_data_type;
    signal s_reg: t_reg;
begin
    o_data <= s_reg(s_reg'high);

    process (i_clk) is
    begin
        if rising_edge(i_clk) then
            for i in s_reg'range loop
                if i = s_reg'low then
                    s_reg(i) <= i_data;
                else
                    s_reg(i) <= s_reg(i - 1);
                end if;
            end loop;
        end if;
    end process;
end architecture;

library ieee;
use ieee.std_logic_1164.all;

entity shift_reg2 is
    generic (
        type g_data_type
    );
    port (
        i_clk: in std_ulogic;
        i_data: in g_data_type;
        o_data: out g_data_type
    );
end entity;

architecture rtl of shift_reg2 is
begin
    sync_data: entity work.shift_reg
    generic map (
        g_data_type => g_data_type
    )
    port map (
        i_clk => i_clk,
        i_data => i_data,
        o_data => o_data
    );
end architecture;

library ieee;
use ieee.std_logic_1164.all;

entity test is
    port (
        i_clk: in std_ulogic;
        i_data: in std_ulogic;
        o_data: out std_ulogic
    );
end entity;

architecture rtl of test is
    type t_state is record
        x: std_ulogic;
    end record;

    signal s_data_in: t_state;
    signal s_data_out: t_state;
begin
    s_data_in <= (x => i_data);
    o_data <= s_data_out.x;

    render: block
    begin
        inst: entity work.shift_reg2
        generic map (
            g_data_type => t_state
        )
        port map (
            i_clk => i_clk,
            i_data => s_data_in,
            o_data => s_data_out
        );
    end block;
end architecture;
