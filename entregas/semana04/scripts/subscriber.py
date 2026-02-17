import ssl
import argparse
import paho.mqtt.client as mqtt

parser = argparse.ArgumentParser()
parser.add_argument("--host", required=True)
parser.add_argument("--port", type=int, default=8082)
parser.add_argument("--user", default="user1")
parser.add_argument("--passwd", default="123456")
parser.add_argument("--topic", default="mexico/jalisco/guadalajara/user1")
parser.add_argument("--cafile", default="/etc/mosquitto/ca_certificates/ca.crt")
args = parser.parse_args()


def on_connect(client, userdata, flags, rc):
    print("Connected with result code", rc)
    client.subscribe(args.topic)


def on_message(client, userdata, msg):
    print(msg.topic, msg.payload.decode())


client = mqtt.Client()
client.username_pw_set(args.user, args.passwd)
client.tls_set(
    ca_certs=args.cafile,
    cert_reqs=ssl.CERT_REQUIRED,
    tls_version=ssl.PROTOCOL_TLSv1_2,
)
client.on_connect = on_connect
client.on_message = on_message
client.connect(args.host, args.port, 60)
client.loop_forever()
