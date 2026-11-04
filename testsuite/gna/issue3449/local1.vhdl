use work.p1.all;
entity local1 is end entity;

architecture rtl of local1 is
  alias K is work.p1.K;
  alias R is work.p1.R;
  signal s : R;
  signal n : integer := K;
begin
end architecture;
