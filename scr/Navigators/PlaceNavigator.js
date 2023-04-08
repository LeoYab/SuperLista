import React from 'react'
import { Platform, TouchableOpacity, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

// screens
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
                backgroundColor: Platform.OS === 'android' ? Colors.DARK_SIENNA : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.DARK_SIENNA,
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
                        <Ionicons name="md-add" color={Platform.OS === 'android' ? 'white' : Colors.DARK_SIENNA} size={23} />
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
