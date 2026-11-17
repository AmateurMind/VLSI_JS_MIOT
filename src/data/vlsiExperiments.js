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
    file: "8_inverter.msk",
    category: "Microwind Layout & Simulation",
    description: "Design, layout, and simulation of CMOS Inverter in Microwind. W:L Ratio -> PMOS: 0.6:0.1 | NMOS: 0.2:0.1.",
    aspectRatio: {
      pmos: "0.6:0.1 (W:L)",
      nmos: "0.2:0.1 (W:L)"
    },
    tags: ["Microwind", "CMOS Inverter", "W:L 0.6:0.1 / 0.2:0.1", "Layout", "Simulation", "VLSI Inverter"],
    circuits: [
      {
        caption: "CMOS Inverter Circuit Diagram",
        src: "/images/vlsi/exp8_inverter_circuit.png"
      }
    ],
    truthTables: [
      {
        title: "CMOS Inverter Truth Table",
        headers: ["Vin (Input)", "Vout (Output)"],
        rows: [
          ["0", "1"],
          ["1", "0"]
        ]
      }
    ],
    images: [
      {
        caption: "CMOS Inverter Layout in Microwind (from VLSI Inverter.pdf)",
        src: "/images/vlsi/exp8_inverter_layout.png"
      },
      {
        caption: "OUTPUT: CMOS Inverter Transient Simulation Waveforms (Input A & Output Y)",
        src: "/images/vlsi/exp8_inverter_waveform.png"
      },
      {
        caption: "CMOS Inverter Voltage Transfer Characteristic (VTC)",
        src: "/images/vlsi/exp8_inverter_p1_2.png"
      }
    ],
    codeFiles: [
      {
        filename: "8_inverter.msk",
        language: "text",
        code: `VERSION 16-11-2026 22:17:45
FIG #8_inverter.MSK
BB(21,-7,45,46)
SIMU #5.00
REC(21,19,24,22,NW)
REC(34,25,5,10,DP)
REC(27,25,5,10,DP)
REC(34,-3,5,10,DN)
REC(27,-3,5,10,DN)
REC(36,-2,2,2,CO)
REC(36,4,2,2,CO)
REC(36,32,2,2,CO)
REC(28,4,2,2,CO)
REC(28,26,2,2,CO)
REC(28,-2,2,2,CO)
REC(28,32,2,2,CO)
REC(36,26,2,2,CO)
REC(32,-6,2,44,PO)
REC(35,-3,4,38,ME)
REC(27,-7,4,14,ME)
REC(27,25,4,14,ME)
REC(32,25,2,10,DP)
REC(32,-3,2,10,DN)
TITLE 42 37  #Vdd
$1 1000 0 
TITLE 28 37  #Vdd
$1 1000 0 
TITLE 29 -6  #Vss
$0 1000 0 
TITLE 33 14  #A
$c 1000 0 0.2250 0.2500 0.4750 0.5000 
TITLE 37 13  #Y
$v 1000 0 
TITLE 24 46  #8 INVERTER
$- 1000 0 
FFIG 8_inverter.MSK`
      }
    ]
  },
  {
    id: "vlsi-exp9",
    title: "Exp 9: NAND and NOR using Microwind",
    file: "nand_nor_microwind",
    category: "Microwind Layout & Simulation",
    description: "Design and simulation of 2-input CMOS NAND and NOR gates using 4 fingers in Microwind. W:L Ratio -> PMOS: 0.6:0.1 | NMOS: 0.6:0.1.",
    aspectRatio: {
      fingers: "4 fingers",
      pmos: "0.6:0.1 (W:L)",
      nmos: "0.6:0.1 (W:L)"
    },
    tags: ["Microwind", "NAND", "NOR", "4 fingers", "PMOS 0.6:0.1", "NMOS 0.6:0.1", "Layout"],
    circuits: [
      {
        caption: "2-Input CMOS NAND Gate Circuit Diagram",
        src: "/images/vlsi/exp9_nand_circuit.png"
      },
      {
        caption: "2-Input CMOS NOR Gate Circuit Diagram",
        src: "/images/vlsi/exp9_nor_circuit.png"
      }
    ],
    truthTables: [
      {
        title: "NAND Gate Truth Table: Y = (A · B)'",
        headers: ["A", "B", "Y = (A·B)'"],
        rows: [
          ["0", "0", "1"],
          ["0", "1", "1"],
          ["1", "0", "1"],
          ["1", "1", "0"]
        ]
      },
      {
        title: "NOR Gate Truth Table: Y = (A + B)'",
        headers: ["A", "B", "Y = (A+B)'"],
        rows: [
          ["0", "0", "1"],
          ["0", "1", "0"],
          ["1", "0", "0"],
          ["1", "1", "0"]
        ]
      }
    ],
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
        filename: "9(1)_nand.msk",
        language: "text",
        code: `VERSION 16-11-2026 22:24:54
FIG #9(1)NAND.MSK
BB(12,4,44,55)
SIMU #5.00
REC(12,28,32,22,NW)
REC(33,34,5,10,DP)
REC(25,34,6,10,DP)
REC(18,34,5,10,DP)
REC(33,10,5,7,DN)
REC(25,10,6,7,DN)
REC(18,10,5,7,DN)
REC(35,35,2,2,CO)
REC(27,35,2,2,CO)
REC(19,41,2,2,CO)
REC(19,11,2,2,CO)
REC(19,35,2,2,CO)
REC(27,35,2,2,CO)
REC(27,11,2,2,CO)
REC(27,41,2,2,CO)
REC(27,41,2,2,CO)
REC(35,11,2,2,CO)
REC(27,11,2,2,CO)
REC(35,41,2,2,CO)
REC(31,7,2,40,PO)
REC(23,7,2,40,PO)
REC(18,52,20,3,ME)
REC(18,34,4,18,ME)
REC(34,30,4,22,ME)
REC(26,6,4,12,ME)
REC(26,20,4,1,ME)
REC(26,24,4,24,ME)
REC(34,4,4,14,ME)
REC(18,21,12,3,ME)
REC(18,6,4,15,ME)
REC(31,34,2,10,DP)
REC(23,34,2,10,DP)
REC(31,10,2,7,DN)
REC(23,10,2,7,DN)
TITLE 42 41  #Vdd
$1 1000 0 
TITLE 27 54  #Vdd
$1 1000 0 
TITLE 37 6  #Vss
$0 1000 0 
TITLE 24 26  #A
$c 1000 0 0.2250 0.2500 0.4750 0.5000 
TITLE 32 26  #B
$c 1000 0 0.4750 0.5000 0.9750 1.0000 
TITLE 28 26  #Y
$v 1000 0 
FFIG 9(1)NAND.MSK`
      },
      {
        filename: "9(2)_nor.msk",
        language: "text",
        code: `VERSION 16-11-2026 22:51:43
FIG #9(2)_NOR.MSK
BB(23,-10,55,48)
SIMU #5.00
REC(23,26,32,22,NW)
REC(44,32,5,10,DP)
REC(36,32,6,10,DP)
REC(29,32,5,10,DP)
REC(44,2,5,10,DN)
REC(36,2,6,10,DN)
REC(29,2,5,10,DN)
REC(38,39,2,2,CO)
REC(38,9,2,2,CO)
REC(38,3,2,2,CO)
REC(46,33,2,2,CO)
REC(46,39,2,2,CO)
REC(30,3,2,2,CO)
REC(30,33,2,2,CO)
REC(30,9,2,2,CO)
REC(30,39,2,2,CO)
REC(46,9,2,2,CO)
REC(46,3,2,2,CO)
REC(38,33,2,2,CO)
REC(34,-1,2,46,PO)
REC(42,-1,2,46,PO)
REC(29,-7,4,19,ME)
REC(45,-7,4,19,ME)
REC(45,32,4,14,ME)
REC(29,22,4,24,ME)
REC(29,18,12,4,ME)
REC(29,-10,20,3,ME)
REC(37,28,4,14,ME)
REC(37,2,4,16,ME)
REC(42,32,2,10,DP)
REC(34,32,2,10,DP)
REC(42,2,2,10,DN)
REC(34,2,2,10,DN)
TITLE 51 37  #Vdd
$1 1000 0 
TITLE 47 43  #Vdd
$1 1000 0 
TITLE 39 -9  #Vss
$0 1000 0 
TITLE 35 16  #A
$c 1000 0 0.2250 0.2500 0.4750 0.5000 
TITLE 43 16  #B
$c 1000 0 0.4750 0.5000 0.9750 1.0000 
TITLE 38 19  #Y
$v 1000 0 
FFIG 9(2)_NOR.MSK`
      }
    ]
  },
  {
    id: "vlsi-exp10",
    title: "Exp 10: Boolean Expression Y = (AB + CD)' using Microwind",
    file: "boolean_expression_microwind",
    category: "Microwind Layout & Simulation",
    description: "CMOS layout and simulation for Boolean Expression Y = (AB + CD)' using 4 fingers in Microwind. W:L Ratio -> PMOS: 1.2:0.1 | NMOS: 2:1.",
    aspectRatio: {
      fingers: "4 fingers",
      pmos: "1.2:0.1 (W:L)",
      nmos: "0.2:0.1 (W:L)"
    },
    tags: ["Microwind", "AOI", "Boolean Expression", "4 fingers", "PMOS 1.2:0.1", "NMOS 2:1", "Layout"],
    circuits: [
      {
        caption: "CMOS AOI22 Complex Logic Circuit Diagram: Y = (AB + CD)'",
        src: "/images/vlsi/exp10_boolean_circuit.png"
      }
    ],
    truthTables: [
      {
        title: "AOI22 Boolean Expression Truth Table: Y = (AB + CD)'",
        headers: ["A", "B", "C", "D", "AB", "CD", "AB+CD", "Y = (AB+CD)'"],
        rows: [
          ["0", "0", "0", "0", "0", "0", "0", "1"],
          ["0", "0", "0", "1", "0", "0", "0", "1"],
          ["0", "0", "1", "0", "0", "0", "0", "1"],
          ["0", "0", "1", "1", "0", "1", "1", "0"],
          ["0", "1", "0", "0", "0", "0", "0", "1"],
          ["0", "1", "0", "1", "0", "0", "0", "1"],
          ["0", "1", "1", "0", "0", "0", "0", "1"],
          ["0", "1", "1", "1", "0", "1", "1", "0"],
          ["1", "0", "0", "0", "0", "0", "0", "1"],
          ["1", "0", "0", "1", "0", "0", "0", "1"],
          ["1", "0", "1", "0", "0", "0", "0", "1"],
          ["1", "0", "1", "1", "0", "1", "1", "0"],
          ["1", "1", "0", "0", "1", "0", "1", "0"],
          ["1", "1", "0", "1", "1", "0", "1", "0"],
          ["1", "1", "1", "0", "1", "0", "1", "0"],
          ["1", "1", "1", "1", "1", "1", "1", "0"]
        ]
      }
    ],
    images: [
      {
        caption: "Boolean Expression Layout - Page 1",
        src: "/images/vlsi/exp10_boolean_p1_1.png"
      },
      {
        caption: "Boolean Expression Layout & Simulation - Page 2",
        src: "/images/vlsi/exp10_boolean_p2_1.png"
      }
    ],
    codeFiles: [
      {
        filename: "10_boolean.msk",
        language: "text",
        code: `VERSION 16-11-2026 23:21:18
FIG #10_boolean.MSK
BB(-8,-18,40,54)
SIMU #5.00
REC(-8,16,48,32,NW)
REC(29,22,5,20,DP)
REC(21,22,6,20,DP)
REC(13,22,6,20,DP)
REC(5,22,6,20,DP)
REC(-2,22,5,20,DP)
REC(29,-5,5,4,DN)
REC(21,-5,6,4,DN)
REC(13,-5,6,4,DN)
REC(5,-5,6,4,DN)
REC(-2,-5,5,4,DN)
REC(31,23,2,2,CO)
REC(-1,29,2,2,CO)
REC(-1,23,2,2,CO)
REC(23,35,2,2,CO)
REC(23,29,2,2,CO)
REC(23,23,2,2,CO)
REC(31,35,2,2,CO)
REC(7,35,2,2,CO)
REC(-1,35,2,2,CO)
REC(15,35,2,2,CO)
REC(15,-4,2,2,CO)
REC(15,29,2,2,CO)
REC(23,-4,2,2,CO)
REC(31,-4,2,2,CO)
REC(7,-4,2,2,CO)
REC(-1,-4,2,2,CO)
REC(15,23,2,2,CO)
REC(7,23,2,2,CO)
REC(7,29,2,2,CO)
REC(31,29,2,2,CO)
REC(11,-8,2,53,PO)
REC(27,-8,2,53,PO)
REC(3,-8,2,53,PO)
REC(19,-8,2,53,PO)
REC(-2,7,28,5,ME)
REC(-2,-18,36,3,ME)
REC(22,-5,4,8,ME)
REC(-2,51,36,3,ME)
REC(14,-13,4,12,ME)
REC(-2,22,4,29,ME)
REC(6,18,4,20,ME)
REC(14,22,4,29,ME)
REC(22,12,4,26,ME)
REC(30,-15,4,14,ME)
REC(30,22,4,29,ME)
REC(6,-5,4,8,ME)
REC(-2,-15,4,22,ME)
REC(27,22,2,20,DP)
REC(19,22,2,20,DP)
REC(11,22,2,20,DP)
REC(3,22,2,20,DP)
REC(27,-5,2,4,DN)
REC(19,-5,2,4,DN)
REC(11,-5,2,4,DN)
REC(3,-5,2,4,DN)
TITLE 24 10  #Y
$v 1000 0 
TITLE 8 20  #Vdd
$1 1000 0 
TITLE 12 4  #B
$c 1000 0 0.4750 0.5000 0.9750 1.0000 
TITLE 4 3  #A
$c 1000 0 0.2250 0.2500 0.4750 0.5000 
TITLE 16 -12  #Vss
$0 1000 0 
TITLE 37 41  #Vdd
$1 1000 0 
TITLE 20 3  #s7
$c 1000 0 0.9750 1.0000 1.9750 2.0000 
TITLE 28 2  #s8
$c 1000 0 1.9750 2.0000 3.9750 4.0000 
FFIG 10_boolean.MSK`
      }
    ]
  },
  {
    id: "vlsi-exp11",
    title: "Exp 11: Half Adder using Microwind",
    file: "11_half_adder.msk",
    category: "Microwind Layout & Simulation",
    description: "CMOS layout and simulation of Half Adder circuit generating Sum (A XOR B) and Carry (A AND B) outputs in Microwind.",
    tags: ["Microwind", "Half Adder", "CMOS Layout", "Simulation", "MSK"],
    circuits: [
      {
        caption: "CMOS XOR Gate (Sum Generator: S = A ⊕ B)",
        src: "/images/vlsi/exp11_half_adder_xor_circuit.png"
      },
      {
        caption: "CMOS AND Gate (Carry Generator: C = A · B)",
        src: "/images/vlsi/exp11_half_adder_and_circuit.png"
      }
    ],
    truthTables: [
      {
        title: "Half Adder Truth Table",
        headers: ["A", "B", "Sum (S = A ⊕ B)", "Carry (C = A · B)"],
        rows: [
          ["0", "0", "0", "0"],
          ["0", "1", "1", "0"],
          ["1", "0", "1", "0"],
          ["1", "1", "0", "1"]
        ]
      }
    ],
    images: [
      {
        caption: "Half Adder CMOS Layout in Microwind",
        src: "/images/vlsi/exp11_half_adder_layout.png"
      },
      {
        caption: "Half Adder Sum & Carry Simulation Waveforms",
        src: "/images/vlsi/exp11_half_adder_waveform.png"
      },
      {
        caption: "Full Adder CMOS Layout in Microwind",
        src: "/images/vlsi/exp11_half_adder_p1_1.png"
      },
      {
        caption: "Full Adder Simulation Waveforms",
        src: "/images/vlsi/exp11_half_adder_p2_1.png"
      }
    ],
    codeFiles: [
      {
        filename: "11_half_adder.msk",
        language: "text",
        code: `VERSION 6/14/2023 7:08:34 AM
FIG #half-adder.MSK
BB(40,-142,178,55)
SIMU #5.00
REC(44,25,43,25,NW)
REC(58,-106,43,25,NW)
REC(123,-44,43,25,NW)
REC(44,-44,43,25,NW)
REC(123,25,43,25,NW)
REC(147,32,5,10,DP)
REC(147,-37,5,10,DP)
REC(139,32,6,10,DP)
REC(139,-37,6,10,DP)
REC(132,32,5,10,DP)
REC(132,-37,5,10,DP)
REC(82,-99,5,10,DP)
REC(74,-99,6,10,DP)
REC(68,32,5,10,DP)
REC(68,-37,5,10,DP)
REC(67,-99,5,10,DP)
REC(60,32,6,10,DP)
REC(60,-37,6,10,DP)
REC(53,32,5,10,DP)
REC(53,-37,5,10,DP)
REC(147,7,5,10,DN)
REC(147,-62,5,10,DN)
REC(139,7,6,10,DN)
REC(139,-62,6,10,DN)
REC(132,7,5,10,DN)
REC(132,-62,5,10,DN)
REC(82,-124,5,10,DN)
REC(74,-124,6,10,DN)
REC(68,7,5,10,DN)
REC(68,-62,5,10,DN)
REC(67,-124,5,10,DN)
REC(60,7,6,10,DN)
REC(60,-62,6,10,DN)
REC(53,7,5,10,DN)
REC(53,-62,5,10,DN)
REC(54,39,2,2,CO)
REC(133,39,2,2,CO)
REC(141,39,2,2,CO)
REC(62,39,2,2,CO)
REC(70,8,2,2,CO)
REC(149,-55,2,2,CO)
REC(133,-61,2,2,CO)
REC(133,-55,2,2,CO)
REC(70,14,2,2,CO)
REC(54,8,2,2,CO)
REC(133,14,2,2,CO)
REC(141,8,2,2,CO)
REC(54,14,2,2,CO)
REC(62,8,2,2,CO)
REC(70,33,2,2,CO)
REC(70,39,2,2,CO)
REC(149,33,2,2,CO)
REC(149,39,2,2,CO)
REC(149,8,2,2,CO)
REC(141,-36,2,2,CO)
REC(84,-117,2,2,CO)
REC(76,-98,2,2,CO)
REC(76,-117,2,2,CO)
REC(68,-98,2,2,CO)
REC(68,-92,2,2,CO)
REC(76,-92,2,2,CO)
REC(84,-123,2,2,CO)
REC(84,-92,2,2,CO)
REC(84,-98,2,2,CO)
REC(76,-123,2,2,CO)
REC(68,-117,2,2,CO)
REC(68,-123,2,2,CO)
REC(141,33,2,2,CO)
REC(141,14,2,2,CO)
REC(133,33,2,2,CO)
REC(62,33,2,2,CO)
REC(149,14,2,2,CO)
REC(133,8,2,2,CO)
REC(62,-36,2,2,CO)
REC(62,-55,2,2,CO)
REC(54,-36,2,2,CO)
REC(54,33,2,2,CO)
REC(62,14,2,2,CO)
REC(70,-55,2,2,CO)
REC(54,-61,2,2,CO)
REC(54,-55,2,2,CO)
REC(57,-9,2,2,CO)
REC(143,-6,3,3,CO)
REC(141,-55,2,2,CO)
REC(133,-36,2,2,CO)
REC(133,-30,2,2,CO)
REC(141,-30,2,2,CO)
REC(149,-61,2,2,CO)
REC(149,-30,2,2,CO)
REC(149,-36,2,2,CO)
REC(141,-61,2,2,CO)
REC(54,-30,2,2,CO)
REC(62,-30,2,2,CO)
REC(70,-61,2,2,CO)
REC(70,-30,2,2,CO)
REC(70,-36,2,2,CO)
REC(62,-61,2,2,CO)
REC(70,-75,3,3,CO)
REC(81,-75,3,3,CO)
REC(143,-75,3,3,CO)
REC(160,-14,5,5,CO)
REC(58,4,2,25,PO)
REC(58,-65,2,55,PO)
REC(72,-127,2,51,PO)
REC(66,-65,2,64,PO)
REC(66,1,2,44,PO)
REC(159,-13,7,5,PO)
REC(137,-15,29,2,PO)
REC(80,-127,2,51,PO)
REC(145,-71,2,47,PO)
REC(145,-2,2,47,PO)
REC(58,53,81,2,PO)
REC(137,4,2,49,PO)
REC(142,-7,5,5,PO)
REC(58,31,2,22,PO)
REC(40,29,20,2,PO)
REC(137,-65,2,50,PO)
REC(142,-76,5,5,PO)
REC(56,-10,4,4,PO)
REC(80,-76,5,5,PO)
REC(69,-76,5,5,PO)
REC(40,-1,28,2,PO)
REC(132,23,34,5,ME)
REC(67,-108,46,5,ME)
REC(140,-62,4,10,ME)
REC(114,-76,33,5,ME)
REC(140,-41,4,14,ME)
REC(61,7,4,10,ME)
REC(119,-7,28,5,ME)
REC(53,-46,61,5,ME)
REC(43,-7,10,5,ME)
REC(114,-71,5,30,ME)
REC(69,32,4,14,ME)
REC(159,-15,7,38,ME)
REC(148,32,4,14,ME)
REC(132,-46,46,5,ME)
REC(83,-128,4,14,ME)
REC(132,-37,4,14,ME)
REC(53,-6,4,29,ME)
REC(61,28,4,14,ME)
REC(53,-10,7,4,ME)
REC(53,-66,4,20,ME)
REC(61,-62,4,10,ME)
REC(140,7,4,10,ME)
REC(148,-37,4,14,ME)
REC(67,-128,4,20,ME)
REC(148,3,4,14,ME)
REC(75,-103,4,14,ME)
REC(148,-66,4,14,ME)
REC(53,46,20,5,ME)
REC(53,23,66,5,ME)
REC(114,-7,5,30,ME)
REC(53,-23,20,5,ME)
REC(69,-66,4,14,ME)
REC(43,-76,42,5,ME)
REC(69,3,4,14,ME)
REC(132,46,20,5,ME)
REC(83,-99,4,14,ME)
REC(140,28,4,14,ME)
REC(132,32,4,14,ME)
REC(132,-23,20,5,ME)
REC(43,-71,4,64,ME)
REC(53,-37,4,14,ME)
REC(132,-66,4,20,ME)
REC(61,-41,4,14,ME)
REC(53,32,4,14,ME)
REC(67,-99,4,14,ME)
REC(75,-124,4,10,ME)
REC(67,-85,20,5,ME)
REC(69,-37,4,14,ME)
REC(145,32,2,10,DP)
REC(145,-37,2,10,DP)
REC(137,32,2,10,DP)
REC(137,-37,2,10,DP)
REC(80,-99,2,10,DP)
REC(72,-99,2,10,DP)
REC(66,32,2,10,DP)
REC(66,-37,2,10,DP)
REC(58,32,2,10,DP)
REC(58,-37,2,10,DP)
REC(145,7,2,10,DN)
REC(145,-62,2,10,DN)
REC(137,7,2,10,DN)
REC(137,-62,2,10,DN)
REC(80,-124,2,10,DN)
REC(72,-124,2,10,DN)
REC(66,7,2,10,DN)
REC(66,-62,2,10,DN)
REC(58,7,2,10,DN)
REC(58,-62,2,10,DN)
TITLE 72 4  #Vss
$0 1000 0
TITLE 49 47  #Vdd
$1 1000 0
TITLE 68 50  #Vdd
$1 1000 0
TITLE 111 -106  #C
$v 1000 0
TITLE 128 -22  #Vdd
$1 1000 0
TITLE 151 -65  #Vss
$0 1000 0
TITLE 151 4  #Vss
$0 1000 0
TITLE 128 47  #Vdd
$1 1000 0
TITLE 147 50  #Vdd
$1 1000 0
TITLE 82 -81  #Vdd
$1 1000 0
TITLE 86 -127  #Vss
$0 1000 0
TITLE 147 -19  #Vdd
$1 1000 0
TITLE 72 -65  #Vss
$0 1000 0
TITLE 49 -22  #Vdd
$1 1000 0
TITLE 68 -19  #Vdd
$1 1000 0
TITLE 173 -44  #S
$v 1000 0
TITLE 63 -84  #Vdd
$1 1000 0
TITLE 41 30  #A
$c 1000 0 0.2250 0.2500 0.4750 0.5000
TITLE 41 0  #B
$c 1000 0 0.4750 0.5000 0.9750 1.0000
TITLE 61 -142  #Half Adder circuit using CMOS Technology
$- 1000 0
FFIG half-adder.MSK`
      }
    ]
  },
  {
    id: "vlsi-exp12",
    title: "Exp 12: 2:1 MUX using Microwind",
    file: "mux2to1_microwind",
    category: "Microwind Layout & Simulation",
    description: "Layout design and simulation of 2:1 Multiplexer using both Conventional CMOS logic and Transmission Gate (TG) configurations in Microwind.",
    tags: ["Microwind", "2:1 MUX", "Transmission Gate", "Layout", "Simulation"],
    circuits: [
      {
        caption: "2:1 MUX Conventional CMOS Logic Circuit Diagram",
        src: "/images/vlsi/exp12_mux_conventional_circuit.png"
      },
      {
        caption: "2:1 MUX Transmission Gate (TG) Circuit Diagram",
        src: "/images/vlsi/exp12_mux_tg_circuit.png"
      }
    ],
    truthTables: [
      {
        title: "2:1 MUX Function Table",
        headers: ["Select (S)", "Output (Y)", "Description"],
        rows: [
          ["0", "A", "Input A selected (passes to Y)"],
          ["1", "B", "Input B selected (passes to Y)"]
        ]
      },
      {
        title: "2:1 MUX Full Truth Table",
        headers: ["S", "A", "B", "Y"],
        rows: [
          ["0", "0", "0", "0"],
          ["0", "0", "1", "0"],
          ["0", "1", "0", "1"],
          ["0", "1", "1", "1"],
          ["1", "0", "0", "0"],
          ["1", "0", "1", "1"],
          ["1", "1", "0", "0"],
          ["1", "1", "1", "1"]
        ]
      }
    ],
    images: [
      {
        caption: "2:1 MUX Conventional Method Layout",
        src: "/images/vlsi/exp12_mux2to1_p1_1.png"
      },
      {
        caption: "2:1 MUX Conventional Method Output Waveforms",
        src: "/images/vlsi/exp12_mux2to1_p1_2.png"
      },
      {
        caption: "2:1 MUX Transmission Gate (TG) Layout",
        src: "/images/vlsi/exp12_mux2to1_p2_1.png"
      },
      {
        caption: "2:1 MUX Transmission Gate Output Waveforms",
        src: "/images/vlsi/exp12_mux2to1_tg_waveform.png"
      }
    ],
    codeFiles: [
      {
        filename: "12_mux_conventional.msk",
        language: "text",
        code: `VERSION 17-11-2026 12:41:44
FIG #12_mux_conventional.MSK
BB(84,-77,201,34)
SIMU #5.00
REC(84,-8,48,32,NW)
REC(177,-12,24,16,NW)
REC(190,-6,5,4,DP)
REC(183,-6,5,4,DP)
REC(121,-2,5,20,DP)
REC(113,-2,6,20,DP)
REC(105,-2,6,20,DP)
REC(97,-2,6,20,DP)
REC(90,-2,5,20,DP)
REC(190,-53,5,10,DN)
REC(183,-53,5,10,DN)
REC(121,-56,5,4,DN)
REC(113,-56,6,4,DN)
REC(105,-56,6,4,DN)
REC(97,-56,6,4,DN)
REC(90,-56,5,4,DN)
REC(91,-1,2,2,CO)
REC(123,-1,2,2,CO)
REC(123,5,2,2,CO)
REC(123,11,2,2,CO)
REC(115,11,2,2,CO)
REC(115,5,2,2,CO)
REC(115,-1,2,2,CO)
REC(184,-46,2,2,CO)
REC(192,-52,2,2,CO)
REC(107,11,2,2,CO)
REC(91,5,2,2,CO)
REC(136,-36,2,2,CO)
REC(91,-55,2,2,CO)
REC(123,-55,2,2,CO)
REC(115,-55,2,2,CO)
REC(107,-55,2,2,CO)
REC(99,-55,2,2,CO)
REC(184,-52,2,2,CO)
REC(107,5,2,2,CO)
REC(107,-1,2,2,CO)
REC(91,11,2,2,CO)
REC(192,-46,2,2,CO)
REC(99,11,2,2,CO)
REC(99,5,2,2,CO)
REC(99,-1,2,2,CO)
REC(184,-5,2,2,CO)
REC(192,-5,2,2,CO)
REC(188,-56,2,19,PO)
REC(188,-33,2,34,PO)
REC(103,-59,2,80,PO)
REC(111,-59,2,80,PO)
REC(119,-59,2,80,PO)
REC(135,-37,55,4,PO)
REC(95,-59,2,80,PO)
REC(90,-2,4,30,ME)
REC(90,-72,4,20,ME)
REC(106,-2,4,20,ME)
REC(90,-76,37,4,ME)
REC(98,-56,4,8,ME)
REC(89,-52,5,15,ME)
REC(122,-2,4,30,ME)
REC(183,-6,4,8,ME)
REC(89,-37,50,4,ME)
REC(114,-33,4,47,ME)
REC(183,-57,4,14,ME)
REC(98,-7,4,21,ME)
REC(90,28,36,6,ME)
REC(122,-77,4,1,ME)
REC(191,-53,4,51,ME)
REC(122,-72,4,20,ME)
REC(106,-66,4,14,ME)
REC(114,-56,4,8,ME)
REC(188,-6,2,4,DP)
REC(119,-2,2,20,DP)
REC(111,-2,2,20,DP)
REC(103,-2,2,20,DP)
REC(95,-2,2,20,DP)
REC(188,-53,2,10,DN)
REC(119,-56,2,4,DN)
REC(111,-56,2,4,DN)
REC(103,-56,2,4,DN)
REC(95,-56,2,4,DN)
TITLE 127 22  #Vdd
$1 1000 0 
TITLE 99 -3  #Vdd
$1 1000 0 
TITLE 108 -61  #Vss
$0 1000 0 
TITLE 199 1  #Vdd
$1 1000 0 
TITLE 185 -1  #Vdd
$1 1000 0 
TITLE 184 -55  #Vss
$0 1000 0 
TITLE 193 -33  #Y
$v 1000 0 
TITLE 104 -42  #A
$c 1000 0 0.2250 0.2500 0.4750 0.5000 
TITLE 120 -43  #B
$c 0 1000 1.0000 1.0250 2.0250 2.0500 
TITLE 112 -42  #S
$c 1000 0 0.4750 0.5000 0.9750 1.0000 
TITLE 96 -43  #~S
$c 0 1000 0.4750 0.5000 0.9750 1.0000 
FFIG 12_mux_conventional.MSK`
      },
      {
        filename: "12_mux_transmission_gate.msk",
        language: "text",
        code: `VERSION 17-11-2026 12:53:48
FIG #12_mux_transmission_gate.MSK
BB(-8,-62,28,48)
SIMU #5.00
REC(4,-34,24,22,NW)
REC(4,21,24,26,NW)
REC(17,27,5,14,DP)
REC(17,-28,5,10,DP)
REC(10,27,5,14,DP)
REC(10,-28,5,10,DP)
REC(17,0,5,4,DN)
REC(17,-52,5,4,DN)
REC(10,0,5,4,DN)
REC(10,-52,5,4,DN)
REC(19,-21,2,2,CO)
REC(11,-21,2,2,CO)
REC(11,35,2,2,CO)
REC(19,35,2,2,CO)
REC(11,-27,2,2,CO)
REC(19,-27,2,2,CO)
REC(19,1,2,2,CO)
REC(11,1,2,2,CO)
REC(19,-51,2,2,CO)
REC(11,-51,2,2,CO)
REC(11,28,2,2,CO)
REC(19,28,2,2,CO)
REC(-8,-62,25,3,PO)
REC(15,24,2,22,PO)
REC(15,-31,2,38,PO)
REC(-8,-59,5,105,PO)
REC(15,-59,2,14,PO)
REC(-8,46,25,2,PO)
REC(18,-52,4,90,ME)
REC(10,-56,4,42,ME)
REC(10,-4,4,46,ME)
REC(15,27,2,14,DP)
REC(15,-28,2,10,DP)
REC(15,0,2,4,DN)
REC(15,-52,2,4,DN)
TITLE 25 42  #Vdd
$1 1000 0 
TITLE 27 -15  #Vdd
$1 1000 0 
TITLE 11 16  #A
$c 1000 0 0.2250 0.2500 0.4750 0.5000 
TITLE 21 -3  #Y
$v 1000 0 
TITLE -6 -14  #S
$c 1000 0 0.9750 1.0000 1.9750 2.0000 
TITLE 15 -8  #~S
$c 0 1000 0.9750 1.0000 1.9750 2.0000 
TITLE 11 -39  #B
$s 500 250 1000.0000 0.0000 0.0000 0.0000 
FFIG 12_mux_transmission_gate.MSK`
      }
    ]
  }
];
