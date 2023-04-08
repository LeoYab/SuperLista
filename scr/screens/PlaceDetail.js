import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import MapPreview from '../components/MapPreview/MapPreview';
import Colors from '../constants/Colors';

const PlaceDetail = ({ route }) => {

    const { placeID } = route.params;
    const place = useSelector(state => state.places.places.find(item => item.id === placeID))

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: place.image }} style={styles.image} />
            <View style={styles.location}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{place.address}</Text>
                </View>
                <MapPreview style={styles.map} location={{ lat: place.lat, lng: place.lng }}>
                    <Text>Ubicación no disponible</Text>
                </MapPreview>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
    },
    image:{
        height:"30%",
        minHeight:300,
        width:"100%",
    },
    location: {
        margin:20,
        width:"90%",
        maxWidth:350,
        backgroundColor:"white",
        shadowColor:"black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
    },
    addressContainer:{
        padding:20,
    },
address:{
    color:Colors.MAROON,
    textAlign:"center",
},
map:{
   height:"100%"
}

})

export default PlaceDetail