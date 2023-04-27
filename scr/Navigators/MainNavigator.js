import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux';

import AuthNavigator from './AuthNavigator';
import { DrawerNavigator } from './DrawerNavigator';



const MainNavigator = () => {
  const isAuth = useSelector(state => state.auth.userId);

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

