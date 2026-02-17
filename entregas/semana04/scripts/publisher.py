import ssl
import argparse
import time
import paho.mqtt.client as mqtt

parser = argparse.ArgumentParser()
parser.add_argument("--host", required=True)
parser.add_argument("--port", type=int, default=8082)
parser.add_argument("--user", default="user1")
parser.add_argument("--passwd", default="123456")
parser.add_argument("--topic", default="mexico/jalisco/guadalajara/user1")
parser.add_argument("--cafile", default="/etc/mosquitto/ca_certificates/ca.crt")
args = parser.parse_args()

client = mqtt.Client()
client.username_pw_set(args.user, args.passwd)
client.tls_set(
    ca_certs=args.cafile,
    cert_reqs=ssl.CERT_REQUIRED,
    tls_version=ssl.PROTOCOL_TLSv1_2,
)
client.connect(args.host, args.port, 60)

for i in range(5):
    payload = f"msg {i}"
    client.publish(args.topic, payload)
    print("sent", payload)
    time.sleep(1)

client.disconnect()
