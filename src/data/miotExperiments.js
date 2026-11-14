export const miotExperiments = [
  {
    id: "miot-exp2a",
    title: "Exp 2A: Digital Read/Write using LED and Switch",
    file: "exp2a_led_switch.ino",
    category: "GPIO & Digital I/O",
    description: "Simple program for digital read and write to control LEDs when push switches are pressed using Arduino UNO and Micro-IoT sensor actuator board.",
    tags: ["DigitalRead", "DigitalWrite", "LED", "Switch"],
    codeFiles: [
      {
        filename: "exp2a_led_switch.ino",
        language: "cpp",
        code: `void setup() { 
  // put your setup code here, to run once: 
  pinMode(0, OUTPUT); 
  pinMode(1, OUTPUT); 
  pinMode(2, OUTPUT); 
  pinMode(4, OUTPUT); 
  pinMode(10, INPUT); 
  pinMode(11, INPUT); 
  pinMode(12, INPUT); 
  pinMode(13, INPUT); 
} 
 
void loop() { 
  // put your main code here, to run repeatedly: 
  digitalWrite(0, HIGH);          
  digitalWrite(1, HIGH);         
  digitalWrite(2, HIGH);        
  digitalWrite(4, HIGH);          
 
  if(digitalRead(10) == 0) { 
    digitalWrite(0, LOW); 
    delay(1000); 
  } else {
    digitalWrite(0, HIGH);  
  }
 
  if(digitalRead(11) == 0) { 
    digitalWrite(1, LOW); 
    delay(1000); 
  } else {
    digitalWrite(1, HIGH);  
  }
 
  if(digitalRead(12) == 0) { 
    digitalWrite(2, LOW); 
    delay(1000); 
  } else {
    digitalWrite(2, HIGH);  
  }
 
  if(digitalRead(13) == 0) { 
    digitalWrite(4, LOW); 
    delay(1000); 
  } else {
    digitalWrite(4, HIGH);  
  }
}`
      }
    ]
  },
  {
    id: "miot-exp2b",
    title: "Exp 2B: Analog Read using LDR Sensor",
    file: "exp2b_ldr_analog.ino",
    category: "Analog I/O & ADC",
    description: "Reads analog values of ambient light intensity using an LDR connected to pin A0 and prints readings to Serial Monitor.",
    tags: ["AnalogRead", "LDR", "ADC", "Serial"],
    codeFiles: [
      {
        filename: "exp2b_ldr_analog.ino",
        language: "cpp",
        code: `void setup() { 
  // put your setup code here, to run once: 
  Serial.begin(9600); 
  Serial.println("Light intensity using LDR"); 
} 
 
void loop() { 
  // put your main code here, to run repeatedly: 
  unsigned int val; 
  val = analogRead(A0); 
  Serial.println(val); 
  delay(500); 
}`
      }
    ]
  },
  {
    id: "miot-exp3a",
    title: "Exp 3A: Interfacing DHT11 Temperature & Humidity Sensor",
    file: "exp3a_dht11.ino",
    category: "Sensors & Telemetry",
    description: "Interfaces DHT11 sensor with Arduino on pin A1 to read and display temperature (°C) and humidity (%) on Serial Monitor.",
    tags: ["DHT11", "Temperature", "Humidity", "Sensor"],
    codeFiles: [
      {
        filename: "exp3a_dht11.ino",
        language: "cpp",
        code: `#include <dht.h> 
 
dht DHT; 
 
#define DHT11_PIN A1 
 
void setup() { 
  Serial.begin(9600); 
  Serial.println(); 
  Serial.println("Type,\\tHumidity (%),\\tTemperature (C)"); 
} 
 
void loop() { 
  // READ DATA 
  Serial.print("DHT11, \\t"); 
  int chk = DHT.read11(DHT11_PIN); 
  // DISPLAY DATA 
  Serial.print(DHT.humidity, 1); 
  Serial.print(",\\t"); 
  Serial.println(DHT.temperature, 1); 
 
  delay(2000); 
}`
      }
    ]
  },
  {
    id: "miot-exp3b",
    title: "Exp 3B: Interfacing Relay & Buzzer",
    file: "exp3b_relay.ino",
    category: "Actuators",
    description: "Controls and toggles an electromechanical relay or buzzer connected to digital pin 9 at 1-second intervals.",
    tags: ["Relay", "Buzzer", "DigitalWrite", "Actuator"],
    codeFiles: [
      {
        filename: "exp3b_relay.ino",
        language: "cpp",
        code: `void setup() { 
  // put your setup code here, to run once: 
  pinMode(9, OUTPUT); 
  digitalWrite(9, HIGH); 
} 
 
void loop() { 
  // put your main code here, to run repeatedly: 
  digitalWrite(9, LOW); 
  delay(1000); 
  digitalWrite(9, HIGH); 
  delay(1000); 
}`
      }
    ]
  },
  {
    id: "miot-exp4",
    title: "Exp 4: IoT Based DC Motor Control via Web",
    file: "exp4_dcmotor_web.ino",
    category: "IoT & Web Server",
    description: "Controls a DC Motor via web browser HTTP requests using ESP8266 WiFi module running as a local web server on port 80.",
    tags: ["ESP8266", "WiFiEsp", "DC Motor", "Web Server"],
    codeFiles: [
      {
        filename: "exp4_dcmotor_web.ino",
        language: "cpp",
        code: `#include "WiFiEsp.h" 
 
// Emulate Serial1 on pins 8/7 if not present 
#ifndef HAVE_HWSERIAL1 
#include "SoftwareSerial.h" 
SoftwareSerial Serial1(8, 7); // RX, TX 
#endif 
 
char ssid[] = "YOUR_WIFI_SSID";            // your network SSID (name) 
char pass[] = "YOUR_WIFI_PASSWORD";        // your network password 
int status = WL_IDLE_STATUS; 
 
int DCMotorStatus = LOW; 
WiFiEspServer server(80); 
RingBuffer buf(8); 
 
void printWifiStatus() { 
  Serial.print("SSID: "); 
  Serial.println(WiFi.SSID()); 
  IPAddress ip = WiFi.localIP(); 
  Serial.print("IP Address: "); 
  Serial.println(ip); 
  Serial.print("Open browser to: http://"); 
  Serial.println(ip); 
} 
 
void sendHttpResponse(WiFiEspClient client) { 
  client.println("HTTP/1.1 200 OK"); 
  client.println("Content-type:text/html"); 
  client.println(); 
  client.print("The DC Motor is : "); 
  if (DCMotorStatus == 0) { 
    client.print("OFF"); 
  } else { 
    client.print("ON"); 
  } 
  client.println("<br><br>"); 
  client.println("Click <a href=\\"/H\\">here</a> to turn DC Motor ON<br>"); 
  client.println("Click <a href=\\"/L\\">here</a> to turn DC Motor OFF<br>"); 
  client.println(); 
} 
 
void setup() { 
  Serial.begin(115200);   
  Serial1.begin(9600);    
  WiFi.init(&Serial1);    
 
  pinMode(9, OUTPUT); 
  digitalWrite(9, 0); 
     
  if (WiFi.status() == WL_NO_SHIELD) { 
    Serial.println("WiFi shield not present"); 
    while (true); 
  } 
 
  while (status != WL_CONNECTED) { 
    Serial.print("Connecting to SSID: "); 
    Serial.println(ssid); 
    status = WiFi.begin(ssid, pass); 
  } 
 
  Serial.println("Connected to network"); 
  printWifiStatus(); 
  server.begin(); 
} 
 
void loop() { 
  WiFiEspClient client = server.available(); 
  if (client) { 
    buf.init(); 
    while (client.connected()) { 
      if (client.available()) { 
        char c = client.read(); 
        buf.push(c); 
 
        if (buf.endsWith("\\r\\n\\r\\n")) { 
          sendHttpResponse(client); 
          break; 
        } 
 
        if (buf.endsWith("GET /H")) { 
          Serial.println("Turn DC Motor ON"); 
          DCMotorStatus = HIGH; 
          digitalWrite(9, HIGH); 
        } else if (buf.endsWith("GET /L")) { 
          Serial.println("Turn DC Motor OFF"); 
          DCMotorStatus = LOW; 
          digitalWrite(9, LOW); 
        } 
      } 
    } 
    client.stop(); 
  } 
}`
      }
    ]
  },
  {
    id: "miot-exp5",
    title: "Exp 5: MQTT and Sending Sensor Data to ThingSpeak Cloud",
    file: "exp5_mqtt_thingspeak.ino",
    category: "Cloud & MQTT",
    description: "Reads temperature and humidity from DHT11 and publishes data to ThingSpeak cloud channels over MQTT protocol using PubSubClient.",
    tags: ["MQTT", "ThingSpeak", "Cloud", "PubSubClient", "DHT11"],
    codeFiles: [
      {
        filename: "exp5_mqtt_thingspeak.ino",
        language: "cpp",
        code: `#include "WiFiEsp.h" 
#include "SoftwareSerial.h" 
#include <PubSubClient.h> 
#include <dht.h> 
 
dht DHT; 
SoftwareSerial Serial1(8, 7); // RX, TX 
 
#define DHT11_PIN A1 
 
char* wifi_ssid = "YOUR_WIFI_SSID"; 
char* wifi_password = "YOUR_WIFI_PASSWORD"; 
 
char* mqtt_server = "mqtt3.thingspeak.com"; 
int mqtt_port = 1883; 
char* mqtt_clientID = "INSERT_CLIENT_ID"; 
char* mqtt_username = "INSERT_USERNAME"; 
char* mqtt_password = "INSERT_PASSWORD"; 
 
char* mqtt_publish_topic = "channels/YOUR_CHANNEL_ID/publish"; 
 
WiFiEspClient espClient; 
PubSubClient client(mqtt_server, mqtt_port, espClient); 
int status = WL_IDLE_STATUS; 
 
void setup_wifi() { 
  Serial1.begin(9600); 
  WiFi.init(&Serial1); 
  delay(10); 
  while (status != WL_CONNECTED) { 
    Serial.print("Connecting to: "); 
    Serial.println(wifi_ssid); 
    status = WiFi.begin(wifi_ssid, wifi_password); 
  } 
  Serial.println("WiFi connected!"); 
  Serial.print("IP address: "); 
  Serial.println(WiFi.localIP()); 
} 
 
void setup() { 
  Serial.begin(115200); 
  setup_wifi(); 
} 
 
void loop() { 
  static int counter = 0; 
  int chk = DHT.read11(DHT11_PIN); 
   
  String payload = "field1="; 
  payload += DHT.temperature; 
  payload += "&field2="; 
  payload += DHT.humidity; 
  payload += "&status=MQTTPUBLISH"; 
 
  if (client.connect(mqtt_clientID, mqtt_username, mqtt_password)) { 
    Serial.println("Connected to MQTT broker"); 
    Serial.print("Publishing to: "); 
    Serial.println(mqtt_publish_topic); 
  } 
 
  if (client.connected()) { 
    Serial.print("Payload: "); 
    Serial.println(payload); 
    if (client.publish(mqtt_publish_topic, (char*) payload.c_str())) { 
      Serial.println("Publish OK"); 
    } else { 
      Serial.println("Publish failed"); 
    } 
    client.disconnect(); 
  } 
  ++counter; 
  delay(20000); 
}`
      }
    ]
  },
  {
    id: "miot-exp6a",
    title: "Exp 6A: Bulb Status & Control through Web",
    file: "exp6a_bulb_web.ino",
    category: "IoT & Web Server",
    description: "Hosts a web page via ESP8266 server to read the status and toggle an electrical bulb or relay remotely via HTTP GET.",
    tags: ["Web Server", "Bulb Control", "ESP8266", "Relay"],
    codeFiles: [
      {
        filename: "exp6a_bulb_web.ino",
        language: "cpp",
        code: `#include "WiFiEsp.h" 
 
#ifndef HAVE_HWSERIAL1 
#include "SoftwareSerial.h" 
SoftwareSerial Serial1(8, 7); // RX, TX 
#endif 
 
char ssid[] = "YOUR_WIFI_SSID"; 
char pass[] = "YOUR_WIFI_PASSWORD"; 
int status = WL_IDLE_STATUS; 
int ledStatus = LOW; 
 
WiFiEspServer server(80); 
RingBuffer buf(8); 
 
void printWifiStatus() { 
  Serial.print("SSID: "); 
  Serial.println(WiFi.SSID()); 
  IPAddress ip = WiFi.localIP(); 
  Serial.print("IP Address: "); 
  Serial.println(ip); 
  Serial.print("Open: http://"); 
  Serial.println(ip); 
} 
 
void sendHttpResponse(WiFiEspClient client) { 
  client.println("HTTP/1.1 200 OK"); 
  client.println("Content-type:text/html"); 
  client.println(); 
  client.print("The BULB is : "); 
  if (ledStatus == 0) { 
    client.print("OFF"); 
  } else { 
    client.print("ON"); 
  } 
  client.println("<br><br>"); 
  client.println("Click <a href=\\"/H\\">here</a> to turn the BULB ON<br>"); 
  client.println("Click <a href=\\"/L\\">here</a> to turn the BULB OFF<br>"); 
  client.println(); 
} 
 
void setup() { 
  Serial.begin(115200); 
  Serial1.begin(9600); 
  WiFi.init(&Serial1); 
 
  pinMode(9, OUTPUT); 
  digitalWrite(9, 0); 
 
  while (status != WL_CONNECTED) { 
    Serial.print("Connecting to: "); 
    Serial.println(ssid); 
    status = WiFi.begin(ssid, pass); 
  } 
  printWifiStatus(); 
  server.begin(); 
} 
 
void loop() { 
  WiFiEspClient client = server.available(); 
  if (client) { 
    buf.init(); 
    while (client.connected()) { 
      if (client.available()) { 
        char c = client.read(); 
        buf.push(c); 
 
        if (buf.endsWith("\\r\\n\\r\\n")) { 
          sendHttpResponse(client); 
          break; 
        } 
 
        if (buf.endsWith("GET /H")) { 
          Serial.println("Turn bulb ON"); 
          ledStatus = HIGH; 
          digitalWrite(9, HIGH); 
        } else if (buf.endsWith("GET /L")) { 
          Serial.println("Turn bulb OFF"); 
          ledStatus = LOW; 
          digitalWrite(9, LOW); 
        } 
      } 
    } 
    client.stop(); 
  } 
}`
      }
    ]
  },
  {
    id: "miot-exp6b",
    title: "Exp 6B: Interfacing Bluetooth (HC-05) to Arduino",
    file: "exp6b_bluetooth_hc05.ino",
    category: "Wireless & Bluetooth",
    description: "Interfaces an HC-05 Bluetooth module via SoftwareSerial to receive character commands from Android Bluetooth Terminal app to turn devices ON/OFF.",
    tags: ["HC-05", "Bluetooth", "SoftwareSerial", "UART"],
    codeFiles: [
      {
        filename: "exp6b_bluetooth_hc05.ino",
        language: "cpp",
        code: `#include <SoftwareSerial.h> 
 
#define LED1 0 
#define LED2 1 
#define LED3 2 
#define LED4 4 
 
SoftwareSerial bt(8, 7); // (Rx, Tx) 
 
void setup() { 
  bt.begin(9600); 
  Serial.begin(9600); 
  Serial.println("Bluetooth Initialized"); 
  pinMode(LED1, OUTPUT); 
  pinMode(LED2, OUTPUT); 
  pinMode(LED3, OUTPUT); 
  pinMode(LED4, OUTPUT); 
} 
 
void loop() { 
  if (bt.available()) { 
    char input = bt.read(); 
    Serial.write(input); 
    
    if (input == '1') { 
      Serial.println("Device OFF"); 
      digitalWrite(LED1, HIGH); 
      digitalWrite(LED2, HIGH); 
      digitalWrite(LED3, HIGH); 
      digitalWrite(LED4, HIGH); 
    } 
    if (input == '0') { 
      Serial.println("Device ON");   
      digitalWrite(LED1, LOW); 
      digitalWrite(LED2, LOW); 
      digitalWrite(LED3, LOW); 
      digitalWrite(LED4, LOW); 
    } 
  } 
}`
      }
    ]
  },
  {
    id: "miot-exp7",
    title: "Exp 7: Raspberry Pi GPIO LED Control",
    file: "led_raspberrypi.py",
    category: "Raspberry Pi & Python",
    description: "Controls and toggles GPIO output pins using Python RPi.GPIO on Raspberry Pi with clean interrupt handling.",
    tags: ["RaspberryPi", "Python", "GPIO", "RPi.GPIO"],
    codeFiles: [
      {
        filename: "led_raspberrypi.py",
        language: "python",
        code: `# Raspberry Pi Experimentation with MicroIoT
# Command: python led.py

import time
try:
    import RPi.GPIO as GPIO
except ImportError:
    print("RPi.GPIO not installed on non-Raspberry Pi system")
    GPIO = None

LED_PIN = 18

def setup():
    if GPIO:
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(LED_PIN, GPIO.OUT)

def loop():
    while True:
        if GPIO:
            GPIO.output(LED_PIN, GPIO.HIGH)
            print("LED ON")
            time.sleep(1)
            GPIO.output(LED_PIN, GPIO.LOW)
            print("LED OFF")
            time.sleep(1)
        else:
            print("Simulating LED Blink (1s interval)...")
            time.sleep(1)

if __name__ == '__main__':
    setup()
    try:
        loop()
    except KeyboardInterrupt:
        if GPIO:
            GPIO.cleanup()
        print("\\nExiting cleanly")`
      }
    ]
  }
];
