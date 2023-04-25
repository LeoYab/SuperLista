
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import TabNavigator from './TabNavigator';
import MenuItems from '../components/MenuItems/MenuItems';
import { TouchableOpacity, Text, View, Image } from 'react-native';
const Drawer = createDrawerNavigator();

export function DrawerNavigator() {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuItems {...props} />}>

      <Drawer.Screen
        name="SUPERLISTA"
        component={TabNavigator}
        options={{
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitle: () => (
            <View style={{ flexDirection: "row", gap:6 }}>
              <Image style={{ width: 32, height: 32 }} source={require("../../assets/header-logo.png")} />
              <Text style={{ color: "#fff", fontSize: 18, fontWeight:"800", alignSelf:"center" }}>SUPERLISTA</Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#4B8A08',
          }
        }}
      />

    </Drawer.Navigator>
  );
}
