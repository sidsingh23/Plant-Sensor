# Plant Sensor
This project involves a plant sensor made using an ESP32 microcontroller and various sensors. The ESP32 sends sensor data in JSON format to a database via AWS IoT Core. From there, the data is published to a dynamoDB table. An AWS Lambda function with an API trigger then pulls data from the table when requested. An app, made using React Native, will use an API call to fetch data from the database and display it in a visually appealing way.


Basic flow of data:

ESP32 + Sensors → AWS IoT Core → DynamoDB → AWS Lambda → API Gateway → React Native App

---
## In progress, will update shortly. 


