import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const formatTime = (date) =>
  date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

const App = () => {
  const [currentTime, setCurrentTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.label}>Hora atual</Text>
        <Text style={styles.time}>{currentTime}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#94a3b8',
    fontSize: 18,
    letterSpacing: 1,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  time: {
    color: '#f8fafc',
    fontSize: 48,
    fontWeight: '600',
  },
});

export default App;
