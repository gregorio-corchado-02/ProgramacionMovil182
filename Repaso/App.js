import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from 'react-navigation/native';
import { createNativeStackNavigator } from '@-react-navigation/native-stack';

function homeScreen({navigation}){
  return
    <View>
      <Text> Home Screen</Text>
      <Button title='Ir a detalles'/>
    </View>

}

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Text>Hola Mundo</Text>
        {/* Agrega más componentes según sea necesario */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
