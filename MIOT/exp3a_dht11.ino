// Experiment 3A: Interfacing sensor and Actuator – DHT11 Sensor
// Peripheral: DHT11 connected to Pin A1 (CN8)
// Library required: DHTlib

#include <dht.h> 
 
dht DHT; 
 
#define DHT11_PIN A1 
 
void setup() { 
  Serial.begin(9600); 
  Serial.println(); 
  Serial.println("Type,\tHumidity (%),\tTemperature (C)"); 
} 
 
void loop() { 
  // READ DATA 
  Serial.print("DHT11, \t"); 
  int chk = DHT.read11(DHT11_PIN); 

  // DISPLAY DATA 
  Serial.print(DHT.humidity, 1); 
  Serial.print(",\t"); 
  Serial.println(DHT.temperature, 1); 
 
  delay(2000); 
}

