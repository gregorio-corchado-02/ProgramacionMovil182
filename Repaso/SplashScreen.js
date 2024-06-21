// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home'); // Navega a la pantalla principal después de 2 segundos (simulado)
        }, 2000); // Simula 2 segundos de carga
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/images/imagen.jpg')} // Ruta de tu imagen de Splash Screen
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default SplashScreen;
