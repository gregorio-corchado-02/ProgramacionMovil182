import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, FlatList } from 'react-native';
import backgroundImage from './assets/images/fondo.jpg';
import Prueba from './screens/Prueba';

const Datos = [
  { key: '1', nombre: 'El Exorcista' },
  { key: '2', nombre: 'El Resplandor' },
  { key: '3', nombre: 'El Conjuro' },
  { key: '4', nombre: 'La Bruja' },
  { key: '5', nombre: 'Actividad Paranormal' },
];

export default function App() {
  // const [textoBusqueda, setTextoBusqueda] = useState('');
  // const [datosFiltrados, setDatosFiltrados] = useState(Datos);

  // const buscar = () => {
  //   const filtrados = Datos.filter(item => 
  //     item.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
  //   );
  //   setDatosFiltrados(filtrados);
  // };

  return (
    // <ImageBackground source={backgroundImage} style={styles.background}>
    //   <View style={styles.container}>
    //     <Text style={styles.titulo}>Buscador de Películas</Text>
    //     <TextInput
    //       style={styles.entrada}
    //       placeholder="Nombre de la Pelicula"
    //       placeholderTextColor="#fff"
    //       value={textoBusqueda}
    //       onChangeText={setTextoBusqueda}
    //     />
    //     <View style={styles.contenedorBoton}>
    //       <Button title="Buscar" onPress={buscar} />
    //     </View>
    //     <FlatList
    //       data={datosFiltrados}
    //       keyExtractor={(item) => item.key}
    //       renderItem={({ item }) => <Text style={styles.elemento}>{item.nombre}</Text>}
    //     />
    //   </View>
    // </ImageBackground>
    <Prueba/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 50, 
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
    color: 'white',
  },

  entrada: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '80%',
    height: 40,
    color: 'white', 
    marginBottom: 20, 
  },

  contenedorBoton: {
    width: '80%', 
    marginTop: 20, 
  },

  elemento: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white', 
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
