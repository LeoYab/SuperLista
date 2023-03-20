import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Categories from '../screens/Categories';
import ScreenNavigator from './ScreenNavigator'
import CategoryList from '../screens/CategoryList';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}>

      <BottomTabs.Screen
        name="ScreenNavigator"
        component={ScreenNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name="home" size={24} color={focused ? '#6ca115ef' : 'green'} />
              <Text style={{ color: focused ? '#6ca115ef' : '#green' }}>Inicio</Text>
            </View>
          )
        }}
      />

{/* <BottomTabs.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name="list" size={24} color={focused ? '#6ca115ef' : 'green'} />
              <Text style={{ color: focused ? '#6ca115ef' : '#green' }}>Categorías</Text>
            </View>
          )
        }}
      />

 */}


    </BottomTabs.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}) 