import React, {useEffect, useLayoutEffect} from 'react'
import { FlatList} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import PlaceItem from '../components/PlaceItem/PlaceItem'
import { getPlaces, loadPlaces } from '../store/actions/places.actions'

const PlaceList = ({ navigation }) => {
    
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const places = useSelector(state=>state.places.places)


    useEffect(() => {

      /*   dispatch(getPlaces(userId)) */

      
    dispatch(loadPlaces())
      }, [])



    const renderPlaceItem = (data) => (
        <PlaceItem  
            title={data.item.title}
            image={data.item.image}
            address={data.item.address}
            onSelect={ () => navigation.navigate("Detalle", {placeID: data.item.id,}) }
        />
    )

    return (
        
        <FlatList style={{flex:1}}
            data={places}
            renderItem={renderPlaceItem}
            keyExtractor ={item => item.id}
        />
        
    )
}



export default PlaceList
