import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttons  from "../components/Button/Button"

const about = ({changeScreen}) => {
  return (
    <View  style={styles.aboutContainer}>
      <Text style={styles.aboutText}>SuperLista</Text>
      <Buttons  onPress={changeScreen}>Volver</Buttons>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
    aboutContainer:{
backgroundColor:"grey",
height:"100%",
    },
    aboutText:{
        color:"#fff",
    }
})