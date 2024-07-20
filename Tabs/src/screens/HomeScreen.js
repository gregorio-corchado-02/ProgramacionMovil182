import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View>
      <Text>Estás en el Home de la APP</Text>
      <StatusBar style="auto" />
    </View>
  );
}