export const vlsiExperiments = [
  // --- PART A: XILINX DESIGN SUITE (VHDL) ---
  {
    id: "vlsi-exp1",
    title: "Exp 1: 8:1 Multiplexer",
    file: "mux8to1.vhd",
    category: "Xilinx Design Suite - Combinational",
    description: "VHDL code and testbench simulation for 8:1 Multiplexer with 8 data inputs and 3 select lines (includes Behavioral and Dataflow styles).",
    tags: ["VHDL", "8:1 MUX", "Xilinx", "Testbench", "Dataflow"],
    codeFiles: [
      {
        filename: "mux8to1.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity mux8to1 is 
    Port ( 
        I : in  STD_LOGIC_VECTOR (7 downto 0); 
        S : in  STD_LOGIC_VECTOR (2 downto 0); 
        Y : out STD_LOGIC 
    ); 
end mux8to1; 
 
architecture Behavioral of mux8to1 is 
begin 
    process(I, S) 
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
        filename: "mux8to1_tb.vhd",
        language: "vhdl",
        code: `LIBRARY ieee; 
USE ieee.std_logic_1164.ALL; 
 
ENTITY mux8to1_tb IS 
END mux8to1_tb; 
 
ARCHITECTURE behavior OF mux8to1_tb IS 
    -- Component Declaration for the Unit Under Test (UUT) 
    COMPONENT mux8to1 
    PORT( 
        I : IN  std_logic_vector(7 downto 0); 
        S : IN  std_logic_vector(2 downto 0); 
        Y : OUT std_logic 
    ); 
    END COMPONENT; 
 
    -- Inputs 
    signal I : std_logic_vector(7 downto 0) := (others => '0'); 
    signal S : std_logic_vector(2 downto 0) := (others => '0'); 
    -- Outputs 
    signal Y : std_logic; 
 
BEGIN 
    -- Instantiate the Unit Under Test (UUT) 
    uut: mux8to1 PORT MAP ( 
        I => I, 
        S => S, 
        Y => Y 
    ); 
 
    -- Stimulus process 
    stim_proc: process 
    begin 
        I <= "10101010"; 
        S <= "000"; wait for 10 ns; 
        S <= "001"; wait for 10 ns; 
        S <= "010"; wait for 10 ns; 
        S <= "011"; wait for 10 ns; 
        S <= "100"; wait for 10 ns; 
        S <= "101"; wait for 10 ns; 
        S <= "110"; wait for 10 ns; 
        S <= "111"; wait for 10 ns; 
        wait; 
    end process; 
END behavior;`
      },
      {
        filename: "mux8to1_dataflow.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity mux8to1 is 
    Port ( 
        I : in  STD_LOGIC_VECTOR(7 downto 0); 
        S : in  STD_LOGIC_VECTOR(2 downto 0); 
        Y : out STD_LOGIC 
    ); 
end mux8to1; 
 
architecture Dataflow of mux8to1 is 
begin 
    Y <= I(0) when S = "000" else 
         I(1) when S = "001" else 
         I(2) when S = "010" else 
         I(3) when S = "011" else 
         I(4) when S = "100" else 
         I(5) when S = "101" else 
         I(6) when S = "110" else 
         I(7) when S = "111" else 
         '0'; 
end Dataflow;`
      }
    ]
  },
  {
    id: "vlsi-exp2",
    title: "Exp 2: Half Adder",
    file: "half_adder.vhd",
    category: "Xilinx Design Suite - Combinational",
    description: "VHDL code for Half Adder in both Structural style (using XOR and AND gates) and Behavioral style, with simulation testbenches.",
    tags: ["VHDL", "Half Adder", "Structural", "Behavioral", "Component"],
    codeFiles: [
      {
        filename: "half_adder_behavioral.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity Halfadder is 
    Port ( 
        A     : in  STD_LOGIC; 
        B     : in  STD_LOGIC; 
        SUM   : out STD_LOGIC; 
        CARRY : out STD_LOGIC 
    ); 
end Halfadder; 
 
architecture Behavioral of Halfadder is 
begin 
    process(A, B) 
    begin 
        SUM   <= A XOR B; 
        CARRY <= A AND B; 
    end process; 
end Behavioral;`
      },
      {
        filename: "half_adder_behavioral_tb.vhd",
        language: "vhdl",
        code: `LIBRARY ieee; 
USE ieee.std_logic_1164.ALL; 
 
ENTITY HalfAdder_tb IS 
END HalfAdder_tb; 
 
ARCHITECTURE behavior OF HalfAdder_tb IS 
    -- Component Declaration for the Unit Under Test (UUT) 
    COMPONENT Halfadder 
    PORT( 
        A     : IN  std_logic; 
        B     : IN  std_logic; 
        SUM   : OUT std_logic; 
        CARRY : OUT std_logic 
    ); 
    END COMPONENT; 
 
    -- Inputs 
    signal A     : std_logic := '0'; 
    signal B     : std_logic := '0'; 
    -- Outputs 
    signal SUM   : std_logic; 
    signal CARRY : std_logic; 
 
BEGIN 
    -- Instantiate the Unit Under Test (UUT) 
    uut: Halfadder PORT MAP ( 
        A     => A, 
        B     => B, 
        SUM   => SUM, 
        CARRY => CARRY 
    ); 
 
    -- Stimulus process 
    stim_proc: process 
    begin 
        A <= '0'; B <= '0'; wait for 10 ns; 
        A <= '0'; B <= '1'; wait for 10 ns; 
        A <= '1'; B <= '0'; wait for 10 ns; 
        A <= '1'; B <= '1'; wait for 10 ns; 
        wait; 
    end process; 
END behavior;`
      },
      {
        filename: "half_adder_structural.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity XOR_GATE is 
    Port ( 
        A : in  STD_LOGIC; 
        B : in  STD_LOGIC; 
        Y : out STD_LOGIC 
    ); 
end XOR_GATE; 
 
architecture Behavioral of XOR_GATE is 
begin 
    Y <= A XOR B; 
end Behavioral; 
 
library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity AND_GATE is 
    Port ( 
        A : in  STD_LOGIC; 
        B : in  STD_LOGIC; 
        Y : out STD_LOGIC 
    ); 
end AND_GATE; 
 
architecture Behavioral of AND_GATE is 
begin 
    Y <= A AND B; 
end Behavioral; 
 
library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity Half_Adder is 
    Port ( 
        A     : in  STD_LOGIC; 
        B     : in  STD_LOGIC; 
        SUM   : out STD_LOGIC; 
        CARRY : out STD_LOGIC 
    ); 
end Half_Adder; 
 
architecture Structural of Half_Adder is 
    component XOR_GATE 
        Port ( 
            A : in  STD_LOGIC; 
            B : in  STD_LOGIC; 
            Y : out STD_LOGIC 
        ); 
    end component; 
 
    component AND_GATE 
        Port ( 
            A : in  STD_LOGIC; 
            B : in  STD_LOGIC; 
            Y : out STD_LOGIC 
        ); 
    end component; 
 
begin 
    X1: XOR_GATE PORT MAP ( 
        A => A, 
        B => B, 
        Y => SUM 
    ); 
 
    A1: AND_GATE PORT MAP ( 
        A => A, 
        B => B, 
        Y => CARRY 
    ); 
end Structural;`
      },
      {
        filename: "half_adder_structural_tb.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity Half_Adder_tb is 
end Half_Adder_tb; 
 
architecture behavior of Half_Adder_tb is 
    component Half_Adder 
        Port ( 
            A     : in  STD_LOGIC; 
            B     : in  STD_LOGIC; 
            SUM   : out STD_LOGIC; 
            CARRY : out STD_LOGIC 
        ); 
    end component; 
 
    signal A     : STD_LOGIC := '0'; 
    signal B     : STD_LOGIC := '0'; 
    signal SUM   : STD_LOGIC; 
    signal CARRY : STD_LOGIC; 
 
begin 
    uut: Half_Adder PORT MAP ( 
        A     => A, 
        B     => B, 
        SUM   => SUM, 
        CARRY => CARRY 
    ); 
 
    stim_proc: process 
    begin 
        A <= '0'; B <= '0'; wait for 10 ns; 
        A <= '0'; B <= '1'; wait for 10 ns; 
        A <= '1'; B <= '0'; wait for 10 ns; 
        A <= '1'; B <= '1'; wait for 10 ns; 
        wait; 
    end process; 
end behavior;`
      }
    ]
  },
  {
    id: "vlsi-exp3",
    title: "Exp 3: Arithmetic Logic Unit (ALU)",
    file: "alu.vhd",
    category: "Xilinx Design Suite - ALU",
    description: "4-bit Arithmetic Logic Unit performing 8 arithmetic and logic operations (+, -, +1, -1, AND, OR, XOR, NOT) using 3-bit select lines, with Behavioral and Dataflow styles.",
    tags: ["VHDL", "ALU", "Arithmetic", "Logic", "8 Operations"],
    codeFiles: [
      {
        filename: "alu.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
use IEEE.STD_LOGIC_UNSIGNED.ALL; 
 
entity ALU is 
    Port ( 
        A      : in  STD_LOGIC_VECTOR (3 downto 0); 
        B      : in  STD_LOGIC_VECTOR (3 downto 0); 
        SEL    : in  STD_LOGIC_VECTOR (2 downto 0); 
        RESULT : out STD_LOGIC_VECTOR (3 downto 0) 
    ); 
end ALU; 
 
architecture Behavioral of ALU is 
begin 
    process(A, B, SEL) 
    begin 
        case SEL is 
            when "000" => RESULT <= A + B;        -- Addition 
            when "001" => RESULT <= A - B;        -- Subtraction 
            when "010" => RESULT <= A + "0001";   -- Increment A 
            when "011" => RESULT <= A - "0001";   -- Decrement A 
            when "100" => RESULT <= A AND B;      -- Bitwise AND 
            when "101" => RESULT <= A OR B;       -- Bitwise OR 
            when "110" => RESULT <= A XOR B;      -- Bitwise XOR 
            when "111" => RESULT <= NOT A;        -- Bitwise NOT A 
            when others => RESULT <= "0000"; 
        end case; 
    end process; 
end Behavioral;`
      },
      {
        filename: "alu_tb.vhd",
        language: "vhdl",
        code: `LIBRARY ieee; 
USE ieee.std_logic_1164.ALL; 
 
ENTITY ALU_tb IS 
END ALU_tb; 
 
ARCHITECTURE behavior OF ALU_tb IS 
    -- Component Declaration for the Unit Under Test (UUT) 
    COMPONENT ALU 
    PORT( 
        A      : IN  std_logic_vector(3 downto 0); 
        B      : IN  std_logic_vector(3 downto 0); 
        SEL    : IN  std_logic_vector(2 downto 0); 
        RESULT : OUT std_logic_vector(3 downto 0) 
    ); 
    END COMPONENT; 
 
    -- Inputs 
    signal A   : std_logic_vector(3 downto 0) := (others => '0'); 
    signal B   : std_logic_vector(3 downto 0) := (others => '0'); 
    signal SEL : std_logic_vector(2 downto 0) := (others => '0'); 
    -- Outputs 
    signal RESULT : std_logic_vector(3 downto 0); 
 
BEGIN 
    -- Instantiate the Unit Under Test (UUT) 
    uut: ALU PORT MAP ( 
        A      => A, 
        B      => B, 
        SEL    => SEL, 
        RESULT => RESULT 
    ); 
 
    -- Stimulus process 
    stim_proc: process 
    begin 
        A <= "0101"; 
        B <= "0011"; 
 
        SEL <= "000"; wait for 10 ns; -- Addition: 0101 + 0011 = 1000 
        SEL <= "001"; wait for 10 ns; -- Subtraction: 0101 - 0011 = 0010 
        SEL <= "010"; wait for 10 ns; -- Increment: 0101 + 1 = 0110 
        SEL <= "011"; wait for 10 ns; -- Decrement: 0101 - 1 = 0100 
        SEL <= "100"; wait for 10 ns; -- AND: 0101 AND 0011 = 0001 
        SEL <= "101"; wait for 10 ns; -- OR:  0101 OR 0011  = 0111 
        SEL <= "110"; wait for 10 ns; -- XOR: 0101 XOR 0011 = 0110 
        SEL <= "111"; wait for 10 ns; -- NOT: NOT 0101      = 1010 
        wait; 
    end process; 
END behavior;`
      },
      {
        filename: "alu_dataflow.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
use IEEE.STD_LOGIC_UNSIGNED.ALL; 
 
entity ALU is 
    Port ( 
        A      : in  STD_LOGIC_VECTOR(3 downto 0); 
        B      : in  STD_LOGIC_VECTOR(3 downto 0); 
        SEL    : in  STD_LOGIC_VECTOR(2 downto 0); 
        RESULT : out STD_LOGIC_VECTOR(3 downto 0) 
    ); 
end ALU; 
 
architecture Dataflow of ALU is 
begin 
    RESULT <= A + B        when SEL = "000" else 
              A - B        when SEL = "001" else 
              A + "0001"   when SEL = "010" else 
              A - "0001"   when SEL = "011" else 
              A AND B      when SEL = "100" else 
              A OR B       when SEL = "101" else 
              A XOR B      when SEL = "110" else 
              NOT A        when SEL = "111" else 
              "0000"; 
end Dataflow;`
      }
    ]
  },
  {
    id: "vlsi-exp4",
    title: "Exp 4: Universal Shift Register",
    file: "univ_shift_reg.vhd",
    category: "Xilinx Design Suite - Sequential",
    description: "4-bit Universal Shift Register supporting Hold (00), Shift Right (01), Shift Left (10), and Parallel Load (11) modes with synchronous clock and active-high reset.",
    tags: ["VHDL", "Shift Register", "Parallel Load", "Sequential", "USR"],
    codeFiles: [
      {
        filename: "Universal_Shift_Register.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity Universal_Shift_Register is 
    Port ( 
        CLK : in  STD_LOGIC; 
        RST : in  STD_LOGIC; 
        S   : in  STD_LOGIC_VECTOR (1 downto 0); 
        SL  : in  STD_LOGIC; 
        SR  : in  STD_LOGIC; 
        P   : in  STD_LOGIC_VECTOR (3 downto 0); 
        Q   : out STD_LOGIC_VECTOR (3 downto 0) 
    ); 
end Universal_Shift_Register; 
 
architecture Behavioral of Universal_Shift_Register is 
    signal Q_reg : STD_LOGIC_VECTOR(3 downto 0); 
begin 
    process(CLK, RST) 
    begin 
        if RST = '1' then 
            Q_reg <= "0000"; 
        elsif rising_edge(CLK) then 
            case S is 
                when "00" => Q_reg <= Q_reg;                          -- Hold 
                when "01" => Q_reg <= SR & Q_reg(3 downto 1);         -- Shift Right 
                when "10" => Q_reg <= Q_reg(2 downto 0) & SL;         -- Shift Left 
                when "11" => Q_reg <= P;                              -- Parallel Load 
                when others => Q_reg <= Q_reg; 
            end case; 
        end if; 
    end process; 
    Q <= Q_reg; 
end Behavioral;`
      },
      {
        filename: "USR_tb.vhd",
        language: "vhdl",
        code: `LIBRARY ieee; 
USE ieee.std_logic_1164.ALL; 
 
ENTITY USR_tb IS 
END USR_tb; 
 
ARCHITECTURE behavior OF USR_tb IS 
    -- Component Declaration for the Unit Under Test (UUT) 
    COMPONENT Universal_Shift_Register 
    PORT( 
        CLK : IN  std_logic; 
        RST : IN  std_logic; 
        S   : IN  std_logic_vector(1 downto 0); 
        SL  : IN  std_logic; 
        SR  : IN  std_logic; 
        P   : IN  std_logic_vector(3 downto 0); 
        Q   : OUT std_logic_vector(3 downto 0) 
    ); 
    END COMPONENT; 
 
    -- Inputs 
    signal CLK : std_logic := '0'; 
    signal RST : std_logic := '0'; 
    signal S   : std_logic_vector(1 downto 0) := (others => '0'); 
    signal SL  : std_logic := '0'; 
    signal SR  : std_logic := '0'; 
    signal P   : std_logic_vector(3 downto 0) := (others => '0'); 
    -- Outputs 
    signal Q   : std_logic_vector(3 downto 0); 
 
BEGIN 
    -- Instantiate the Unit Under Test (UUT) 
    uut: Universal_Shift_Register PORT MAP ( 
        CLK => CLK, 
        RST => RST, 
        S   => S, 
        SL  => SL, 
        SR  => SR, 
        P   => P, 
        Q   => Q 
    ); 
 
    -- Clock generation (50 MHz / 20 ns period) 
    CLK <= not CLK after 10 ns; 
 
    -- Stimulus process 
    stim_proc: process 
    begin 
        -- Reset 
        RST <= '1'; 
        wait for 100 ns; 
        RST <= '0'; 
 
        -- Parallel Load 
        P <= "1100"; 
        S <= "11"; 
        wait for 100 ns; 
 
        -- Hold 
        S <= "00"; 
        wait for 100 ns; 
 
        -- Shift Right 
        SR <= '1'; 
        S  <= "01"; 
        wait for 100 ns; 
 
        -- Shift Left 
        SL <= '0'; 
        S  <= "10"; 
        wait for 100 ns; 
 
        -- Parallel Load 
        P <= "1010"; 
        S <= "11"; 
        wait for 100 ns; 
 
        -- Shift Right 
        SR <= '0'; 
        S  <= "01"; 
        wait for 100 ns; 
 
        -- Shift Left 
        SL <= '1'; 
        S  <= "10"; 
        wait for 100 ns; 
 
        wait; 
    end process; 
END behavior;`
      }
    ]
  },
  {
    id: "vlsi-exp5",
    title: "Exp 5: MOD-N Counter",
    file: "mod_n_counter.vhd",
    category: "Xilinx Design Suite - Sequential",
    description: "MOD-6 synchronous counter using integer range and synchronous reset, simulated with testbench, complete with Page 5 Simulation Waveforms and RTL Schematic.",
    tags: ["VHDL", "MOD-N", "Counter", "Waveform", "RTL Schematic", "MOD-6"],
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
        filename: "count_n.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
use IEEE.STD_LOGIC_UNSIGNED.ALL; 
use IEEE.STD_LOGIC_ARITH.ALL; 
 
entity count_n is 
    generic (N: integer := 6); 
    port ( 
        rst, clk : in  std_logic; 
        Q        : out integer range 0 to N-1 
    ); 
end count_n; 
 
architecture Behavioral of count_n is 
    signal temp : integer range 0 to N-1; 
begin 
    process (rst, clk) 
    begin 
        if clk'event and clk = '1' then 
            if (rst = '1' or temp >= N-1) then 
                temp <= 0; 
            else 
                temp <= temp + 1; 
            end if; 
        end if; 
    end process; 
    Q <= temp; 
end Behavioral;`
      },
      {
        filename: "countern_tb.vhd",
        language: "vhdl",
        code: `LIBRARY ieee; 
USE ieee.std_logic_1164.ALL; 
 
ENTITY countern_tb IS 
END countern_tb; 
 
ARCHITECTURE behavioral OF countern_tb IS 
    -- Component Declaration for the Unit Under Test (UUT) 
    COMPONENT count_n 
    GENERIC (N : integer := 6); 
    PORT( 
        rst : IN  std_logic; 
        clk : IN  std_logic; 
        Q   : OUT integer range 0 to N-1 
    ); 
    END COMPONENT; 
 
    -- Inputs 
    signal rst : std_logic := '0'; 
    signal clk : std_logic := '0'; 
    -- Outputs 
    signal Q   : integer range 0 to 5; 
 
BEGIN 
    -- Instantiate the Unit Under Test (UUT) 
    uut: count_n PORT MAP ( 
        rst => rst, 
        clk => clk, 
        Q   => Q 
    ); 
 
    -- Clock generation (50 MHz / 20 ns period) 
    clk <= not clk after 10 ns; 
 
    -- Stimulus process 
    stim_proc: process 
    begin 
        RST <= '1'; wait for 20 ns; 
        RST <= '0'; wait for 140 ns; 
        wait; 
    end process; 
END behavioral;`
      }
    ]
  },
  {
    id: "vlsi-exp6",
    title: "Exp 6: First In First Out (FIFO)",
    file: "std_fifo.vhd",
    category: "Xilinx Design Suite - Memory & Buffers",
    description: "Synchronous FIFO buffer with generic data width and depth (8x8), circular buffer with modulo indexing, count tracking, empty/full flags, and simulation testbench.",
    tags: ["VHDL", "FIFO", "Memory Buffer", "Xilinx", "Testbench"],
    codeFiles: [
      {
        filename: "std_fifo.vhd",
        language: "vhdl",
        code: `library IEEE; 
use IEEE.STD_LOGIC_1164.ALL; 
 
entity STD_FIFO is 
    Generic ( 
        DATA_WIDTH : positive := 8; 
        FIFO_DEPTH : positive := 8 
    ); 
    Port ( 
        CLK     : in  STD_LOGIC; 
        RST     : in  STD_LOGIC; 
        WriteEn : in  STD_LOGIC; 
        DataIn  : in  STD_LOGIC_VECTOR(DATA_WIDTH-1 downto 0); 
        ReadEn  : in  STD_LOGIC; 
        DataOut : out STD_LOGIC_VECTOR(DATA_WIDTH-1 downto 0); 
        Empty   : out STD_LOGIC; 
        Full    : out STD_LOGIC 
    ); 
end STD_FIFO; 
 
architecture Behavioral of STD_FIFO is 
    type FIFO_Memory is array (0 to FIFO_DEPTH-1) 
        of STD_LOGIC_VECTOR(DATA_WIDTH-1 downto 0); 
begin 
    fifo_proc: process(CLK) 
        variable Memory : FIFO_Memory; 
        variable Head   : integer range 0 to FIFO_DEPTH-1 := 0; 
        variable Tail   : integer range 0 to FIFO_DEPTH-1 := 0; 
        variable Count  : integer range 0 to FIFO_DEPTH := 0; 
    begin 
        if rising_edge(CLK) then 
            if RST = '1' then 
                Head := 0; 
                Tail := 0; 
                Count := 0; 
                DataOut <= (others => '0'); 
                Empty   <= '1'; 
                Full    <= '0'; 
            else 
                -- READ OPERATION 
                if ReadEn = '1' and Count > 0 then 
                    DataOut <= Memory(Head); 
                    Head := (Head + 1) mod FIFO_DEPTH; 
                    Count := Count - 1; 
                end if; 
 
                -- WRITE OPERATION 
                if WriteEn = '1' and Count < FIFO_DEPTH then 
                    Memory(Tail) := DataIn; 
                    Tail := (Tail + 1) mod FIFO_DEPTH; 
                    Count := Count + 1; 
                end if; 
 
                -- FIFO STATUS 
                if Count = 0 then 
                    Empty <= '1'; 
                else 
                    Empty <= '0'; 
                end if; 
 
                if Count = FIFO_DEPTH then 
                    Full <= '1'; 
                else 
                    Full <= '0'; 
                end if; 
            end if; 
        end if; 
    end process; 
end Behavioral;`
      },
      {
        filename: "std_fifo_tb.vhd",
        language: "vhdl",
        code: `LIBRARY ieee; 
USE ieee.std_logic_1164.ALL; 
 
ENTITY STD_FIFO_tb IS 
END STD_FIFO_tb; 
 
ARCHITECTURE behavior OF STD_FIFO_tb IS 
    COMPONENT STD_FIFO 
        GENERIC ( 
            DATA_WIDTH : positive := 8; 
            FIFO_DEPTH : positive := 8 
        ); 
        PORT ( 
            CLK     : IN  std_logic; 
            RST     : IN  std_logic; 
            WriteEn : IN  std_logic; 
            DataIn  : IN  std_logic_vector(DATA_WIDTH-1 downto 0); 
            ReadEn  : IN  std_logic; 
            DataOut : OUT std_logic_vector(DATA_WIDTH-1 downto 0); 
            Empty   : OUT std_logic; 
            Full    : OUT std_logic 
        ); 
    END COMPONENT; 
 
    signal CLK     : std_logic := '0'; 
    signal RST     : std_logic := '0'; 
    signal WriteEn : std_logic := '0'; 
    signal DataIn  : std_logic_vector(7 downto 0) := (others => '0'); 
    signal ReadEn  : std_logic := '0'; 
 
    signal DataOut : std_logic_vector(7 downto 0); 
    signal Empty   : std_logic; 
    signal Full    : std_logic; 
 
BEGIN 
    uut: STD_FIFO 
        PORT MAP ( 
            CLK      => CLK, 
            RST      => RST, 
            WriteEn  => WriteEn, 
            DataIn   => DataIn, 
            ReadEn   => ReadEn, 
            DataOut  => DataOut, 
            Empty    => Empty, 
            Full     => Full 
        ); 
 
    -- Clock generation (50 MHz / 20 ns period) 
    CLK <= NOT CLK AFTER 10 ns; 
 
    -- Testbench stimulus 
    stim_proc: process 
    begin 
        -- Reset 
        RST <= '1'; 
        wait for 20 ns; 
        RST <= '0'; 
 
        -- Write first data 
        WriteEn <= '1'; 
        DataIn  <= "10101010"; 
        wait for 20 ns; 
 
        -- Write second data 
        DataIn  <= "00001111"; 
        wait for 20 ns; 
 
        -- Write third data 
        DataIn  <= "11001100"; 
        wait for 20 ns; 
 
        -- Stop writing 
        WriteEn <= '0'; 
        wait for 20 ns; 
 
        -- Read first data 
        ReadEn  <= '1'; 
        wait for 20 ns; 
 
        -- Read second data 
        wait for 20 ns; 
 
        -- Read third data 
        wait for 20 ns; 
 
        -- Stop reading 
        ReadEn  <= '0'; 
        wait; 
    end process; 
END behavior;`
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
        filename: "inverter_6_1_2_1.msk",
        language: "text",
        code: `VERSION 16-11-2026 19:30:00
FIG #inverter_6_1_2_1.MSK
BB(6,7,32,54)
SIMU #5.00
REC(6,28,26,26,NW)
REC(12,34,6,12,DP)
REC(20,34,6,12,DP)
REC(12,12,6,4,DN)
REC(20,12,6,4,DN)
REC(14,36,2,2,CO)
REC(14,42,2,2,CO)
REC(22,36,2,2,CO)
REC(22,42,2,2,CO)
REC(14,13,2,2,CO)
REC(22,13,2,2,CO)
REC(18,8,2,42,PO)
REC(12,34,5,17,ME)
REC(12,7,5,9,ME)
REC(21,12,5,34,ME)
REC(18,34,2,12,DP)
REC(18,12,2,4,DN)
TITLE 14 50  #Vdd+
$1 1000 0 
TITLE 14 8  #Vss-
$0 1000 0 
TITLE 19 25  #clock2
$c 1000 0 0.4750 0.5000 0.9750 1.0000 
TITLE 25 25  #Y
$v 1000 0 
FFIG inverter_6_1_2_1.MSK`
      },
      {
        filename: "inverter_microwind_notes.txt",
        language: "text",
        code: `EXPERIMENT 8: INVERTER USING MICROWIND

AIM: To simulate CMOS Inverter using Microwind software.
TOOLS: Microwind, DSch.

TRANSISTOR SPECIFICATIONS:
- PMOS (6:1 Aspect Ratio):
  * W/L = 12 lambda / 2 lambda = 6 : 1
  * 2 Source Contacts to VDD, 2 Drain Contacts to Out (Y)
- NMOS (2:1 Aspect Ratio):
  * W/L = 4 lambda / 2 lambda = 2 : 1
  * 1 Source Contact to VSS, 1 Drain Contact to Out (Y)

LAYOUT PIN CONFIGURATION:
- VDD+ : Top-left Metal-1 (Supply 1)
- VSS- : Bottom-left Metal-1 (Ground 0)
- clock2 : Polysilicon input gate (Clock stimulus)
- Y : Right vertical Metal-1 (Visible output voltage node)

STEPS IN MICROWIND:
1. Select Technology Rule file: File -> Select Foundry -> cmos012.rul (120nm).
2. Open File -> Open -> select inverter_6_1_2_1.msk.
3. Click Simulate -> Run Simulation (or press F12) to observe transient waveforms and VTC.`
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
