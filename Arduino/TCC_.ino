#include "EmonLib.h"
#include <Wire.h>

int PinoSensorLuz = A0;
int ValorLuz = 0;

#define pinZC 2
#define pinDIM 4

volatile long lum = 50;

int Counter = 5;
char UARTBUFF[1] = {' '};
int PinoLed = 10;
volatile byte interrupt = LOW;

void zeroCross()
{
   if (interrupt){
    if (lum >= 100) lum = 90;
    if (lum <= 0) lum = 10;

    long t1 = 8200L * (100L-lum) / 100L;
    delayMicroseconds(t1);
    digitalWrite(pinDIM, HIGH);
    delayMicroseconds(6);
    digitalWrite(pinDIM, LOW);
   }
   
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  
  pinMode(PinoLed, OUTPUT);

  pinMode (pinDIM, OUTPUT);
  pinMode (pinZC, INPUT);
  attachInterrupt(digitalPinToInterrupt(pinZC), zeroCross, RISING);
  
}

void loop() {
  if (interrupt){
    if (strcmp(UARTBUFF[1], 'A') == 0){
        ValorLuz = analogRead(PinoSensorLuz);
        ValorLuz = (1024 - ValorLuz);
        if (ValorLuz < 0){
           ValorLuz = ValorLuz * -1;
        }
        lum = map(ValorLuz, 0, 1023, 10, 90);
        Serial.println("Auto!");
    }
    else{
      if (strcmp(UARTBUFF[1], 'Z') == 0){
        Counter = 5;
        Serial.println(String(Counter));
      }
      else{
        if ((String(UARTBUFF[1])).toInt() != 0){
          Counter = (String(UARTBUFF[1])).toInt();
          Serial.println(String(Counter)); 
        }     
      }
      Serial.println("Manual!");
      lum = map(Counter, 1, 9, 10, 90);
   }
  }
  
  delay(1000);
}

void serialEvent(){
  static unsigned short addr = 0;
  addr = 0;
  char data;
  while (Serial.available()){
    data = (char)Serial.read();
    Serial.write(data);
    addr++;
    UARTBUFF[addr] = data;
  }
  interruptor();
}

void interruptor(){
  if (strcmp(UARTBUFF[1], 'P') == 0){
    interrupt = HIGH;
    Serial.println("LIGAR!");
    digitalWrite(PinoLed, HIGH);
  }
  if (strcmp(UARTBUFF[1], 'D') == 0){
    interrupt = LOW;
    Serial.println("DESLIGAR!");
    digitalWrite(PinoLed, LOW);
  }
}
