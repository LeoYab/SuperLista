import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterAndLogin from '../screens/RegisterAndLogin';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName="RegisterAndLogin"
      screenOptions={{
        headerShown: false
      }}>
        
      <Stack.Screen name="RegisterAndLogin" component={RegisterAndLogin} />

    </Stack.Navigator>
  )
}

export default AuthNavigator
