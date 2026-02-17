# Semana 04 - Broker MQTT (Mosquitto)

Este proyecto prepara un broker MQTT con Mosquitto en una VM Debian (GCP u otra), usando puerto 8082, ACL, usuarios y TLS.

## Requisitos
- Debian/Ubuntu con acceso `sudo`
- Puerto 8082 abierto en el firewall de la VM (solo tu IP o publico)

## Contenido
- `scripts/setup_mosquitto.sh`: instala y configura Mosquitto
- `config/acl.txt`: reglas ACL
- `config/users.txt`: usuarios/credenciales (se encriptan en el setup)
- `scripts/publisher.py` y `scripts/subscriber.py`: pruebas MQTT (TLS)

## Uso rapido
1. Copia este repo a la VM.
2. Ejecuta el setup:

```bash
bash scripts/setup_mosquitto.sh
```

3. Prueba en la VM o en tu maquina local (si tienes conectividad a la VM):

```bash
python3 scripts/subscriber.py --host <IP_PUBLICA>
```

En otra terminal:

```bash
python3 scripts/publisher.py --host <IP_PUBLICA> --user user1 --passwd 123456 --topic mexico/jalisco/guadalajara/user1
```

## GCP: firewall
En GCP necesitas permitir `tcp:8082` hacia la VM.
- En consola: **VPC network → Firewall → Create firewall rule**
- Direccion: Entrada
- Accion: Permitir
- Destino: Todas las instancias de la red (o tags de la VM)
- Origen: tu IP/32 o `0.0.0.0/0`
- Protocolo: TCP puerto 8082

## TLS con SAN (si falla por IP mismatch)
Si el cliente muestra `certificate verify failed: IP address mismatch`, debes generar el certificado del servidor con **Subject Alternative Name** (SAN) incluyendo la IP publica.

En la VM:

```bash
sudo mkdir -p /tmp/mosq_ssl
cd /tmp/mosq_ssl

sudo tee server.cnf >/dev/null <<'EOF'
[req]
default_bits = 2048
prompt = no
default_md = sha256
req_extensions = req_ext
distinguished_name = dn

[dn]
C = CO
ST = Bogota
L = Bogota
O = uniandes
OU = uniandes
CN = <IP_PUBLICA>

[req_ext]
subjectAltName = @alt_names

[alt_names]
IP.1 = <IP_PUBLICA>
EOF

sudo openssl genrsa -out server.key 2048
sudo openssl req -new -key server.key -out server.csr -config server.cnf
sudo openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 360 -extensions req_ext -extfile server.cnf

sudo cp -f ca.crt /etc/mosquitto/ca_certificates/ca.crt
sudo cp -f server.crt /etc/mosquitto/certs/server.crt
sudo cp -f server.key /etc/mosquitto/certs/server.key

sudo systemctl restart mosquitto.service
```

## Notas
- El setup activa TLS y autenticacion obligatoria.
- Los certificados se crean auto-firmados en la VM.
- Si quieres cambiar puerto, edita `scripts/setup_mosquitto.sh`.
