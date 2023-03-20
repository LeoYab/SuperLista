import { StyleSheet } from 'react-native'
import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SuperLista from '../screens/SuperLista'
import CategoryList from '../screens/CategoryList'

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {

    return (

        <Stack.Navigator>

            <Stack.Screen name="SuperLista"
            component={SuperLista}
                options={{
                    statusBarColor: "#4B8A08",
                    headerShown: false,
                }}
                
            />

            <Stack.Screen
                name="Category"
                component={CategoryList}
                options={({ route }) => ({
                    title: route.params.categoryName,
                    statusBarColor: "#4B8A08",
                    headerStyle: {
                        backgroundColor: "#4B8A08",
                    },
                    headerTintColor: '#fff',
                })}
            />

        </Stack.Navigator>

    )
}

export default ScreenNavigator

const styles = StyleSheet.create({})