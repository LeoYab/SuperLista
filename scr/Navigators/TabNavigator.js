import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Categories from '../screens/Categories';
import ScreenNavigator from './ScreenNavigator'
import PlaceNavigator from './PlaceNavigator';
import Colors from '../constants/Colors';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>

      <BottomTabs.Screen
        name="ScreenNavigator"
        component={ScreenNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name="home" size={24} color={focused ? "white" : Colors.btntertiary} />
              <Text style={{ color: focused ? "white" : Colors.btntertiary }}>Inicio</Text>
            </View>
          )
        }}
      />

      <BottomTabs.Screen
        name="PlaceNavigator"
        component={PlaceNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name="location" size={24} color={focused ? "white" : Colors.btntertiary} />
              <Text style={{ color: focused ? "white" : Colors.btntertiary }}>Ubicación</Text>
            </View>
          )
        }}
      />

      <BottomTabs.Screen
        name="Categories"
        component={Categories}
        options={{
          headerStyle: {
            backgroundColor: Colors.BASE,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: 'Categorías',
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name="list" size={24} color={focused ? "white" : Colors.btntertiary} />
              <Text style={{ color: focused ? "white" : Colors.btntertiary }}>Categorías</Text>
            </View>
          ),
        }}
      />




    </BottomTabs.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#4B8A08",
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}) 