import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { GOOGLE_MAPS_API } from '../../constants/Database';

const MapPreview = ({location, mapStyle, children}) => {

    const mapPreviewUrl = location
        ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap
&markers=color:green%7C${location.lat},${location.lng}&key=${GOOGLE_MAPS_API}`
        : "";


     
    return (
        <View style={[styles.mapView, mapStyle]}>
            {
                location
                    ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
                    : (children)
            }
        </View>
    )
  
}

export default MapPreview

const styles = StyleSheet.create({
    mapView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: '100%',
        height: 200,
    },
})