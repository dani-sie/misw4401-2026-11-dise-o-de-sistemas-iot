# Entrega 1 - Semana 2

## Introduccion
El desarrollo de soluciones de Internet de las Cosas (IoT) se fundamenta en la correcta integracion de la capa de dispositivos, encargada de capturar variables fisicas del entorno y transmitirlas hacia plataformas de procesamiento y visualizacion. En el laboratorio previo se implemento un prototipo con NodeMCU ESP8266 que sensaba temperatura y humedad y enviaba los datos mediante protocolos de red a una plataforma web. Esta entrega extiende ese trabajo para incorporar la intensidad luminica como nueva variable: se caracteriza la magnitud, se comparan alternativas de sensado, se describe la integracion hardware y software del sensor elegido y se documentan los resultados y lecciones aprendidas.

## Caracterizacion de la variable fisica: intensidad luminica
La intensidad luminica (iluminancia) describe la cantidad de luz visible que incide sobre una superficie; se mide en lux (lx), equivalente al flujo luminoso repartido sobre un metro cuadrado. Valores bajos (<10 lx) representan ambientes oscuros, oficinas tipicas se ubican entre 300 y 500 lx y la luz solar directa supera los 10 000 lx. En sistemas IoT su monitoreo habilita control automatico de luminarias, optimizacion energetica, deteccion dia/noche y correlacion con otras variables ambientales. Para este laboratorio se considera de baja dinamica, por lo que basta un sensor economico con frecuencia de muestreo moderada.

## Seleccion del dispositivo de sensado
Se eligio el sensor GL5516, una fotoresistencia (LDR) cuya resistencia disminuye cuando aumenta la luz incidente. Mediante un divisor de voltaje se obtiene una senal analogica que el NodeMCU lee en el pin A0, evitando buses adicionales o librerias especificas. El GL5516 es de bajo costo, disponible en el kit y permite captar variaciones relativas suficientes para demostrar la integracion de una nueva variable en la arquitectura IoT. Aunque no entrega lux calibrados, su simplicidad favorece la replica del experimento y mantiene el foco en el flujo de datos (adquisicion, procesamiento basico y transmision MQTT) exigido por el reto.

## Extension de la capa de dispositivos
La ampliacion del prototipo incluyo ajustes de hardware y software:

### Integracion del sensor GL5516 al hardware
- Se mantuvo la placa NodeMCU ESP8266, el LED en D1 con resistencia de 220 Ohm y el DHT11 en D2 con resistencia de 10 kOhm.
- El GL5516 se conecto como divisor: terminal a 3V3, terminal conjunto a A0 y a una resistencia fija de 10 kOhm a GND. Asi el voltaje en A0 refleja la iluminacion y convive con los demas sensores.

### Adquisicion de la nueva variable
- El programa lee periodicamente el pin A0 y almacena el valor en una variable dedicada. Al estar integrado en el ciclo principal, respeta la cadencia del resto de mediciones sin interferir con temperatura y humedad.
- Las lecturas analogicas se procesan para obtener un valor relativo (sin unidad) acorde con los puntos de calibracion establecidos durante las pruebas (<40 lx oscuro, ~210 lx iluminacion natural filtrada, ~470 lx luminarias encendidas).

### Transmision de la variable "luminosidad" a la plataforma web
- Tras cada lectura, el valor se publica mediante el protocolo MQTT usando el topico luminosidad, reutilizando el mismo flujo de mensajes implementado en el tutorial base. Esto mantiene la estructura de comunicacion y permite que la plataforma identifique la nueva variable.

### Pruebas de transmision de datos
- Se verifico via monitor serial que la lectura analogica se actualiza periodicamente y que el valor enviado corresponde a la medicion mas reciente.
- En la plataforma web del laboratorio se visualizaron los cambios generados al variar la iluminacion (exposicion directa vs. sombreado), confirmando la correcta recepcion del topico luminosidad.

### Inconvenientes y soluciones
1. El sensor de humedad dejo de responder al agregar la lectura analogica: se resolvio aumentando los retardos entre lecturas para que cada sensor dispusiera del tiempo necesario.
2. Hubo desconexiones intermitentes por alimentacion insuficiente: se estabilizo la fuente y se revisaron los cables USB.
3. Un integrante no lograba conectar a la red WiFi; tras diagnosticar con un script de escaneo se descubrio que la red disponible era solo de 5 GHz (no soportada por el ESP8266). Se solicito una placa con antena compatible con redes adecuadas.

## Repositorio del proyecto
El codigo fuente actualizado se encuentra en https://github.com/dani-sie/misw4401-2026-11-dise-o-de-sistemas-iot, carpeta entregas/semana01, donde se evidencian la integracion del GL5516, la adquisicion de la variable y su publicacion en el topico luminosidad.

## Conclusiones
- Se extendio el prototipo para incluir la intensidad luminica sin aumentar significativamente la complejidad de hardware, reforzando conceptos de adquisicion analogica y temporizacion.
- El uso del GL5516 permitio centrarse en el flujo end-to-end (sensar-procesar-transmitir-vizualizar) y en la resolucion de problemas reales de conectividad y alimentacion.
- La arquitectura demostrada es flexible y deja sentadas las bases para incorporar sensores digitales de mayor precision o reglas de automatizacion basadas en luminosidad en iteraciones futuras.
