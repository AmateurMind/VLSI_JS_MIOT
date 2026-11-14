// Experiment 5: MQTT and sending sensor data to cloud
// Aim: Interface DHT11 sensor with Arduino and send Temperature and Humidity to ThingSpeak cloud using MQTT.
// Interface: DHT11 on Pin A1 (CN8), ESP8266_Rx on Pin 8, ESP8266_Tx on Pin 7
// Libraries: WiFiEsp, PubSubClient, dht

#include "WiFiEsp.h" 
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
    Serial.print("Attempting to connect to WPA SSID: "); 
    Serial.println(wifi_ssid); 
    status = WiFi.begin(wifi_ssid, wifi_password); 
  } 
  Serial.println("You're connected to the network"); 
  Serial.println("WiFi connected"); 
  Serial.println("IP address: "); 
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
    Serial.print("Topic is: "); 
    Serial.println(mqtt_publish_topic); 
  } 
 
  if (client.connected()) { 
    Serial.print("Sending payload: "); 
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
}

