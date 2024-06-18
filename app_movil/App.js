import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';



export default function App() {
  const [text, setText] = useState('valor default')
  const [sumit, setSumit]= useState('')
  return (
    <View style={styles.container}>
      <Text>Conpote Input: {sumit}</Text>
      <TextInput style={styles.input} onChangeText={ (t)=>setText(t) } Value={text}/>
      <Button title='presiona' onPress={ ()=>{ setSumit(text); alert('texto enviado') } }></Button>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor:'#7607D3',
    borderBottomColor:'#000000',
    borderBottomWidth:1,
    width:'80%',
    height:40,
  },

});