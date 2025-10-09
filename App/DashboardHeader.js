import { Text, View, StyleSheet } from 'react-native';

export default function DashboardHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>🌱 Plant Monitor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});