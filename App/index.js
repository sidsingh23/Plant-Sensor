import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SensorCard from '../../components/SensorCard';
import DashboardHeader from '../../components/DashboardHeader';
import { fetchSensorData } from '../../services/apiService';


// currently set up so it displays these default values, then updates random numbers every 30s
// actual API implementation pending
export default function Dashboard() {
  const [sensorData, setSensorData] = useState([
    { label: 'Temperature', value: 25, unit: '°C', icon: '🌡️'},
    { label: 'Humidity', value: 60, unit: '%', icon: '💧'},
    { label: 'Soil Moisture', value: 70, unit: '%', icon: '🌿'},
    { label: 'Light', value: 800, unit: ' lux', icon: '☀️'},
  ]);

  useEffect(() => {
    fetchSensorData(setSensorData);
    const interval = setInterval(() => fetchSensorData(setSensorData), 30000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    checkSensorAlerts(sensorData);
  }, [sensorData]);

  return (
    <View style={styles.container}>
      <DashboardHeader />

      <View style={styles.cardsContainer}>
        {sensorData.map((sensor, index) => (
          <SensorCard 
            key={index} 
            sensor={sensor} 
            status={getStatus(sensor)} 
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});