// Experiment 2B: Simple program for Analog read using sensor
// Hardware: Light Dependent Resistor (LDR) on Pin A0 (CN11)

void setup() { 
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
}
