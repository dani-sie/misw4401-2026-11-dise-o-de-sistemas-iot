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

## Notas
- El setup activa TLS y autenticacion obligatoria.
- Los certificados se crean auto-firmados en la VM.
- Si quieres cambiar puerto, edita `scripts/setup_mosquitto.sh`.
