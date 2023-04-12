
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import TabNavigator from './TabNavigator';
import MenuItems from '../components/MenuItems/MenuItems';
import { TouchableOpacity, Text, View } from 'react-native';
const Drawer = createDrawerNavigator();

export function DrawerNavigator() {

  return (
    <Drawer.Navigator  
    drawerContent = {(props) => <MenuItems {...props} />}>

      <Drawer.Screen 
      name="SUPERLISTA" 
      component={TabNavigator}
      options={{
        headerTintColor:"#fff",
        headerTitleAlign:"center",
        
        headerTitle: () => (
           <Text style={{ color: "#fff", fontSize: 18 }}>SUPERLISTA</Text>
        ),
        headerStyle:{
            backgroundColor: '#4B8A08',        
        }
      }}
       />

    </Drawer.Navigator>
  );
}
