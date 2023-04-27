import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SuperLista from '../screens/SuperLista'
import CategoryList from '../screens/CategoryList'
import ListProducts from '../screens/ListProducts'

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {

    return (

        <Stack.Navigator
            screenOptions={{
                statusBarColor: "#4B8A08",
            }}
        >

            <Stack.Screen
                name="SuperLista"
                component={SuperLista}
                options={{
                    headerShown: false,
                }}

            />

            <Stack.Screen
                name="Category"
                component={CategoryList}
                options={({ route }) => ({
                    title: route.params.categoryName,
                    /*       statusBarColor: "#4B8A08", */
                    headerStyle: {
                        backgroundColor: "#4B8A08",
                    },
                    headerTintColor: '#fff',
                })}
            />

            <Stack.Screen
                name="ListProducts"
                component={ListProducts}
                options={({ route }) => ({
                    title: route.params.nameList,
                    /*     statusBarColor: "#4B8A08", */
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
