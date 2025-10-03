import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  const sensorData = [
    { label: 'Temperature', value: '25°C', icon: '🌡️', status: 'good' },
    { label: 'Humidity', value: '60%', icon: '💧', status: 'good' },
    { label: 'Soil Moisture', value: '70%', icon: '🌿', status: 'good' },
    { label: 'Light', value: '800 lux', icon: '☀️', status: 'good' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🌱 Plant Monitor</Text>
        <Text style={styles.subtitle}>Dashboard</Text>
      </View>

      <View style={styles.cardsContainer}>
        {sensorData.map((sensor, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.icon}>{sensor.icon}</Text>
            <Text style={styles.label}>{sensor.label}</Text>
            <Text style={styles.value}>{sensor.value}</Text>
            <View style={[styles.statusDot, styles[sensor.status]]} />
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Last updated: Just now</Text>
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
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2d5016',
  },
  subtitle: {
    fontSize: 18,
    color: '#6b8e23',
    marginTop: 5,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d5016',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 10,
  },
  good: {
    backgroundColor: '#4caf50',
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});