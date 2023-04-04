import React, {useState} from 'react'
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux';

import AuthNavigator from './AuthNavigator';
import { DrawerNavigator } from './DrawerNavigator';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; 
import { useCallback } from 'react';



const MainNavigator = () => {
  const isAuth = useSelector(state => state.auth.userId);
console.log(isAuth)
  return (
    <NavigationContainer>

      {isAuth 
        ? <DrawerNavigator />
        : <AuthNavigator />
      }

    </NavigationContainer>
  )
}

export default MainNavigator

