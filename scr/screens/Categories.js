import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// screens
import CategoryItem from '../CategoryItem/CategoryItem'


const PlaceStack = createNativeStackNavigator()

const Categories = () => (
    <PlaceStack.Navigator
        initialRoute='Direcciones'
        screenOptions={{
          headerShown:false,
            statusBarColor: "#4B8A08",
          
        }}
    >
        <PlaceStack.Screen
            name="CategoryItem"
            component={CategoryItem}
        />
      
    </PlaceStack.Navigator>
)


export default Categories
