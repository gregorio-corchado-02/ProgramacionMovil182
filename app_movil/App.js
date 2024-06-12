import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto=()=>{
  const [contenido, setContenido]= useState('hola mundoo')
  const actulizarContenido=()=>{setContenido('State actualizo este texto')

  }
  return (<Text onPress={actulizarContenido}> {contenido} </Text>)

};

export default function App() {
  return (

    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <Texto contenido={'GREGORIO'}> </Texto>
      <StatusBar style="auto"/>
      <Button title='Presiona' color='#000000' ></Button>
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
});
