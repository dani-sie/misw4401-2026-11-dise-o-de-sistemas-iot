#include <ESP8266WiFi.h> 
#include "DHT.h"
#include <math.h>

#define DHTTYPE DHT11

const char* ssid = "SinisterraArias";
const char* password = "Adr1anasa";

// LED EN D1
#define LED_PIN D1
#define LED_ON  HIGH
#define LED_OFF LOW
bool ledIsOn = false;   

// DHT
uint8_t DHTPin = D2; 
DHT dht(DHTPin, DHTTYPE);

float Temperature = NAN;
float Humidity = NAN;

unsigned long lastDhtRead = 0;
const unsigned long DHT_INTERVAL_MS = 2000; // DHT11: cada 2s

// LDR (GL5516)
#define LDR_PIN A0
int ldrRaw = 0;
int lightPercent = 0;

// Calibración
int LDR_DARK   = 500;  
int LDR_BRIGHT = 1023;  

WiFiServer server(80);

int clampInt(int x, int lo, int hi) {
  if (x < lo) return lo;
  if (x > hi) return hi;
  return x;
}

void setup() {
  Serial.begin(115200);
  delay(1000);

  // LED
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LED_OFF);

  // DHT
  dht.begin();

  // WiFi
  IPAddress local_IP(192, 168, 1, 222);   // la IP fija
  IPAddress gateway(192, 168, 1, 1);     // gateway router
  IPAddress subnet(255, 255, 255, 0);
  IPAddress dns1(8, 8, 8, 8);
  IPAddress dns2(1, 1, 1, 1);

  WiFi.setSleepMode(WIFI_NONE_SLEEP);  // reduce latencias raras
  WiFi.setOutputPower(10.0);           // baja potencia TX (menos consumo)

  WiFi.disconnect(true);
  delay(200);

  WiFi.mode(WIFI_STA);
  WiFi.setAutoReconnect(true);
  WiFi.persistent(false);
  WiFi.config(local_IP, gateway, subnet, dns1, dns2);
  WiFi.begin(ssid, password);

  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  unsigned long t0 = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - t0 < 20000) {
    delay(500);
    Serial.print(".");
    yield();
  }
  Serial.println();

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("\nWiFi connected");
    Serial.println(WiFi.localIP());
    Serial.println(WiFi.gatewayIP());
    Serial.println(WiFi.subnetMask());
  } else {
    Serial.print("WiFi status = ");
    Serial.println((int)WiFi.status());
  }

  server.begin();
  Serial.println("Server started");

  Serial.print("Use this URL to connect: http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");
}

void loop() {

  static unsigned long lastReconnectTry = 0;
  if (WiFi.status() != WL_CONNECTED) {
    if (millis() - lastReconnectTry > 5000) {
      lastReconnectTry = millis();
      Serial.println("WiFi lost. Reconnecting...");
      WiFi.disconnect();
      WiFi.begin(ssid, password);
    }
    return; 
  }

  // Leer DHT cada 2s
  if (millis() - lastDhtRead >= DHT_INTERVAL_MS) {
    lastDhtRead = millis();

    float t = dht.readTemperature();
    float h = dht.readHumidity();

    if (!isnan(t)) Temperature = t;
    if (!isnan(h)) Humidity = h;
  }

  // Leer LDR (siempre)
  ldrRaw = analogRead(LDR_PIN);

  // Convertir a % (0 oscuro, 100 brillante)
  // Si tu divisor produce al revés, invierte DARK/BRIGHT
  lightPercent = map(ldrRaw, LDR_DARK, LDR_BRIGHT, 0, 100);
  lightPercent = clampInt(lightPercent, 0, 100);

  // Cliente web
  WiFiClient client = server.available();
  if (!client) return;

  unsigned long timeout = millis();
  while (!client.available() && millis() - timeout < 2000) { delay(1); yield(); }
  if (!client.available()) {
    client.stop();
    return;
  }

  String request = client.readStringUntil('\n');
  request.trim();
  client.flush();

  // Debug request
  Serial.println("REQ: " + request);

  if (request.indexOf("GET /favicon.ico") != -1) {
    client.println("HTTP/1.1 204 No Content");
    client.println("Connection: close");
    client.println();
    client.stop();
    return;
  }

  // Control LED
  if (request.indexOf("GET /LED=ON") != -1)  {
    digitalWrite(LED_PIN, LED_ON);
    ledIsOn = true;
  }
  if (request.indexOf("GET /LED=OFF") != -1) {
    digitalWrite(LED_PIN, LED_OFF);
    ledIsOn = false;
  }

  // Respuesta HTML
  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: text/html; charset=utf-8");
  client.println("Connection: close");
  client.println();
  client.println("<!DOCTYPE HTML><html><head>");
  client.println("<meta name='viewport' content='width=device-width, initial-scale=1'>");
  client.println("</head><body>");

  client.println("<h2>ESP8266 Dashboard</h2>");

  // LED
  client.print("<p><b>LED:</b> ");
  client.print(ledIsOn ? "ON" : "OFF");
  client.println("</p>");
  client.println("<p>");
  client.println("<a href='/LED=ON'><button>Turn ON</button></a> ");
  client.println("<a href='/LED=OFF'><button>Turn OFF</button></a>");
  client.println("</p>");

  client.println("<hr>");

  // Temperature
  client.print("<p><b>Temperature:</b> ");
  if (isnan(Temperature)) client.print("No data");
  else { client.print(Temperature); client.print(" &deg;C"); }
  client.println("</p>");

  // Humidity
  client.print("<p><b>Humidity:</b> ");
  if (isnan(Humidity)) client.print("No data");
  else { client.print(Humidity); client.print(" %"); }
  client.println("</p>");

  client.println("<hr>");

  // Light
  client.print("<p><b>Light raw:</b> ");
  client.print(ldrRaw);
  client.println("</p>");

  client.print("<p><b>Light %:</b> ");
  client.print(lightPercent);
  client.println("%</p>");

  client.println("</body></html>");
  client.stop();

  delay(1);
}
