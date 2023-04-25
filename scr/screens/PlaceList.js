import React, {useEffect} from 'react'
import { FlatList, Dimensions, StyleSheet, View, Text} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import PlaceItem from '../components/PlaceItem/PlaceItem'
import { getPlaces, delPlace } from '../store/actions/places.actions'

const PlaceList = ({ navigation }) => {
    
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const places = useSelector(state=>state.places.places)


const onDel = (placeId) => {
dispatch(delPlace(userId, placeId, places))
}
    

    useEffect(() => {

        dispatch(getPlaces(userId))
    
      }, [])



    const renderPlaceItem = (data) => (
        <PlaceItem  
            title={data.item.title}
            image={data.item.image}
            address={data.item.address}
            onSelect={ () => navigation.navigate("Detalle", {placeID: data.item.id,}) }
            onDel={ () => onDel(data.item.id) }
        />
    )

    return (
        <View style={styles.tableList}>

        {!places.length ? <Text style={styles.textTable}>AGREGA DIRECCIONES DESDE EL BOTÓN (+)</Text> : null}
        <FlatList style={{flex:1}}
            data={places}
            renderItem={renderPlaceItem}
            keyExtractor ={item => item.id}
        />
        </View>
    )
}



export default PlaceList

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({

    tableList: {
        flex: 1,
        backgroundColor: "#fff",

    },
    textTable: {
        color:"grey",
        top: height * 0.3,
        alignSelf: "center",
    },
})