import { Alert } from 'react-native';

export const fetchSensorData = async (setSensorData) => {
  try {
    // Fake testing data bc i havent added API integration (runs every 30s)
    const mockData = [
      { label: 'Temperature', value: Math.floor(Math.random() * 10) + 20, unit: '°C', icon: '🌡️'},
      { label: 'Humidity', value: Math.floor(Math.random() * 30) + 50, unit: '%', icon: '💧'},
      { label: 'Soil Moisture', value: Math.floor(Math.random() * 40) + 40, unit: '%', icon: '🌿'},
      { label: 'Light', value: Math.floor(Math.random() * 1000) + 500, unit: ' lux', icon: '☀️'},
    ];
    
    setSensorData(mockData);
    
    
  } catch (error) {
    console.error('Error fetching sensor data:', error);
  }
};