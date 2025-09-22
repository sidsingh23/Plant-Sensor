import boto3
from boto3.dynamodb.conditions import Key
from decimal import Decimal
import json

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table("PlantSensorData")

def decimal_to_native(obj):
    if isinstance(obj, list):
        return [decimal_to_native(i) for i in obj]
    elif isinstance(obj, dict):
        return {k: decimal_to_native(v) for k, v in obj.items()}
    elif isinstance(obj, Decimal):
        return int(obj) if obj % 1 == 0 else float(obj) #int or float choice happens here
    else:
        return obj

def lambda_handler(event, context):
    device_id = event.get('queryStringParameters', {}).get('deviceId')
    if not device_id:
        return {
            'statusCode': 400,
            'body': json.dumps({"error": "Missing deviceId"})
        }
    
    response = table.query(
        KeyConditionExpression=Key('deviceId').eq(device_id),
        ScanIndexForward=False,
        Limit=1
    )
    
    if not response['Items']:
        return {
            'statusCode': 200,
            'body': json.dumps({"message": "No data found for this sensor"})
        }
    
    item = decimal_to_native(response['Items'][0])
    
    return {
        'statusCode': 200,
        'body': json.dumps(item)
    }
