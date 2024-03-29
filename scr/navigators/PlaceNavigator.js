import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

import PlaceList from '../screens/PlaceList'
import PlaceDetail from '../screens/PlaceDetail'
import NewPlace from '../screens/NewPlace'
import Map from '../screens/Map'


const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () => (
    <PlaceStack.Navigator
        initialRoute='Direcciones'
        screenOptions={{
            headerStyle: {
                backgroundColor: Colors.BASE,
            },
            statusBarColor: "#4B8A08",
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <PlaceStack.Screen
            name="Direcciones"
            component={PlaceList}
            options={({ navigation }) => ({
                title: 'Direcciones',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                        <Ionicons name="add-circle-outline" color={"white"} size={30} />
                    </TouchableOpacity>
                )
            })}
        />
        <PlaceStack.Screen
            name="Detalle"
            component={PlaceDetail}
            options={{ title: 'Detalle de dirección' }}
        />
        <PlaceStack.Screen
            name="Nuevo"
            component={NewPlace}
            options={{ title: 'Nueva dirección' }}
        />
        <PlaceStack.Screen
            name="Map"
            component={Map}
            options={{ title: 'Mapa' }}
        />
    </PlaceStack.Navigator>
)


export default PlaceNavigator
