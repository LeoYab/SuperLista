import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import Colors from '../../constants/Colors'
import { Octicons } from '@expo/vector-icons';

const PlaceItem = ({ title, image, address, onSelect, onDel }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={image ? { uri: image } : {}} />
                    {!image && <Text style={styles.noImage}>Sin imagen</Text>}
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.address}>{address}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delPlaceItem} onPress={onDel}>
                <Octicons name="trash" size={22} color={'grey'} />
            </TouchableOpacity>
        </View>
    )
}

export default PlaceItem

const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    placeItem: {
        flex: 1,

        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    delPlaceItem: {
        alignSelf: "center",
        padding: 20,
        borderRadius: 50,
    },
    imageContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.btnPrimary,
        marginRight: 25,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 35,
    },
    noImage: {
        color: '#fff',
        fontSize: 16,
        position: 'absolute',
        alignSelf: 'center',
        textAlign: "center",
    },
    info: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: Colors.btnPrimary,
        fontSize: 18,
        marginBottom: 6
    },
    address: {
        color: '#777',
        fontSize: 16,
    }
})