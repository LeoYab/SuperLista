import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from "expo-location"
import { useNavigation, useRoute } from '@react-navigation/native'

import Colors from '../../constants/Colors'
import MapPreview from '../MapPreview/MapPreview'

const LocationSelector = ({ onLocation }) => {
   
    const [pickedLocation, setPickedLocation] = useState(null);
    const navigation = useNavigation();
    const route = useRoute();

    const VerifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                "Permisos insuficientes",
                "Necesita dar permisos de la localización para usar la aplicación",
                [{ text: "OK" }],
            )
            return false;
        }
        return true;
    }


    const handleGetLocation = async () => {
        const hasPermission  = await VerifyPermissions();
   
        if (!hasPermission) return;

        const location = await Location.getCurrentPositionAsync({
            timeout: 2000,
        })

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });

        onLocation(location.coords.latitude, location.coords.longitude);
    }

    const handlePickOnMap = async () => {
        const hasPermission  = await VerifyPermissions();

        if (!hasPermission ) return;

        navigation.navigate("Map");
    }

    

    const mapLocation = route?.params?.mapLocation;

    useEffect(() => {
        if (mapLocation) {
            setPickedLocation(mapLocation);
            onLocation(mapLocation.lat, mapLocation.lng)
            
        }
    }, [mapLocation])


    return (
        <View style={styles.container}>

            <MapPreview location={pickedLocation} mapStyle={styles.preview}>
                <Text>Esperando ubicación...</Text>
            </MapPreview>

            <View style={styles.actions}>
                <Button
                    title="Obtener ubicación"
                    color={Colors.PEACH_PUFF}
                    onPress={handleGetLocation}
                />
                <Button
                    title="Elegir ubicación"
                    color={Colors.LIGTH_PINK}
                    onPress={handlePickOnMap}
                />
            </View>

        </View>

    )

}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.BLUSH,
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});