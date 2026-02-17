# Reporte - Prueba de Rendimiento MQTT (Semana 04)

Este reporte utiliza como insumo los resultados del tutorial de la capa de comunicacion (sesion) desarrollado durante la semana. El objetivo es realizar una prueba de rendimiento del broker MQTT para evaluar la escalabilidad del servicio, usando JMeter, y documentar: diseno de la prueba, configuracion de la herramienta, obtencion de resultados y analisis de resultados.

## Diseño de la prueba

**Objetivo.** Evaluar la escalabilidad del broker Mosquitto desplegado en la VM (puerto 8082, TLS y autenticación) midiendo:
- tasa de conexiones exitosas,
- throughput de mensajes (msg/s),
- latencia de publicación,
- tasa de errores.

**Entorno.**
- Broker: Mosquitto en Debian, TLS activo, ACL y usuarios configurados.
- Cliente de prueba: Apache JMeter con plugin MQTT (mqtt-jmeter).
- Red: GCP VPC con regla de firewall `tcp:8082`.
- Nota: No fue posible acceder a AWS Academy, por lo que el despliegue se realizó en una VM de Google Cloud (GCP).

**Variables controladas.**
- Protocol: SSL
- QoS: 0 y 1
- Payload: 256 B y 1024 B
- Ramp-up: 60 s
- Duración de prueba: 3 min por escenario

**Escenarios.**
1. **Conexiones concurrentes (solo connect).** 50, 100, 200 clientes.
2. **Publicación QoS 0.** 50, 100, 200 publishers a 1 msg/s, payload 256 B.
3. **Publicación QoS 1.** 100 publishers a 1 msg/s, payload 256 B.

**Métricas.**
- Throughput (msg/s) desde JMeter.
- Latencia promedio y p95 de Publish.
- % de errores.

## Configuración de la herramienta (JMeter + MQTT plugin)

**1) Instalar Java y JMeter**

```bash
sudo apt-get update
sudo apt-get install -y openjdk-17-jre

JMETER_VERSION=5.6.3
cd /opt
sudo curl -L -o apache-jmeter.tgz https://dlcdn.apache.org/jmeter/binaries/apache-jmeter-${JMETER_VERSION}.tgz
sudo tar -xzf apache-jmeter.tgz
sudo ln -s /opt/apache-jmeter-${JMETER_VERSION} /opt/jmeter
```

**2) Instalar MQTT JMeter Plugin**

El plugin `mqtt-jmeter` se instala copiando el JAR en `lib/ext` de JMeter.

```bash
cd /opt
sudo curl -L -o mqtt-xmeter.jar https://github.com/emqx/mqtt-jmeter/releases/download/v2.0.2/mqtt-xmeter-2.0.2-jar-with-dependencies.jar
sudo cp -f mqtt-xmeter.jar /opt/jmeter/lib/ext/
```

**3) (Opcional) Plugins Manager**

Para instalar plugins vía UI/CLI se puede usar Plugins Manager.

```bash
cd /opt/jmeter/lib/ext
sudo curl -L -o jmeter-plugins-manager.jar https://jmeter-plugins.org/get/
```

**4) Habilitar conteo de hilos en resultados**

Descomentar y poner `true` en `jmeter.properties`.

```bash
sudo sed -i 's/^#jmeter.save.saveservice.thread_counts=false/jmeter.save.saveservice.thread_counts=true/' /opt/jmeter/bin/jmeter.properties
```

**5) Configurar confianza TLS (truststore)**

```bash
sudo keytool -import -alias mosqca \
  -keystore /opt/jmeter/mqtt-ca.jks \
  -file /etc/mosquitto/ca_certificates/ca.crt \
  -storepass changeit -noprompt
```

**6) Descargar script de ejemplo y ajustar variables**

El repositorio del plugin incluye scripts de ejemplo (`SampleScripts`).

```bash
mkdir -p ~/jmeter
cd ~/jmeter
curl -L -o pubsub_unidirection.jmx https://raw.githubusercontent.com/emqx/mqtt-jmeter/master/SampleScripts/pubsub_unidirection.jmx
```

Editar el JMX para:
- `server` = IP publica del broker
- `port` = 8082
- `mqtt.protocol` = `SSL`
- `mqtt.user_name` y `mqtt.password`
- `mqtt.message_type_fixed_length` = 256 o 1024
- `mqtt.qos_level` = 0 o 1

## Obtención de resultados

**Ejecución headless (ejemplo):**

```bash
export JVM_ARGS=\"-Djavax.net.ssl.trustStore=/opt/jmeter/mqtt-ca.jks -Djavax.net.ssl.trustStorePassword=changeit\"
/opt/jmeter/bin/jmeter -n \
  -t ~/jmeter/pubsub_unidirection.jmx \
  -l ~/jmeter/resultados_qos0_100.jtl \
  -e -o ~/jmeter/reporte_qos0_100
```

**Reportes HTML (para evidencias):**
- `http://35.185.91.242:8001/reporte_qos0_50/index.html`
- <img width="1920" height="1850" alt="image" src="https://github.com/user-attachments/assets/ded49f42-dafc-4c4e-aa0e-bf53f44a93d9" />
- `http://35.185.91.242:8001/reporte_qos0_100/index.html`
- <img width="1920" height="1832" alt="image" src="https://github.com/user-attachments/assets/541ee19c-137a-4045-ac77-8391a9fd911a" />
- `http://35.185.91.242:8001/reporte_qos0_200/index.html`
- <img width="1920" height="1832" alt="image" src="https://github.com/user-attachments/assets/4d2e1f3a-8103-402a-92b9-3b9678465a28" />


**Resumen de resultados (completar):**

| Escenario | Conexiones | QoS | Payload | Throughput (msg/s) | Latencia promedio (ms) | p95 (ms) | % errores |
|---|---:|---:|---:|---:|---:|---:|---:|
| Pub | 50 | 0 | 256 | 26.02 | 6.64 | 28.49 | 0.0 |
| Pub | 100 | 0 | 256 | 51.63 | 5.79 | 31.99 | 0.0 |
| Pub | 200 | 0 | 256 | 102.84 | 7.02 | 51.99 | 0.0 |

## Analisis de resultados

**Observaciones principales:**
- El throughput crece casi linealmente al pasar de 50 a 200 clientes, sin errores.
- La latencia promedio se mantiene estable (≈6–7 ms), mientras el p95 aumenta con la carga (≈28 ms → 52 ms).
- No se observan fallos de conexión ni pérdidas (0% de errores) en los tres escenarios.

**Conclusiones:**
- El broker Mosquitto escala de forma estable hasta 200 clientes publicando a QoS 0 con payload de 256 B.
- El incremento de latencia p95 sugiere un costo incremental por carga, pero sigue en rangos aceptables para la prueba.
- Para cargas mayores, se recomienda aumentar CPU/RAM de la VM o distribuir carga (broker dedicado o balanceo).
