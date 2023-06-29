import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Dette er en klog og dygtig finnsk laphund. Alle elsker den.</Text>
      <View style={{ height: 20 }} />
      <Image
        style={styles.logo}
        source={count < 5 ? require('./assets/lapp-small.png') : require('./assets/shiba.jpg')}
      />
      <View style={{ height: 20 }} />
      <Text>Klik på denne knap fem gange og se hvad der sker.</Text>
      <View style={{ height: 20 }} />
      <Button
        title="Increment"
        onPress={() => setCount(count + 1)}
      />
      <Text>{count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
