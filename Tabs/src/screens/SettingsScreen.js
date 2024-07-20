import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SettingsScreen() {
  return (
    <View>
      <Text>Estás en las Settings de la APP</Text>
      <StatusBar style="auto" />
    </View>
  );
}