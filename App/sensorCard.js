import { Text, View, StyleSheet } from 'react-native';

export default function SensorCard({ sensor, status }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{sensor.icon}</Text>
      <Text style={styles.label}>{sensor.label}</Text>
      <Text style={styles.value}>
        {sensor.value}{sensor.unit}
      </Text>
      <View style={[styles.statusDot, styles[status]]} />
      {status === 'low' && (
        <Text style={styles.warningText}>Too Low!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
});