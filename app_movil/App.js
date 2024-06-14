import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = ({ styles }) => {
  const [contenido, setContenido] = useState('hola mundoo');
  const actualizarContenido = () => {
    setContenido('State actualizo este texto');
  };

  return (
    <Text style={[styles.Text, styles]} onPress={actualizarContenido}>
      {contenido}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Hola Mundo</Text>
      <Text style={styles.blue}>Hola Mundo</Text>
      <Text style={styles.green}>Hola Mundo</Text>
      <Texto styles={styles.Text} />
      <StatusBar style="auto" />
      <Button title="Presiona" color="#000000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  Text: {
    color: 'yellow',
    fontSize: 25,
    height: 150,
  },

  red: {
    backgroundColor: 'red',
  },

  blue: {
    backgroundColor: 'blue',
  },

  green: {
    backgroundColor: 'green',
  },
});
