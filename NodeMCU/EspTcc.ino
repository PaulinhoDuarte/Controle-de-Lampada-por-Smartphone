// Inclusão das bibliotecas
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <SoftwareSerial.h> //Included SoftwareSerial Library
#include "EmonLib.h"
#include <Wire.h>

// Configração do WiFi
const char* ssid = "Rubens";  // SSID Wifi
const char* password = "carijo2018";  // Senha Wifi

IPAddress ip(192, 168, 1, 100);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(225, 225, 225, 0);

// Variáveis de Server e Status do LED
ESP8266WebServer server(80);
int LEDstatus = 5;
int Counter = 5;
bool Ligado = LOW;
String Post = "";
String str;
double SendCorrente = 0;

double PinSensorCorrente = A0;
EnergyMonitor SCT013;

void setup() {
  // Inicia Serial e LED
  Serial.begin(9600);
  Serial1.begin(9600);

  // Calibração sensor Corrente
  SCT013.current(PinSensorCorrente, 121.21);

  // Inicia Conexão WiFi
  WiFi.config(ip, gateway, subnet);
  WiFi.begin(ssid, password);
  Serial.println("");

  // Aguarda Conexão e Informa IP
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Rede WiFi: ");
  Serial.println(ssid);
  Serial.print("Endereço IP: ");
  Serial.println(WiFi.localIP());
  delay(100);

  // Configura Handles do Server e Inicia Server
  server.on("/", handle_OnConnect);
  server.on("/ledon", handle_ledon);
  server.on("/ledoff", handle_ledoff);
  server.on("/auto", handle_auto);
  server.on("/manual", handle_manual);
  server.on("/countplus", handle_countplus);
  server.on("/countsub", handle_countsub);
  server.on("/corrente", handle_corrente);
  server.onNotFound(handle_NotFound);
  server.begin();
  Serial.println("Servidor HTTP iniciado!");

}

void loop() {
  server.handleClient();   // Faz o Handle
  double Irms = SCT013.calcIrms(1480);
  if (Ligado){
    SendCorrente = Irms+SendCorrente;
  }
  Serial.print("Soma Corrente: ");
  Serial.println(SendCorrente);
  delay(1000);
}

// FUNÇÕES HANDLE PARA HTML SERVER

void handle_OnConnect() {
  Ligado = LOW;
  Serial1.println("D");
  server.send(200);
}

void handle_ledon() {
  Ligado = HIGH;
  Serial1.println("P");
  server.send(200);
}

void handle_ledoff() {
  Ligado = LOW;
  Serial1.println("D");
  server.send(200);
}

void handle_auto() {
  Serial1.println("A");
  server.send(200);
}

void handle_manual() {
  Serial1.println("Z");
  server.send(200);
}

void handle_countplus() {
  Post = server.arg(0);
  int to = Post.length() - 2;
  Counter = (Post.substring(20, to)).toInt();
  Counter = Counter + 1;
  Serial1.println(String(Counter));
  server.send(200);
}

void handle_countsub() {
  Post = server.arg(0);
  int to = Post.length() - 2;
  Counter = (Post.substring(20, to)).toInt();
  Counter = Counter - 1;
  Serial1.println(String(Counter));
  server.send(200);
}

void handle_corrente() {
  server.send(200, "text/plain", String(SendCorrente));
}

void handle_NotFound() {
  server.send(404, "text/plain", "Not found");
}
