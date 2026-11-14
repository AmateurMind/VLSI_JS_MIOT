// Experiment 2A: Simple Program for Digital Read / Write using LED and Switch
// Hardware: Arduino Uno, Micro-IoT sensor actuator board
// LEDs: Pin 0, 1, 2, 4 | Switches: Pin 10, 11, 12, 13

void setup() { 
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
 
  if (digitalRead(10) == 0) { 
    digitalWrite(0, LOW); 
    delay(1000); 
  } else {
    digitalWrite(0, HIGH);  
  }
 
  if (digitalRead(11) == 0) { 
    digitalWrite(1, LOW); 
    delay(1000); 
  } else {
    digitalWrite(1, HIGH);  
  }
 
  if (digitalRead(12) == 0) { 
    digitalWrite(2, LOW); 
    delay(1000); 
  } else {
    digitalWrite(2, HIGH);  
  }
 
  if (digitalRead(13) == 0) { 
    digitalWrite(4, LOW); 
    delay(1000); 
  } else {
    digitalWrite(4, HIGH);  
  }
}
