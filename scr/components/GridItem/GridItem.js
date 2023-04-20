import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../constants/Colors'
import React from 'react'


const GridItem = ({ item, onSelect }) => {

    return (
        <View style={styles.gridItem}>
            <TouchableOpacity onPress={() => onSelect(item)} style={[styles.container, { backgroundColor: item.color }]}>
                <Text style={styles.icon}>{item.icon}</Text>
                <Text style={styles.title}>{item.title}</Text>

            </TouchableOpacity>
        </View>
    )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,


    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",

    },
    title: {
        marginRight: 30,
        fontWeight: "800",
        fontSize: 20,

    },
    icon: {
        fontSize: 50,
        backgroundColor: Colors.btntertiary,
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,

    },
})
