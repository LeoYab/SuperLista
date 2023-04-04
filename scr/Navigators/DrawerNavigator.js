
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import TabNavigator from './TabNavigator';
import MenuItems from '../components/MenuItems/MenuItems';

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
        headerStyle:{
            backgroundColor: '#4B8A08',        
        }
      }}
       />

    </Drawer.Navigator>
  );
}
