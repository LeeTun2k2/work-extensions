import pika
import json

host = 'localhost'
port = 5672
username = 'guest'
password = 'guest'
queue = 'QueueName'
exchange = 'ExchangeName'
routing_key = 'RoutingKey'
body = {
    'Payload': {
        'Type': 'type-name',
        'ExcelModels': [
            {
                'Year': 2000,
                'Manufacturer': 'Manufacturer',
                'Make': 'Make',
                'Model': 'Model',
                'Engine': 'Engine',
                'Trim': 'Trim',
                'FeatureGroup': 'FeatureGroup',
                'System': 'System',
                'Function': 'Function',
                'SubFunction': 'SubFunction',
                'Market': 'Market',
                'Note': 'Note',
                'Link': 'Link',
            }
        ]
    }
}
json_body = json.dumps(body)

credentials = pika.PlainCredentials(username, password)
connection = pika.BlockingConnection(
    pika.ConnectionParameters(host=host, port=port, credentials=credentials)
)
channel = connection.channel()
channel.queue_declare(queue=queue, durable=True)

channel.basic_publish(
    exchange=exchange,
    routing_key=routing_key,
    body=json_body,
    properties=pika.BasicProperties(content_type='application/json')
)
connection.close()
