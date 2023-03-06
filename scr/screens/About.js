import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttons from "../components/Button/Button"

const about = ({ changeScreen }) => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutText}>SUPERLISTA</Text>
      <Text style={styles.aboutText}>Screen de prueba</Text>
      <Buttons style={styles.AboutButton} onPress={changeScreen}>Volver</Buttons>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
  aboutContainer: {
    flex:1,
    justifyContent:"space-between",
    backgroundColor: "grey",
    height: "100%",
  },
  aboutText: {
    width:"100%",
    color: "#fff",
    textAlign:"center",
   fontSize:15,
    backgroundColor:"green",
  },
  AboutButton:{
    marginBottom:20,
  }
})