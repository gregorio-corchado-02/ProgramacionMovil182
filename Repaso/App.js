// App.js
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import SplashScreen from './SplashScreen'; // Importa el componente Splash Screen

export default function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    // Simular una carga inicial
    setTimeout(() => {
      setIsLoading(false); // Cuando la carga termina, se oculta el Splash Screen
    }, 2000); // Simula 2 segundos de carga
  }, []);

  if (isLoading) {
    return <SplashScreen />; // Muestra el Splash Screen mientras isLoading sea true
  }

  return (
    <ImageBackground source={require('./assets/images/fondo.jpg')} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text>Nombre: </Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={(n) => setNombre(n)}
            placeholder="Ingresa tu nombre"
          />

          <Text>Password: </Text>
          <TextInput
            style={styles.input}
            value={apellido}
            onChangeText={(a) => setApellido(a)}
            secureTextEntry={true}
            placeholder="Ingresa tu Password"
          />

          <Text>Correo: </Text>
          <TextInput
            style={styles.input}
            value={correo}
            onChangeText={(c) => setCorreo(c)}
            placeholder="Ingresa tu correo"
            keyboardType="email-address"
          />

          <StatusBar style="auto" />

          <Button
            title='Presiona'
            onPress={() => {
              alert(`Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}`);
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

