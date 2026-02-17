#!/usr/bin/env bash
set -euo pipefail

MQTT_PORT=8082

if [[ $EUID -ne 0 ]]; then
  echo "Please run as root (use sudo)." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_DIR="${SCRIPT_DIR}/../config"

echo "Installing Mosquitto and dependencies..."
apt-get update
apt-get install -y apt-transport-https wget libpq-dev python3-dev unzip
apt-get install -y mosquitto mosquitto-clients
apt-get clean

echo "Configuring Mosquitto..."
if ! grep -q "^port" /etc/mosquitto/mosquitto.conf; then
  echo "port ${MQTT_PORT}" >> /etc/mosquitto/mosquitto.conf
fi

# ACL
cp -f "${CONFIG_DIR}/acl.txt" /etc/mosquitto/acl.txt
if ! grep -q "^acl_file" /etc/mosquitto/mosquitto.conf; then
  echo "acl_file /etc/mosquitto/acl.txt" >> /etc/mosquitto/mosquitto.conf
fi

# Users
cp -f "${CONFIG_DIR}/users.txt" /etc/mosquitto/users.txt
mosquitto_passwd -U /etc/mosquitto/users.txt
if ! grep -q "^allow_anonymous" /etc/mosquitto/mosquitto.conf; then
  echo "allow_anonymous false" >> /etc/mosquitto/mosquitto.conf
fi
if ! grep -q "^password_file" /etc/mosquitto/mosquitto.conf; then
  echo "password_file /etc/mosquitto/users.txt" >> /etc/mosquitto/mosquitto.conf
fi

# TLS (auto-firmado, interactivo)
mkdir -p /etc/mosquitto/ca_certificates /etc/mosquitto/certs
mkdir -p /tmp/mosq_ssl
cd /tmp/mosq_ssl

openssl genrsa -des3 -out ca.key 2048
openssl req -new -x509 -days 1826 -key ca.key -out ca.crt
openssl genrsa -out server.key 2048
openssl req -new -out server.csr -key server.key
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 360

cp -f ca.crt /etc/mosquitto/ca_certificates/ca.crt
cp -f server.crt /etc/mosquitto/certs/server.crt
cp -f server.key /etc/mosquitto/certs/server.key

if ! grep -q "^cafile" /etc/mosquitto/mosquitto.conf; then
  echo "cafile /etc/mosquitto/ca_certificates/ca.crt" >> /etc/mosquitto/mosquitto.conf
fi
if ! grep -q "^keyfile" /etc/mosquitto/mosquitto.conf; then
  echo "keyfile /etc/mosquitto/certs/server.key" >> /etc/mosquitto/mosquitto.conf
fi
if ! grep -q "^certfile" /etc/mosquitto/mosquitto.conf; then
  echo "certfile /etc/mosquitto/certs/server.crt" >> /etc/mosquitto/mosquitto.conf
fi
if ! grep -q "^tls_version" /etc/mosquitto/mosquitto.conf; then
  echo "tls_version tlsv1.2" >> /etc/mosquitto/mosquitto.conf
fi

chmod 777 /etc/mosquitto/certs/server.crt
chmod 777 /etc/mosquitto/certs/server.key

systemctl restart mosquitto.service
systemctl status mosquitto.service --no-pager

echo "Done. Broker on port ${MQTT_PORT}."
