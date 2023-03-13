import { StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SuperLista from '../screens/SuperLista'
import About from '../screens/About'

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="SuperLista">
                <Stack.Screen name="SuperLista"
                    options={{
                        statusBarColor: "#4B8A08",
                        headerShown: false,
                    }}
                    component={SuperLista}
                />
                <Stack.Screen name="About"
                    options={{
                        title: "Volver",
                        statusBarColor: "#4B8A08",
                        headerStyle: {
                            backgroundColor: "#4B8A08",
                        },
                        headerTintColor: '#fff',
                    }}
                    headerStyle component={About} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default ScreenNavigator

const styles = StyleSheet.create({})