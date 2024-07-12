import React, { useState } from 'react'
import { View, Text, Dimensions, Modal, TouchableOpacity } from 'react-native'
import { Entypo, FontAwesome5} from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

export default function Prueba() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: 'rgba(0,0,0,1)',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={{
                            width: width * 0.3,
                            height: height * 0.1,
                            backgroundColor: "#0088f0",
                            borderRadius: width * 0.1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: width * 0.02,
                                fontWeight: "700",
                                color: "#fff",
                            }}
                        >
                            Cerrar Modal
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                    width: width * 0.3,
                    height: height * 0.1,
                    backgroundColor: "#0088f0",
                    borderRadius: width * 0.1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: width * 0.02,
                        fontWeight: "700",
                        color: "#fff",
                    }}
                >
                    Abrir Modal
                </Text>
            </TouchableOpacity>
        </View>
    );
}
