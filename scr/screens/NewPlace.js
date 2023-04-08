import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native'
import Colors from '../constants/Colors'
import { useDispatch } from 'react-redux'
import { addPlace } from '../store/actions/places.actions'
import ImageSelectors from '../components/ImageSelectors/ImageSelectors'
import LocationSelector from '../components/LocationSelector/LocationSelector'
import { useSelector } from 'react-redux'

const NewPlace = ({ navigation }) => {

    const userId = useSelector(state => state.auth.userId);

    const dispatch = useDispatch()
    const [titleValue, setTitleValue] = useState('')
    const [imageValue, setImageValue] = useState('')
    const [locationValue, setLocationValue] = useState()

    const titleChangeHandler = text => {
        setTitleValue(text)
    }


    const savePlaceHandler = () => {
        dispatch(addPlace(titleValue, imageValue, locationValue, userId))
        navigation.navigate('Direcciones')
    }





    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput style={styles.input} onChangeText={titleChangeHandler} />
                <ImageSelectors onImage={image => setImageValue(image)} />
                <LocationSelector  onLocation={(lat, lng)=>setLocationValue({lat, lng})}/>
                <Button title="Guardar" color={Colors.MAROON} onPress={savePlaceHandler} />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default NewPlace