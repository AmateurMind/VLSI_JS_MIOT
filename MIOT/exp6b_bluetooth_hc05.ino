// Experiment 6B: Interfacing Bluetooth to Arduino
// Aim: Interfacing an HC-05 Bluetooth module to Arduino and communicating using Bluetooth terminal application on Android phone.
// Interface: HC-05 Rx on Pin 8, Tx on Pin 7, LEDs on Pin 0, 1, 2, 4

#include <SoftwareSerial.h> 
 
#define LED1 0 
#define LED2 1 
#define LED3 2 
#define LED4 4 
 
/* Create object named bt of the class SoftwareSerial */  
SoftwareSerial bt(8, 7); /* (Rx, Tx) */   
 
void setup() { 
  bt.begin(9600);   /* Baud rate for software serial communication */ 
  Serial.begin(9600); /* Baud rate for serial monitor */ 
  Serial.println("Bluetooth Initialized"); 
  pinMode(LED1, OUTPUT); 
  pinMode(LED2, OUTPUT); 
  pinMode(LED3, OUTPUT); 
  pinMode(LED4, OUTPUT); 
} 
 
void loop() { 
  char input; 
  if (bt.available()) /* If data is available on serial port */ 
  { 
    input = bt.read(); 
    Serial.write(input); /* Print character received onto the serial monitor */ 
   
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
}

