import React from 'react'
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import { DrawerNavigator, MyDrawer } from './DrawerNavigator'



const MainNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      </NavigationContainer>
  )
}

export default MainNavigator

