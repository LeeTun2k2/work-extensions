import pika
import json

host = 'localhost'
port = 5672
username = 'guest'
password = 'guest'
queue = 'QueueName'
exchange = 'ExchangeName'
routing_key = 'RoutingKey'

def callback(ch, method, properties, body):
    print(f"Received: {body}")

credentials = pika.PlainCredentials(username, password)
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host=host, port=port, credentials=credentials)
)
channel = connection.channel()
channel.queue_declare(queue=queue, durable=True)
channel.basic_consume(queue=queue, on_message_callback=callback, auto_ack=True)
channel.start_consuming()
