import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
});

export default function App() {
  const [count, setCount] = useState(0);

  // Choose the source of the image based on the count
  let imageSource;
  if (count < 10) {
    imageSource = require('./assets/lapp-small.png');
  } else if (count < 20) {
    imageSource = require('./assets/shiba.jpg');
  } else if (count < 30) {
    imageSource = require('./assets/corgi.png');
  } else if (count < 40) {
    imageSource = require('./assets/labradoodle.png')
  } else if (count < 50) {
    imageSource = require('./assets/labrador.jpg')
  } else if (count < 60) {
    imageSource = require('./assets/golden-retriever.png')
  } else if (count < 70) {
    imageSource = require('./assets/dalmatiner.png')
  } else if (count < 80) {
    imageSource = require('./assets/beagle.png')
  } else if (count < 90) {
    imageSource = require('./assets/australian-sherperd.png')
  } else {
    imageSource = require('./assets/yorkshire-terrier.jpg')
  }

  return (
    <View style={styles.container}>
      <Text>I denne app kan du se alle hudnene</Text>
      <View style={{ height: 20 }} />
      <Image
        style={styles.logo}
        source={imageSource}
      />
      <View style={{ height: 20 }} />
      <Text>Klik på denne knap ti gange og se hvad der sker.</Text>
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
