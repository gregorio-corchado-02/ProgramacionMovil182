import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';



export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key:'1', name:'Gregorio'},
          {key:'2', name:'Gadiel'},
          {key:'3', name:'Antonio'},
          {key:'4', name:'Kevin'},
          {key:'5', name:'Ricarda'},

        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 40,
  },

  item:{
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor:'Red',
    borderBottomWidth:1,
  },

});