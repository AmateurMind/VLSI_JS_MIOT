// Experiment 3B: Interfacing sensor and Actuator – Relays
// Aim: Interface a relay with Arduino and write a program to Toggle the relay.
// Peripheral: Relay / Buzzer on Pin 9

void setup() { 
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
}
