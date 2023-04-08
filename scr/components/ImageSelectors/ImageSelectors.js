import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import React, { useState } from 'react'


import * as ImagePicker from "expo-image-picker"
import Colors from '../../constants/Colors'

const ImageSelectors = ({onImage}) => {
    const [pickedUri, setPickedUri] = useState()

    const VerifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if(status !== 'granted') {
            Alert.alert('Permisos insuficientes')
         
            return false;
        }
      
        return true;
     }

    const handlerTakeImage = async () => {
        
        const isCameraOk = await VerifyPermissions();
      
        if (!isCameraOk) return;
        
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true, 
            aspect: [16,9],
            quality: 0.8,
        })
   
        setPickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
     }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri
                    ? <Text>No hay imagen seleccionada...</Text>
                    : <Image style={styles.image} source={{ uri: pickedUri }} />
                }
            </View>
            <Button
                title="Tomar foto"
                color={Colors.LIGTH_PINK}
                onPress={handlerTakeImage}
            />
        </View>
    )
}

export default ImageSelectors

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.BLUSH,
        borderWith: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
})