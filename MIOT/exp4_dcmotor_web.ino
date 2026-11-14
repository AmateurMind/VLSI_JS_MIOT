// Experiment 4: IoT based DC motor interfacing using Arduino
// Aim: DC motor control using WEB.
// Interface: DC motor (Relay) on Pin 9, ESP8266_Rx on Pin 8, ESP8266_Tx on Pin 7
// Library required: WiFiEsp

#include "WiFiEsp.h" 
 
// Emulate Serial1 on pins 8/7 if not present 
#ifndef HAVE_HWSERIAL1 
#include "SoftwareSerial.h" 
SoftwareSerial Serial1(8, 7); // RX, TX 
#endif 
 
char ssid[] = "YOUR_WIFI_SSID";        // your network SSID (name) 
char pass[] = "YOUR_WIFI_PASSWORD";    // your network password 
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
  Serial.println(); 
  Serial.print("To see this page in action, open a browser to http://"); 
  Serial.println(ip); 
  Serial.println(); 
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
  client.println("<br>"); 
  client.println("<br>"); 
   
  client.println("Click <a href=\"/H\">here</a> turn the DC Motor on<br>"); 
  client.println("Click <a href=\"/L\">here</a> turn the DC Motor off<br>"); 
  client.println(); 
} 
 
void setup() { 
  Serial.begin(115200);   // initialize serial for debugging 
  Serial1.begin(9600);    // initialize serial for ESP module 
  WiFi.init(&Serial1);    // initialize ESP module 
 
  pinMode(9, OUTPUT); 
  digitalWrite(9, 0); 
     
  if (WiFi.status() == WL_NO_SHIELD) { 
    Serial.println("WiFi shield not present"); 
    while (true); 
  } 
 
  while (status != WL_CONNECTED) { 
    Serial.print("Attempting to connect to WPA SSID: "); 
    Serial.println(ssid); 
    status = WiFi.begin(ssid, pass); 
  } 
 
  Serial.println("You're connected to the network"); 
  printWifiStatus(); 
  server.begin(); 
} 
 
void loop() { 
  WiFiEspClient client = server.available(); 
 
  if (client) { 
    Serial.println("New client"); 
    buf.init(); 
    while (client.connected()) { 
      if (client.available()) { 
        char c = client.read(); 
        buf.push(c); 
 
        if (buf.endsWith("\r\n\r\n")) { 
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
    Serial.println("Client disconnected"); 
  } 
}

