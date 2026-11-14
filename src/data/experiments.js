export const EXPERIMENTS_DATA = {
  JS: [
    {
      id: "js-exp1",
      title: "Exp 1: Rectangle Area Calculation",
      file: "index.html",
      category: "Basic JavaScript & DOM",
      description: "Calculates the area of a rectangle from user length and breadth prompt inputs and outputs the result into the document.",
      tags: ["prompt", "document.write", "math"],
      codeFiles: [
        {
          filename: "index.html",
          language: "html",
          code: `<!DOCTYPE html>
<html>
<head>
    <title>Area Calculation</title>
</head>
<body>
<script>
    let length = Number(prompt("Enter length:"));
    let breadth = Number(prompt("Enter breadth:"));
    let rectangleArea = length * breadth;
    document.write("Area of Rectangle = " + rectangleArea + "<br><br>");
</script>
</body>
</html>`
        }
      ]
    },
    {
      id: "js-exp2",
      title: "Exp 2: Multiplication Table Generator",
      file: "index2.html",
      category: "Loops & Control Flow",
      description: "Takes an input number via prompt and outputs its multiplication table from 1 through 10 using a for loop.",
      tags: ["for-loop", "prompt", "math"],
      codeFiles: [
        {
          filename: "index2.html",
          language: "html",
          code: `<!DOCTYPE html>
<html>
<head>
    <title>Multiplication Table</title>
</head>
<body>
<script>
    let n = Number(prompt("Enter a number:"));

    for (let i = 1; i <= 10; i++) {
        document.write(n + " × " + i + " = " + (n * i) + "<br>");
    }
</script>
</body>
</html>`
        }
      ]
    },
    {
      id: "js-exp3",
      title: "Exp 3: String Operations & Palindrome",
      file: "index3.html",
      category: "String Manipulation",
      description: "Performs three core string operations: reversing a string, replacing characters with replaceAll(), and checking if the string is a palindrome.",
      tags: ["string", "reverse", "replaceAll", "palindrome"],
      codeFiles: [
        {
          filename: "index3.html",
          language: "html",
          code: `<!DOCTYPE html>
<html>
<head>
    <title>String Operations</title>
</head>
<body>
<script>
    let str = prompt("Enter a string:");
    // i. Reverse String
    let reverse = str.split("").reverse().join("");
    document.write("Reverse String = " + reverse + "<br>");

    // ii. Replace Characters
    let oldChar = prompt("Enter character to replace:");
    let newChar = prompt("Enter new character:");
    let replaced = str.replaceAll(oldChar, newChar);
    document.write("After Replacement = " + replaced + "<br>");
    // iii. Check Palindrome
    if (str.toLowerCase() === reverse.toLowerCase()) {
        document.write("String is Palindrome");
    } else {
        document.write("String is Not Palindrome");
    }
</script>
</body>
</html>`
        }
      ]
    },
    {
      id: "js-exp4",
      title: "Exp 4: String Comparison with localeCompare",
      file: "index4.html",
      category: "String Manipulation & DOM",
      description: "Interactive UI taking two string inputs and comparing their lexicographical order using String.prototype.localeCompare().",
      tags: ["localeCompare", "inputs", "button-click", "DOM"],
      codeFiles: [
        {
          filename: "index4.html",
          language: "html",
          code: `<!DOCTYPE html>
<html>
<body style="text-align:center;" id="demo">
<h1 style="color:green;"></h1>
First String:
<input type="text" id="t" name="tn">
<br><br>
Second String:
<input type="text" id="t1" name="tn1">
<br><br>
<button onclick="sample()">
    Compare the two strings
</button>
<p id="sample"
   style="color:red;
          font-size:23px;
          font-weight:bold;">
</p>
<script>
var s = document.getElementById("t");
var s1 = document.getElementById("t1");
var result = document.getElementById("sample");
function sample() {
    var x = s.value;
    var y = s1.value;
    var out = x.localeCompare(y);
    var r = "";

    if (out < 0) {
        r = '"' + x + '" string value comes before "' + y + '"';
    } 
    else if (out == 0) {
        r = 'Both the string values are equal';
    } 
    else {
        r = '"' + x + '" string value comes after "' + y + '"';
    }
    result.innerHTML = r;
}
</script>
</body>
</html>`
        }
      ]
    },
    {
      id: "js-exp5",
      title: "Exp 5: Live Countdown Timer",
      file: "index5.html",
      category: "Timers & Date Object",
      description: "A digital countdown timer that updates every second using setInterval() and date mathematics to calculate days, hours, minutes, and seconds.",
      tags: ["setInterval", "Date", "clearInterval", "timer"],
      codeFiles: [
        {
          filename: "index5.html",
          language: "html",
          code: `<!DOCTYPE HTML>
<html>
<head>
    <h1>Countdown Timer</h1>
    <style>
        p {
            text-align: center;
            font-size: 150px;
            color: grey;
        }
    </style>
</head>
<body>
    <p id="demo"></p>
    <script>
        // Set the date we're counting down to
        var countDownDate = new Date("Dec 31, 2027 23:59:59").getTime();
        // Update the countdown every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the countdown date
            var distance = countDownDate - now;
            // Time calculations
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );
            var minutes = Math.floor(
                (distance % (1000 * 60 * 60)) /
                (1000 * 60)
            );
            var seconds = Math.floor(
                (distance % (1000 * 60)) / 1000
            );

            // Display the result
            document.getElementById("demo").innerHTML =
                days + "d " +
                hours + "h " +
                minutes + "m " +
                seconds + "s ";
            // If countdown is finished
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }

        }, 1000);
    </script>

</body>

</html>`
        }
      ]
    },
    {
      id: "js-exp6",
      title: "Exp 6: Array Operations (Remove, Contains, Empty)",
      file: "index6.html",
      category: "Data Structures - Array",
      description: "Core utility operations on arrays: filter-based element removal, includes() search, and resetting array length to empty.",
      tags: ["arrays", "filter", "includes", "length"],
      codeFiles: [
        {
          filename: "index6.html",
          language: "html",
          code: `<html>
<script>
// Create an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Function to remove a specific element from the array
function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}
// Function to check if an array contains a specified value
function containsElement(arr, element) {
    return arr.includes(element);
}

// Function to empty an array
function emptyArray(arr) {
    arr.length = 0;
    return arr;
}

// Example usage
document.write("Original array: ", array);

// Remove element 9
array = removeElement(array, 9);
document.write("<br>After removing 9: ", array);
// Check if array contains 4
document.write("<br>Contains 4: ", containsElement(array, 4));
// Check if array contains 2
document.write("<br>Contains 2: ", containsElement(array, 2));
// Empty the array
array = emptyArray(array);
document.write("<br>After emptying: ", array);
</script>
</html>`
        }
      ]
    },
    {
      id: "js-exp8",
      title: "Exp 8: Set Operations (Union, Intersection, Difference)",
      file: "index8.html",
      category: "Data Structures - Set",
      description: "Mathematical set implementations using ES6 Set: Union, Intersection, Difference, and Symmetric Difference.",
      tags: ["Set", "union", "intersection", "difference"],
      codeFiles: [
        {
          filename: "index8.html",
          language: "html",
          code: `<html>
<head>
    <title>Set Operation</title>
</head>
<body>
<script>
// Union
function union(setA, setB) {
    let unionSet = new Set(setA);
    for (let elem of setB) {
        unionSet.add(elem);
    }
    return unionSet;
}
const setA = new Set(['apple', 'banana', 'cherry', 'date']);
const setB = new Set(['banana', 'date', 'fig']);
console.log("Union:", union(setA, setB));

// Intersection
function intersection(setA, setB) {
    let intersectionSet = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            intersectionSet.add(elem);
        }
    }
    return intersectionSet;
}
console.log("Intersection:", intersection(setA, setB));

// Difference
function difference(setA, setB) {
    let differenceSet = new Set(setA);

    for (let elem of setB) {
        differenceSet.delete(elem);
    }
    return differenceSet;
}
console.log("Difference:", difference(setA, setB));

// Symmetric Difference
function symmetricDifference(setA, setB) {
    let differenceSet = new Set(setA);

    for (let elem of setB) {
        if (differenceSet.has(elem)) {
            differenceSet.delete(elem);
        } else {
            differenceSet.add(elem);
        }
    }

    return differenceSet;
}

console.log("Symmetric Difference:",
    symmetricDifference(setA, setB));

</script>
</body>
</html>`
        }
      ]
    },
    {
      id: "js-exp9",
      title: "Exp 9: Mouse & Focus Events Demo",
      file: "exp 9/exp9_mouse_events.html",
      category: "Event Handling",
      description: "Color matrix table responding to onmouseover and onmouseout events to alter page background, plus onfocus/onblur input feedback.",
      tags: ["events", "onmouseover", "onmouseout", "onfocus", "onblur"],
      codeFiles: [
        {
          filename: "exp9_mouse_events.html",
          language: "html",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Experiment 9 - Mouse and Focus Events</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      transition: background-color 0.3s;
    }

    table {
      width: 600px;
      height: 300px;
      border-collapse: collapse;
    }

    td {
      border: 2px solid white;
      cursor: pointer;
    }

    input {
      padding: 8px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Experiment 9: Mouse and Focus Events</h1>

  <h2>1. Mouse Event</h2>
  <p>Move the mouse over any square to change the page background color.</p>

  <table>
    <tr>
      <td style="background-color: pink" onmouseover="bgChange(this.style.backgroundColor)" onmouseout="bgChange('white')"></td>
      <td style="background-color: PaleGreen" onmouseover="bgChange(this.style.backgroundColor)" onmouseout="bgChange('white')"></td>
      <td style="background-color: Blue" onmouseover="bgChange(this.style.backgroundColor)" onmouseout="bgChange('white')"></td>
    </tr>
    <tr>
      <td style="background-color: yellow" onmouseover="bgChange(this.style.backgroundColor)" onmouseout="bgChange('white')"></td>
      <td style="background-color: Green" onmouseover="bgChange(this.style.backgroundColor)" onmouseout="bgChange('white')"></td>
      <td style="background-color: gray" onmouseover="bgChange(this.style.backgroundColor)" onmouseout="bgChange('white')"></td>
    </tr>
  </table>

  <h2>2. Focus Event</h2>
  <label for="studentName">Enter your name: </label>
  <input id="studentName" type="text" onfocus="focusChange(this)" onblur="resetInput(this)">
  <p>When the input field gets focus, its background color changes to pink.</p>

  <script>
    function bgChange(bg) {
      document.body.style.backgroundColor = bg;
    }

    function focusChange(input) {
      input.style.backgroundColor = "pink";
    }

    function resetInput(input) {
      input.style.backgroundColor = "white";
    }
  </script>
</body>
</html>`
        }
      ]
    },
    {
      id: "js-exp10",
      title: "Exp 10: Student Information Form Validation",
      file: "exp 10/index.html & script.js",
      category: "Form Validation & Regex",
      description: "Interactive student registration form with client-side regex validation for alphabetical name, phone number (10 digits), and email formatting.",
      tags: ["form", "validation", "regex", "addEventListener"],
      codeFiles: [
        {
          filename: "index.html",
          language: "html",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Experiment 10 - Student Information Form</title>
  <style>
    * { box-sizing: border-box; }

    body {
      font-family: Arial, sans-serif;
      background: #f2f6ff;
      margin: 0;
      padding: 40px 16px;
    }

    .container {
      max-width: 600px;
      margin: auto;
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 3px 12px #b7c2d6;
    }

    h1 { color: #173f80; font-size: 25px; }
    .field { margin: 16px 0; }
    label { display: block; font-weight: bold; margin-bottom: 6px; }

    input, select {
      width: 100%;
      padding: 10px;
      border: 1px solid #8b98ac;
      border-radius: 5px;
      font-size: 16px;
    }

    button {
      background: #173f80;
      color: white;
      border: 0;
      padding: 11px 22px;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }

    .error { color: #c62828; margin-top: 18px; }
    .success { color: #147a32; margin-top: 18px; font-weight: bold; }
  </style>
</head>
<body>
  <main class="container">
    <h1>Student Information Form</h1>

    <form id="studentForm" novalidate>
      <div class="field">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your full name">
      </div>

      <div class="field">
        <label for="address">Address:</label>
        <input type="text" id="address" placeholder="Enter your address">
      </div>

      <div class="field">
        <label for="city">City:</label>
        <input type="text" id="city" placeholder="Enter your city">
      </div>

      <div class="field">
        <label for="state">State:</label>
        <input type="text" id="state" placeholder="Enter your state">
      </div>

      <div class="field">
        <label for="gender">Gender:</label>
        <select id="gender">
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="field">
        <label for="mobile">Mobile Number:</label>
        <input type="text" id="mobile" placeholder="Enter 10-digit mobile number">
      </div>

      <div class="field">
        <label for="email">Email ID:</label>
        <input type="email" id="email" placeholder="Enter your email address">
      </div>

      <button type="submit">Submit</button>
    </form>

    <div id="message" aria-live="polite"></div>
  </main>

  <script src="script.js"></script>
</body>
</html>`
        },
        {
          filename: "script.js",
          language: "javascript",
          code: `document.getElementById("studentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const messageDiv = document.getElementById("message");
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const gender = document.getElementById("gender").value;
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const errors = [];

  if (!name || !/^[a-zA-Z\\s]+$/.test(name)) {
    errors.push("Please enter a valid name using letters only.");
  }
  if (!address) errors.push("Address cannot be empty.");
  if (!city) errors.push("City cannot be empty.");
  if (!state) errors.push("State cannot be empty.");
  if (!gender) errors.push("Please select a gender.");
  if (!/^\\d{10}$/.test(mobile)) {
    errors.push("Please enter a valid 10-digit mobile number.");
  }
  if (!/^\\S+@\\S+\\.\\S+$/.test(email)) {
    errors.push("Please enter a valid email ID.");
  }

  if (errors.length > 0) {
    messageDiv.className = "error";
    messageDiv.innerHTML = errors.join("<br>");
    return;
  }

  messageDiv.className = "success";
  messageDiv.textContent = "Congratulations! Welcome, " + name + "!";
});`
        }
      ]
    }
  ],
  VLSI: [
    {
      id: "vlsi-exp1",
      title: "Exp 1: Half Adder & Full Adder in Verilog",
      file: "half_full_adder.v",
      category: "Combinational Circuits",
      description: "Dataflow and structural modeling of Half Adder and Full Adder circuits with respective testbenches.",
      tags: ["Verilog", "Adder", "Gate Level", "Testbench"],
      codeFiles: [
        {
          filename: "half_adder.v",
          language: "verilog",
          code: `// Half Adder - Dataflow Modeling
module half_adder (
    input a,
    input b,
    output sum,
    output carry
);
    assign sum = a ^ b;
    assign carry = a & b;
endmodule

// Full Adder using Half Adders
module full_adder (
    input a,
    input b,
    input cin,
    output sum,
    output cout
);
    wire s1, c1, c2;
    half_adder ha1 (.a(a), .b(b), .sum(s1), .carry(c1));
    half_adder ha2 (.a(s1), .b(cin), .sum(sum), .carry(c2));
    assign cout = c1 | c2;
endmodule`
        },
        {
          filename: "full_adder_tb.v",
          language: "verilog",
          code: `\`timescale 1ns / 1ps

module full_adder_tb;
    reg a, b, cin;
    wire sum, cout;

    full_adder uut (
        .a(a), .b(b), .cin(cin),
        .sum(sum), .cout(cout)
    );

    initial begin
        $dumpfile("full_adder.vcd");
        $dumpvars(0, full_adder_tb);
        
        a = 0; b = 0; cin = 0; #10;
        a = 0; b = 0; cin = 1; #10;
        a = 0; b = 1; cin = 0; #10;
        a = 0; b = 1; cin = 1; #10;
        a = 1; b = 0; cin = 0; #10;
        a = 1; b = 0; cin = 1; #10;
        a = 1; b = 1; cin = 0; #10;
        a = 1; b = 1; cin = 1; #10;
        $finish;
    end
endmodule`
        }
      ]
    },
    {
      id: "vlsi-exp2",
      title: "Exp 2: 4:1 Multiplexer (Dataflow & Behavioral)",
      file: "mux4to1.v",
      category: "Combinational Circuits",
      description: "Implementation of a 4-to-1 Multiplexer using behavioral case statement and conditional assignment.",
      tags: ["Multiplexer", "Verilog", "Mux", "Behavioral"],
      codeFiles: [
        {
          filename: "mux4to1.v",
          language: "verilog",
          code: `module mux4to1 (
    input [3:0] in,
    input [1:0] sel,
    output reg out
);
    always @(*) begin
        case (sel)
            2'b00: out = in[0];
            2'b01: out = in[1];
            2'b10: out = in[2];
            2'b11: out = in[3];
            default: out = 1'b0;
        endcase
    end
endmodule`
        },
        {
          filename: "mux4to1_tb.v",
          language: "verilog",
          code: `module mux4to1_tb;
    reg [3:0] in;
    reg [1:0] sel;
    wire out;

    mux4to1 uut (.in(in), .sel(sel), .out(out));

    initial begin
        in = 4'b1010;
        sel = 2'b00; #10;
        sel = 2'b01; #10;
        sel = 2'b10; #10;
        sel = 2'b11; #10;
        $finish;
    end
endmodule`
        }
      ]
    },
    {
      id: "vlsi-exp3",
      title: "Exp 3: D Flip-Flop with Asynchronous Reset",
      file: "d_ff.v",
      category: "Sequential Circuits",
      description: "Edge-triggered D Flip-Flop with active-low or active-high asynchronous reset.",
      tags: ["Flip-Flop", "Sequential", "Clock", "Verilog"],
      codeFiles: [
        {
          filename: "d_ff.v",
          language: "verilog",
          code: `module d_ff (
    input clk,
    input rst_n,
    input d,
    output reg q
);
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            q <= 1'b0;
        else
            q <= d;
    end
endmodule`
        }
      ]
    },
    {
      id: "vlsi-exp4",
      title: "Exp 4: 4-Bit Synchronous Up Counter",
      file: "counter4bit.v",
      category: "Sequential Circuits",
      description: "4-bit binary up counter with synchronous reset and enable input.",
      tags: ["Counter", "Sequential", "Registers"],
      codeFiles: [
        {
          filename: "counter4bit.v",
          language: "verilog",
          code: `module counter4bit (
    input clk,
    input rst,
    input enable,
    output reg [3:0] count
);
    always @(posedge clk) begin
        if (rst)
            count <= 4'b0000;
        else if (enable)
            count <= count + 1'b1;
    end
endmodule`
        }
      ]
    }
  ],
  MIOT: [
    {
      id: "miot-exp1",
      title: "Exp 1: LED Blink & Push Button with Arduino / ESP32",
      file: "blink_button.ino",
      category: "GPIO & Basic Interfacing",
      description: "Controls an LED using an external tactile push button with internal pull-up configuration on Arduino/ESP32.",
      tags: ["Arduino", "ESP32", "GPIO", "DigitalRead"],
      codeFiles: [
        {
          filename: "blink_button.ino",
          language: "cpp",
          code: `const int LED_PIN = 13;
const int BUTTON_PIN = 2;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);
  if (buttonState == LOW) {
    digitalWrite(LED_PIN, HIGH);
    Serial.println("LED ON");
  } else {
    digitalWrite(LED_PIN, LOW);
  }
  delay(50);
}`
        }
      ]
    },
    {
      id: "miot-exp2",
      title: "Exp 2: DHT11 Temperature & Humidity Sensor",
      file: "dht11_reading.ino",
      category: "Sensors & Telemetry",
      description: "Reads ambient humidity and temperature using DHT11 sensor library and prints readings to Serial Monitor.",
      tags: ["DHT11", "Sensors", "Temperature", "Humidity"],
      codeFiles: [
        {
          filename: "dht11_reading.ino",
          language: "cpp",
          code: `#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();
  Serial.println("DHT11 Sensor Initialized");
}

void loop() {
  delay(2000);
  float humidity = dht.readHumidity();
  float temp = dht.readTemperature();

  if (isnan(humidity) || isnan(temp)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print("%  Temperature: ");
  Serial.print(temp);
  Serial.println("°C");
}`
        }
      ]
    },
    {
      id: "miot-exp3",
      title: "Exp 3: ESP8266 / ESP32 WiFi Station Connection",
      file: "wifi_client.ino",
      category: "Wireless Networking",
      description: "Connects ESP device to a local WiFi network and retrieves assigned local IP address.",
      tags: ["WiFi", "ESP32", "ESP8266", "IoT"],
      codeFiles: [
        {
          filename: "wifi_client.ino",
          language: "cpp",
          code: `#include <WiFi.h> // Use #include <ESP8266WiFi.h> for ESP8266

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Network tasks
}`
        }
      ]
    },
    {
      id: "miot-exp4",
      title: "Exp 4: Ultrasonic Sensor (HC-SR04) Distance Measurement",
      file: "ultrasonic_distance.ino",
      category: "Sensors & Measurement",
      description: "Measures distance in centimeters by triggering an ultrasonic pulse and calculating round-trip echo duration.",
      tags: ["HC-SR04", "Distance", "Ultrasonic", "PulseIn"],
      codeFiles: [
        {
          filename: "ultrasonic_distance.ino",
          language: "cpp",
          code: `const int trigPin = 9;
const int echoPin = 10;

long duration;
int distance;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  delay(500);
}`
        }
      ]
    }
  ]
};
