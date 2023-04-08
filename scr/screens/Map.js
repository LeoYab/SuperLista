import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import MapView, { Marker } from "react-native-maps"
import { Entypo } from '@expo/vector-icons';

const Map = ({ navigation }) => {

    const [selectedLocation, setSelectedLocation] = useState(null);

    const initialRegion = {
        latitude: -34.6007336,
        longitude: -58.3841406,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

const handleSaveLocation = () => {
    if (selectedLocation){
        navigation.navigate("Nuevo", {mapLocation: selectedLocation})
    }
}

useLayoutEffect(() => {
navigation.setOptions({
    headerRight: () => (
<TouchableOpacity onPress={handleSaveLocation}>
<Entypo name="save" size={24} color="white" />
</TouchableOpacity>
   )
})
}, [navigation, handleSaveLocation])


    const handleSelecLocation = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude,
        })
    }


    return (

        <MapView
            style={styles.container}
            initialRegion={initialRegion}
            onPress={handleSelecLocation}
        >
            {selectedLocation && (
                <Marker
                    title="Ubicación seleccionada"
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lng,
                    }}
                />
            )}

        </MapView>
    )

}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})