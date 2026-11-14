export const vlsiExperiments = [
  // --- PART A: XILINX DESIGN SUITE (VHDL) ---
  {
    id: "vlsi-exp1",
    title: "Exp 1: 8:1 Multiplexer",
    file: "mux8to1.vhd",
    category: "Xilinx Design Suite - Combinational",
    description: "VHDL code and testbench simulation for 8:1 Multiplexer with 8 data inputs and 3 select lines.",
    tags: ["VHDL", "8:1 MUX", "Xilinx", "Testbench"],
    codeFiles: [
      {
        filename: "mux8to1.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity mux8to1 is 
    Port ( 
        I : in  STD_LOGIC_VECTOR(7 downto 0); -- 8 Data Inputs 
        S : in  STD_LOGIC_VECTOR(2 downto 0); -- 3 Select Lines 
        Y : out STD_LOGIC                     -- Output 
    ); 
end mux8to1; 
 
architecture Behavioral of mux8to1 is 
begin 
    process (I, S) 
    begin 
        case S is 
            when "000" => Y <= I(0); 
            when "001" => Y <= I(1); 
            when "010" => Y <= I(2); 
            when "011" => Y <= I(3); 
            when "100" => Y <= I(4); 
            when "101" => Y <= I(5); 
            when "110" => Y <= I(6); 
            when "111" => Y <= I(7); 
            when others => Y <= '0'; 
        end case; 
    end process; 
end Behavioral;`
      },
      {
        filename: "tb_mux8to1.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
use IEEE.NUMERIC_STD.ALL; 
 
entity tb_mux8to1 is 
-- Testbench has no ports 
end tb_mux8to1; 
 
architecture Behavior of tb_mux8to1 is 
    -- Component Declaration 
    component mux8to1 
        Port ( 
            I : in  STD_LOGIC_VECTOR(7 downto 0); 
            S : in  STD_LOGIC_VECTOR(2 downto 0); 
            Y : out STD_LOGIC 
        ); 
    end component; 
 
    -- Test Signals 
    signal tb_I : STD_LOGIC_VECTOR(7 downto 0) := "10101010"; -- Sample input pattern 
    signal tb_S : STD_LOGIC_VECTOR(2 downto 0) := "000"; 
    signal tb_Y : STD_LOGIC; 
 
begin 
    -- Instantiate Unit Under Test (UUT) 
    uut: mux8to1 
        port map ( 
            I => tb_I, 
            S => tb_S, 
            Y => tb_Y 
        ); 
 
    -- Stimulus Process 
    stim_proc: process 
    begin 
        -- Sweep through all select lines from 0 to 7 
        for i in 0 to 7 loop 
            tb_S <= std_logic_vector(to_unsigned(i, 3)); 
            wait for 10 ns; 
        end loop; 
 
        -- End simulation 
        wait; 
    end process; 
end Behavior;`
      }
    ]
  },
  {
    id: "vlsi-exp2",
    title: "Exp 2: Half Adder (Structural Style)",
    file: "half_adder_structural.vhd",
    category: "Xilinx Design Suite - Combinational",
    description: "VHDL code for Half Adder constructed structurally using basic XOR and AND gate components along with its testbench.",
    tags: ["VHDL", "Half Adder", "Structural", "Component"],
    codeFiles: [
      {
        filename: "half_adder_structural.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity xor_gate is 
    Port ( A, B : in STD_LOGIC; Y : out STD_LOGIC ); 
end xor_gate; 
 
architecture Dataflow of xor_gate is 
begin 
    Y <= A xor B; 
end Dataflow; 
 
library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity and_gate is 
    Port ( A, B : in STD_LOGIC; Y : out STD_LOGIC ); 
end and_gate; 
 
architecture Dataflow of and_gate is 
begin 
    Y <= A and B; 
end Dataflow; 
 
library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity half_adder_structural is 
    Port ( 
        A     : in  STD_LOGIC; 
        B     : in  STD_LOGIC; 
        Sum   : out STD_LOGIC; 
        Carry : out STD_LOGIC 
    ); 
end half_adder_structural; 
 
architecture Structural of half_adder_structural is 
    component xor_gate 
        Port ( A, B : in STD_LOGIC; Y : out STD_LOGIC ); 
    end component; 
 
    component and_gate 
        Port ( A, B : in STD_LOGIC; Y : out STD_LOGIC ); 
    end component; 
begin 
    U1_XOR : xor_gate port map ( A => A, B => B, Y => Sum ); 
    U2_AND : and_gate port map ( A => A, B => B, Y => Carry ); 
end Structural;`
      },
      {
        filename: "tb_half_adder_structural.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity tb_half_adder_structural is 
-- Testbench has no ports 
end tb_half_adder_structural; 
 
architecture Behavior of tb_half_adder_structural is 
    component half_adder_structural 
        Port ( 
            A     : in  STD_LOGIC; 
            B     : in  STD_LOGIC; 
            Sum   : out STD_LOGIC; 
            Carry : out STD_LOGIC 
        ); 
    end component; 
 
    signal tb_A     : STD_LOGIC := '0'; 
    signal tb_B     : STD_LOGIC := '0'; 
    signal tb_Sum   : STD_LOGIC; 
    signal tb_Carry : STD_LOGIC; 
 
begin 
    uut: half_adder_structural 
        port map ( 
            A     => tb_A, 
            B     => tb_B, 
            Sum   => tb_Sum, 
            Carry => tb_Carry 
        ); 
 
    stim_proc: process 
    begin 
        tb_A <= '0'; tb_B <= '0'; wait for 10 ns; 
        tb_A <= '0'; tb_B <= '1'; wait for 10 ns; 
        tb_A <= '1'; tb_B <= '0'; wait for 10 ns; 
        tb_A <= '1'; tb_B <= '1'; wait for 10 ns; 
        wait; 
    end process; 
end Behavior;`
      }
    ]
  },
  {
    id: "vlsi-exp3",
    title: "Exp 3: Arithmetic Logic Unit (ALU)",
    file: "alu.vhd",
    category: "Xilinx Design Suite - ALU",
    description: "4-bit Arithmetic Logic Unit performing Addition, Subtraction, AND, and OR operations controlled by a 2-bit select signal.",
    tags: ["VHDL", "ALU", "Arithmetic", "Logic"],
    codeFiles: [
      {
        filename: "alu.vhd",
        language: "vhdl",
        code: `library ieee; 
use ieee.std_logic_1164.all; 
use ieee.numeric_std.all; 
 
entity alu is 
    port ( 
        a, b : in  std_logic_vector(3 downto 0); 
        sel  : in  std_logic_vector(1 downto 0); 
        y    : out std_logic_vector(3 downto 0) 
    ); 
end entity; 
 
architecture bhv of alu is 
begin 
    process(a, b, sel) 
    begin 
        case sel is 
            when "00" => y <= std_logic_vector(unsigned(a) + unsigned(b)); -- ADD 
            when "01" => y <= std_logic_vector(unsigned(a) - unsigned(b)); -- SUB 
            when "10" => y <= a and b;                                     -- AND 
            when "11" => y <= a or b;                                      -- OR 
            when others => y <= (others => '0'); 
        end case; 
    end process; 
end architecture;`
      },
      {
        filename: "alu_tb.vhd",
        language: "vhdl",
        code: `library ieee; 
use ieee.std_logic_1164.all; 
 
entity alu_tb is 
end entity; 
 
architecture tb of alu_tb is 
    signal a, b, y : std_logic_vector(3 downto 0) := "0000"; 
    signal sel     : std_logic_vector(1 downto 0) := "00"; 
begin 
    uut: entity work.alu port map (a => a, b => b, sel => sel, y => y); 
 
    process 
    begin 
        a <= "0110"; b <= "0010"; -- A = 6, B = 2 
 
        sel <= "00"; wait for 10 ns; -- ADD (Expect 1000 = 8) 
        sel <= "01"; wait for 10 ns; -- SUB (Expect 0100 = 4) 
        sel <= "10"; wait for 10 ns; -- AND (Expect 0010 = 2) 
        sel <= "11"; wait for 10 ns; -- OR  (Expect 0110 = 6) 
 
        wait; -- Stop simulation 
    end process; 
end architecture;`
      }
    ]
  },
  {
    id: "vlsi-exp4",
    title: "Exp 4: Universal Shift Register",
    file: "univ_shift_reg.vhd",
    category: "Xilinx Design Suite - Sequential",
    description: "4-bit Universal Shift Register with modes for Hold (00), Shift Right (01), Shift Left (10), and Parallel Load (11).",
    tags: ["VHDL", "Shift Register", "Parallel Load", "Sequential"],
    codeFiles: [
      {
        filename: "univ_shift_reg.vhd",
        language: "vhdl",
        code: `library ieee; 
use ieee.std_logic_1164.all; 
 
entity univ_shift_reg is 
    port ( 
        clk, rst : in  std_logic; 
        sel      : in  std_logic_vector(1 downto 0); -- Mode control 
        d_in     : in  std_logic_vector(3 downto 0); -- Parallel input 
        s_left   : in  std_logic;                    -- Serial input for Left Shift 
        s_right  : in  std_logic;                    -- Serial input for Right Shift 
        q        : out std_logic_vector(3 downto 0)  -- Parallel output 
    ); 
end entity; 
 
architecture bhv of univ_shift_reg is 
    signal temp : std_logic_vector(3 downto 0); 
begin 
    process(clk, rst) 
    begin 
        if rst = '1' then 
            temp <= (others => '0'); 
        elsif rising_edge(clk) then 
            case sel is 
                when "00"   => temp <= temp;                       -- Hold 
                when "01"   => temp <= s_right & temp(3 downto 1); -- Shift Right 
                when "10"   => temp <= temp(2 downto 0) & s_left;  -- Shift Left 
                when "11"   => temp <= d_in;                       -- Parallel Load 
                when others => temp <= temp; 
            end case; 
        end if; 
    end process; 
    q <= temp; 
end architecture;`
      },
      {
        filename: "univ_shift_reg_tb.vhd",
        language: "vhdl",
        code: `library ieee; 
use ieee.std_logic_1164.all; 
 
entity univ_shift_reg_tb is 
end entity; 
 
architecture tb of univ_shift_reg_tb is 
    signal clk, rst : std_logic := '0'; 
    signal sel      : std_logic_vector(1 downto 0) := "00"; 
    signal d_in     : std_logic_vector(3 downto 0) := "0000"; 
    signal s_left   : std_logic := '0'; 
    signal s_right  : std_logic := '0'; 
    signal q        : std_logic_vector(3 downto 0); 
begin 
    uut: entity work.univ_shift_reg 
        port map (clk => clk, rst => rst, sel => sel, d_in => d_in, 
                  s_left => s_left, s_right => s_right, q => q); 
 
    clk <= not clk after 5 ns; 
 
    process 
    begin 
        rst <= '1'; wait for 10 ns; 
        rst <= '0'; wait for 10 ns; 
 
        -- 1. Parallel Load "1010" 
        sel <= "11"; d_in <= "1010"; wait for 10 ns; 
 
        -- 2. Hold state 
        sel <= "00"; wait for 10 ns; 
 
        -- 3. Shift Right with serial input '1' 
        sel <= "01"; s_right <= '1'; wait for 10 ns; 
 
        -- 4. Shift Left with serial input '0' 
        sel <= "10"; s_left <= '0'; wait for 10 ns; 
 
        wait; 
    end process; 
end architecture;`
      }
    ]
  },
  {
    id: "vlsi-exp5",
    title: "Exp 5: MOD-N Counter",
    file: "mod_n_counter.vhd",
    category: "Xilinx Design Suite - Sequential",
    description: "Generic MOD-N synchronous counter with asynchronous reset, simulated with testbench, complete with Page 5 Simulation Waveforms and RTL Schematic.",
    tags: ["VHDL", "MOD-N", "Counter", "Waveform", "RTL Schematic"],
    images: [
      {
        caption: "MOD-N Counter Simulation Waveform (Page 5)",
        src: "/images/vlsi/exp5_modn_waveform_1.jpg"
      },
      {
        caption: "MOD-N Counter RTL Schematic (Page 5)",
        src: "/images/vlsi/exp5_modn_waveform_2.jpg"
      }
    ],
    codeFiles: [
      {
        filename: "mod_n_counter.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
use IEEE.NUMERIC_STD.ALL; 
 
entity mod_n_counter is 
    generic ( 
        N     : integer := 10; 
        WIDTH : integer := 4 
    ); 
    port ( 
        clk : in  std_logic; 
        rst : in  std_logic; 
        q   : out std_logic_vector(WIDTH - 1 downto 0) 
    ); 
end entity mod_n_counter; 
 
architecture Behavioral of mod_n_counter is 
    signal count : unsigned(WIDTH - 1 downto 0) := (others => '0'); 
begin 
    process(clk, rst) 
    begin 
        if rst = '1' then 
            count <= (others => '0'); 
        elsif rising_edge(clk) then 
            if count = N - 1 then 
                count <= (others => '0'); 
            else 
                count <= count + 1; 
            end if; 
        end if; 
    end process; 
    q <= std_logic_vector(count); 
end architecture Behavioral;`
      },
      {
        filename: "tb_mod_n_counter.vhd",
        language: "vhdl",
        code: `library ieee; 
use ieee.std_logic_1164.all; 
 
entity tb_mod_n_counter is 
end entity; 
 
architecture tb of tb_mod_n_counter is 
    constant N_VAL     : integer := 10; 
    constant WIDTH_VAL : integer := 4; 
 
    signal clk : std_logic := '0'; 
    signal rst : std_logic := '0'; 
    signal q   : std_logic_vector(WIDTH_VAL - 1 downto 0); 
 
begin 
    uut: entity work.mod_n_counter 
        generic map ( 
            N     => N_VAL, 
            WIDTH => WIDTH_VAL 
        ) 
        port map ( 
            clk => clk, 
            rst => rst, 
            q   => q 
        ); 
 
    clk_process : process 
    begin 
        clk <= '0'; wait for 5 ns; 
        clk <= '1'; wait for 5 ns; 
    end process; 
 
    stim_proc: process 
    begin 
        rst <= '1'; wait for 20 ns; 
        rst <= '0'; wait for 200 ns; 
        rst <= '1'; wait for 10 ns; 
        rst <= '0'; 
        wait; 
    end process; 
end architecture;`
      }
    ]
  },
  {
    id: "vlsi-exp6",
    title: "Exp 6: First In First Out (FIFO)",
    file: "std_fifo.vhd",
    category: "Xilinx Design Suite - Memory & Buffers",
    description: "Synchronous FIFO buffer with generic data width and depth, write enable, read enable, full, and empty flags.",
    tags: ["VHDL", "FIFO", "Memory Buffer", "Xilinx"],
    codeFiles: [
      {
        filename: "std_fifo.vhd",
        language: "vhdl",
        code: `LIBRARY IEEE; 
USE IEEE.STD_LOGIC_1164.ALL; 
USE IEEE.NUMERIC_STD.ALL; 
 
entity STD_FIFO is 
    Generic ( 
        constant DATA_WIDTH : positive := 8; 
        constant FIFO_DEPTH : positive := 8 
    ); 
    Port ( 
        CLK     : in  STD_LOGIC; 
        RST     : in  STD_LOGIC; 
        WriteEn : in  STD_LOGIC; 
        DataIn  : in  STD_LOGIC_VECTOR (DATA_WIDTH - 1 downto 0); 
        ReadEn  : in  STD_LOGIC; 
        DataOut : out STD_LOGIC_VECTOR (DATA_WIDTH - 1 downto 0); 
        Empty   : out STD_LOGIC; 
        Full    : out STD_LOGIC 
    ); 
end STD_FIFO; 
 
architecture Behavioral of STD_FIFO is 
begin 
    fifo_proc : process(CLK) 
        type FIFO_Memory is array (0 to FIFO_DEPTH - 1) of STD_LOGIC_VECTOR(DATA_WIDTH - 1 downto 0); 
        variable Memory : FIFO_Memory; 
        variable Head   : natural range 0 to FIFO_DEPTH - 1; 
        variable Tail   : natural range 0 to FIFO_DEPTH - 1; 
        variable Looped : boolean; 
    begin 
        if rising_edge(CLK) then 
            if RST = '1' then 
                Head := 0; 
                Tail := 0; 
                Looped := false; 
                Full <= '0'; 
                Empty <= '1'; 
            else 
                if (ReadEn = '1') then 
                    if ((Looped = true) or (Head /= Tail)) then 
                        DataOut <= Memory(Tail); 
                        if (Tail = FIFO_DEPTH - 1) then 
                            Tail := 0; 
                            Looped := false; 
                        else 
                            Tail := Tail + 1; 
                        end if; 
                    end if; 
                end if; 
 
                if (WriteEn = '1') then 
                    if ((Looped = false) or (Head /= Tail)) then 
                        Memory(Head) := DataIn; 
                        if (Head = FIFO_DEPTH - 1) then 
                            Head := 0; 
                            Looped := true; 
                        else 
                            Head := Head + 1; 
                        end if; 
                    end if; 
                end if; 
 
                if (Head = Tail) then 
                    if Looped then 
                        Full <= '1'; 
                    else 
                        Empty <= '1'; 
                    end if; 
                else 
                    Empty <= '0'; 
                    Full  <= '0'; 
                end if; 
            end if; 
        end if; 
    end process; 
end Behavioral;`
      }
    ]
  },
  {
    id: "vlsi-exp7",
    title: "Exp 7: Keypad Interfacing",
    file: "keypad_scanner.vhd",
    category: "Xilinx Design Suite - Interfacing",
    description: "4x4 Matrix Keypad scanner with clock divider debouncing, active-low row driving, column read, and 4-bit key code decoder.",
    tags: ["VHDL", "Keypad", "Matrix", "Scanner", "FPGA"],
    codeFiles: [
      {
        filename: "keypad_scanner.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
use IEEE.NUMERIC_STD.ALL; 
 
entity keypad_scanner is 
    Port ( 
        clk       : in  STD_LOGIC;                    -- System Clock (~50 MHz) 
        reset     : in  STD_LOGIC;                    -- Active High Reset 
        rows      : out STD_LOGIC_VECTOR(3 downto 0); -- FPGA Outputs -> Keypad Rows 
        cols      : in  STD_LOGIC_VECTOR(3 downto 0); -- Keypad Columns -> FPGA Inputs (Pull-up) 
        key_code  : out STD_LOGIC_VECTOR(3 downto 0); -- 4-bit Hex Output 
        key_valid : out STD_LOGIC                     -- High when a key is pressed 
    ); 
end keypad_scanner; 
 
architecture Behavioral of keypad_scanner is 
    signal clk_div : unsigned(15 downto 0) := (others => '0'); 
    signal row_sel : unsigned(1 downto 0) := "00"; 
begin 
    -- Clock Divider to Scan Rows 
    process(clk, reset) 
    begin 
        if reset = '1' then 
            clk_div <= (others => '0'); 
            row_sel <= "00"; 
        elsif rising_edge(clk) then 
            clk_div <= clk_div + 1; 
            if clk_div = 0 then  -- Scans every ~1.3ms (50MHz / 65536) 
                row_sel <= row_sel + 1; 
            end if; 
        end if; 
    end process; 
 
    -- Drive Active Low Row (One-Hot) 
    with row_sel select 
        rows <= "1110" when "00", 
                "1101" when "01", 
                "1011" when "10", 
                "0111" when others; 
 
    -- Decode Matrix Keypress (Combinational Read) 
    process(row_sel, cols) 
    begin 
        key_valid <= '1'; 
        case (std_logic_vector(row_sel) & cols) is 
            -- Row 0 
            when "001110" => key_code <= "0001"; -- '1' 
            when "001101" => key_code <= "0010"; -- '2' 
            when "001011" => key_code <= "0011"; -- '3' 
            when "000111" => key_code <= "1010"; -- 'A' 
            -- Row 1 
            when "011110" => key_code <= "0100"; -- '4' 
            when "011101" => key_code <= "0101"; -- '5' 
            when "011011" => key_code <= "0110"; -- '6' 
            when "010111" => key_code <= "1011"; -- 'B' 
            -- Row 2 
            when "101110" => key_code <= "0111"; -- '7' 
            when "101101" => key_code <= "1000"; -- '8' 
            when "101011" => key_code <= "1001"; -- '9' 
            when "100111" => key_code <= "1100"; -- 'C' 
            -- Row 3 
            when "111110" => key_code <= "1110"; -- '*' 
            when "111101" => key_code <= "0000"; -- '0' 
            when "111011" => key_code <= "1111"; -- '#' 
            when "110111" => key_code <= "1101"; -- 'D' 
            when others   => 
                key_code  <= "0000"; 
                key_valid <= '0'; 
        end case; 
    end process; 
end Behavioral;`
      },
      {
        filename: "keypad_scanner_tb.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
use IEEE.NUMERIC_STD.ALL; 
 
entity keypad_scanner_tb is 
end keypad_scanner_tb; 
 
architecture Behavioral of keypad_scanner_tb is 
    component keypad_scanner 
        Port ( 
            clk       : in  STD_LOGIC; 
            reset     : in  STD_LOGIC; 
            rows      : out STD_LOGIC_VECTOR(3 downto 0); 
            cols      : in  STD_LOGIC_VECTOR(3 downto 0); 
            key_code  : out STD_LOGIC_VECTOR(3 downto 0); 
            key_valid : out STD_LOGIC 
        ); 
    end component; 
 
    signal clk       : std_logic := '0'; 
    signal reset     : std_logic := '0'; 
    signal rows      : std_logic_vector(3 downto 0); 
    signal cols      : std_logic_vector(3 downto 0) := "1111"; 
    signal key_code  : std_logic_vector(3 downto 0); 
    signal key_valid : std_logic; 
 
    constant CLK_PERIOD : time := 20 ns; 
 
begin 
    uut: keypad_scanner 
        Port Map ( 
            clk       => clk, 
            reset     => reset, 
            rows      => rows, 
            cols      => cols, 
            key_code  => key_code, 
            key_valid => key_valid 
        ); 
 
    clk_process : process 
    begin 
        clk <= '0'; wait for CLK_PERIOD / 2; 
        clk <= '1'; wait for CLK_PERIOD / 2; 
    end process; 
 
    stim_proc: process 
    begin 
        reset <= '1'; wait for 100 ns; 
        reset <= '0'; wait for 100 ns; 
 
        cols <= "1111"; 
        wait for 2 ms; 
 
        -- Simulate key press 
        wait until rows = "1101"; 
        cols <= "1101"; 
        wait for 3 ms; 
        cols <= "1111"; 
        wait; 
    end process; 
end Behavioral;`
      }
    ]
  },

  // --- PART B: MICROWIND LAYOUT & SIMULATION ---
  {
    id: "vlsi-exp8",
    title: "Exp 8: CMOS Inverter using Microwind",
    file: "inverter_microwind.cir",
    category: "Microwind Layout & Simulation",
    description: "Design and layout simulation of CMOS Inverter with PMOS pull-up and NMOS pull-down transistors, Voltage Transfer Characteristics (VTC), and transient response.",
    tags: ["Microwind", "CMOS Inverter", "VTC", "Layout", "Simulation"],
    images: [
      {
        caption: "CMOS Inverter Layout in Microwind",
        src: "/images/vlsi/exp8_inverter_p1_1.png"
      },
      {
        caption: "CMOS Inverter Voltage Transfer Characteristic (VTC)",
        src: "/images/vlsi/exp8_inverter_p1_2.png"
      },
      {
        caption: "CMOS Inverter Layout Detailed View",
        src: "/images/vlsi/exp8_inverter_p2_1.png"
      },
      {
        caption: "CMOS Inverter Transient Simulation Waveforms",
        src: "/images/vlsi/exp8_inverter_p2_2.png"
      }
    ],
    codeFiles: [
      {
        filename: "inverter_microwind_notes.txt",
        language: "text",
        code: `EXPERIMENT 8: INVERTER USING MICROWIND

AIM: To simulate CMOS Inverter using Microwind software.
TOOLS: Microwind, DSch.

TRANSISTOR SPECIFICATIONS:
- PMOS: W = 1.2 um, L = 0.12 um (Connected between VDD and Out)
- NMOS: W = 0.6 um, L = 0.12 um (Connected between Out and VSS)

STEPS IN MICROWIND:
1. Select Technology Rule file: File -> Select Foundry -> cmos012.rul (120nm).
2. Draw N-Well for PMOS region.
3. Draw P-diffusion for PMOS and N-diffusion for NMOS.
4. Draw Polysilicon gate overlapping the diffusion regions to form transistors.
5. Add Metal-1 contacts to VDD, VSS, Input, and Output.
6. Connect clock/pulse generator to the Input (Vin).
7. Run Simulation (Simulate -> Run Simulation) to observe Voltage vs Time and VTC (Voltage Transfer Characteristic).`
      }
    ]
  },
  {
    id: "vlsi-exp9",
    title: "Exp 9: NAND and NOR using Microwind",
    file: "nand_nor_microwind.cir",
    category: "Microwind Layout & Simulation",
    description: "Design and simulation of 2-input CMOS NAND (series NMOS, parallel PMOS) and NOR (parallel NMOS, series PMOS) gates with timing waveforms.",
    tags: ["Microwind", "NAND", "NOR", "CMOS", "Layout"],
    images: [
      {
        caption: "2-Input CMOS NAND Gate Layout",
        src: "/images/vlsi/exp9_nand_nor_p1_1.png"
      },
      {
        caption: "2-Input CMOS NAND Simulation Waveforms",
        src: "/images/vlsi/exp9_nand_nor_p1_2.png"
      },
      {
        caption: "2-Input CMOS NOR Gate Layout",
        src: "/images/vlsi/exp9_nand_nor_p2_1.png"
      },
      {
        caption: "2-Input CMOS NOR Simulation Waveforms",
        src: "/images/vlsi/exp9_nand_nor_p2_2.png"
      }
    ],
    codeFiles: [
      {
        filename: "nand_nor_microwind_notes.txt",
        language: "text",
        code: `EXPERIMENT 9: NAND AND NOR USING MICROWIND

AIM: To simulate NAND and NOR gates using Microwind software.

1. NAND GATE CONFIGURATION:
- Pull-Up Network (PUN): 2 PMOS transistors in PARALLEL connected to VDD.
- Pull-Down Network (PDN): 2 NMOS transistors in SERIES connected to VSS.
- Logic Expression: Y = (A . B)'

2. NOR GATE CONFIGURATION:
- Pull-Up Network (PUN): 2 PMOS transistors in SERIES connected to VDD.
- Pull-Down Network (PDN): 2 NMOS transistors in PARALLEL connected to VSS.
- Logic Expression: Y = (A + B)'

SIMULATION PROCEDURE:
1. Design schematic in DSch or layout directly in Microwind.
2. Apply Clock A with period T1 and Clock B with period 2*T1.
3. Verify truth tables from output transient waveforms.`
      }
    ]
  },
  {
    id: "vlsi-exp10",
    title: "Exp 10: Boolean Expression Y = (AB + CD)' using Microwind",
    file: "boolean_expression_microwind.cir",
    category: "Microwind Layout & Simulation",
    description: "Complex CMOS logic gate realization for the Boolean function Y = (AB + CD)' with schematic, full layout, and simulation timing diagrams.",
    tags: ["Microwind", "Boolean Expression", "CMOS Logic", "AOI"],
    images: [
      {
        caption: "Circuit Diagram and CMOS Layout for Y = (AB + CD)'",
        src: "/images/vlsi/exp10_boolean_p1_1.png"
      },
      {
        caption: "Simulation Waveforms for Y = (AB + CD)'",
        src: "/images/vlsi/exp10_boolean_p2_1.png"
      }
    ],
    codeFiles: [
      {
        filename: "boolean_expression_notes.txt",
        language: "text",
        code: `EXPERIMENT 10: BOOLEAN EXPRESSION USING MICROWIND
AIM: To simulate Boolean Expression Y = (AB + CD)' using Microwind software.

CIRCUIT DESIGN (AND-OR-INVERT / AOI):
- Pull-Down Network (PDN):
  * Branch 1: NMOS A in series with NMOS B.
  * Branch 2: NMOS C in series with NMOS D.
  * Branch 1 and Branch 2 are in PARALLEL between Output node and Ground.
- Pull-Up Network (PUN):
  * PMOS A in parallel with PMOS B.
  * PMOS C in parallel with PMOS D.
  * The (A || B) group is in SERIES with the (C || D) group between VDD and Output.

TRUTH TABLE:
Output Y is LOW ('0') only when (A=1 AND B=1) OR (C=1 AND D=1).
For all other input combinations, Y = '1'.`
      }
    ]
  },
  {
    id: "vlsi-exp11",
    title: "Exp 11: Half Adder using Microwind",
    file: "half_adder_microwind.cir",
    category: "Microwind Layout & Simulation",
    description: "CMOS layout and simulation of Half Adder circuit generating Sum (A XOR B) and Carry (A AND B) outputs in Microwind.",
    tags: ["Microwind", "Half Adder", "CMOS Layout", "Simulation"],
    images: [
      {
        caption: "CMOS Half Adder Layout in Microwind",
        src: "/images/vlsi/exp11_half_adder_p1_1.png"
      },
      {
        caption: "Half Adder Sum & Carry Simulation Waveforms",
        src: "/images/vlsi/exp11_half_adder_p2_1.png"
      }
    ],
    codeFiles: [
      {
        filename: "half_adder_microwind_notes.txt",
        language: "text",
        code: `EXPERIMENT 11: HALF ADDER USING MICROWIND
AIM: To simulate Half Adder using Microwind software.

OUTPUT FUNCTIONS:
- Sum = A XOR B = A'.B + A.B'
- Carry = A AND B

STEPS:
1. Construct CMOS XOR gate for the Sum output.
2. Construct CMOS AND gate (NAND followed by Inverter) for the Carry output.
3. Interconnect inputs A and B to both blocks.
4. Apply independent clock sources to A and B.
5. Simulate and observe Sum and Carry traces verifying:
   * A=0, B=0 -> Sum=0, Carry=0
   * A=0, B=1 -> Sum=1, Carry=0
   * A=1, B=0 -> Sum=1, Carry=0
   * A=1, B=1 -> Sum=0, Carry=1`
      }
    ]
  },
  {
    id: "vlsi-exp12",
    title: "Exp 12: 2:1 MUX using Microwind",
    file: "mux2to1_microwind.cir",
    category: "Microwind Layout & Simulation",
    description: "Layout design and simulation of 2:1 Multiplexer using both Conventional CMOS logic and Transmission Gate (TG) configurations.",
    tags: ["Microwind", "2:1 MUX", "Transmission Gate", "Layout", "Simulation"],
    images: [
      {
        caption: "2:1 MUX Conventional Method Layout",
        src: "/images/vlsi/exp12_mux2to1_p1_1.png"
      },
      {
        caption: "2:1 MUX Conventional Method Waveform",
        src: "/images/vlsi/exp12_mux2to1_p1_2.png"
      },
      {
        caption: "2:1 MUX Transmission Gate (TG) Layout",
        src: "/images/vlsi/exp12_mux2to1_p2_1.png"
      },
      {
        caption: "2:1 MUX TG Simulation Waveforms",
        src: "/images/vlsi/exp12_mux2to1_p2_2.png"
      },
      {
        caption: "2:1 MUX Detailed TG Timing Analysis",
        src: "/images/vlsi/exp12_mux2to1_p2_3.png"
      }
    ],
    codeFiles: [
      {
        filename: "mux2to1_microwind_notes.txt",
        language: "text",
        code: `EXPERIMENT 12: 2:1 MUX USING MICROWIND
AIM: To simulate 2:1 MUX using Microwind software.

METHOD 1: CONVENTIONAL CMOS METHOD
- Expression: Y = (S'.I0 + S.I1)
- Realized with CMOS Inverters, NAND and NOR gates.

METHOD 2: TRANSMISSION GATE (TG) METHOD
- A Transmission Gate (TG) is a complementary CMOS switch where NMOS and PMOS are in parallel.
- Controlled by complementary control signals (S and S_bar).
- High transmission quality without threshold voltage drop (Vth).
- TG 1 passes I0 when S = 0.
- TG 2 passes I1 when S = 1.
- Output Y connects to the common output node.`
      }
    ]
  }
];
