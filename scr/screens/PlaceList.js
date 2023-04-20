import React, {useEffect} from 'react'
import { FlatList} from 'react-native'
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
        
        <FlatList style={{flex:1}}
            data={places}
            renderItem={renderPlaceItem}
            keyExtractor ={item => item.id}
        />
        
    )
}



export default PlaceList
