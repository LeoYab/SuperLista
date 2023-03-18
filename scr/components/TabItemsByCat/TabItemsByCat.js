import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
const TabItemsByCat = ({ item, onSelect }) => {


  return (
    <View style={[styles.productTable]}>
    <Text style={styles.productName}>{item.nameProd}</Text>
    <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    <Text style={styles.productQuantity}>{item.quantity}</Text>
    </View>
  )
}

export default TabItemsByCat

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold',
    },
    productTable: {
      flexDirection: 'row',
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#dee2e6',
  },
  productName: {
      flex: 1.8,
      marginStart: width * 0.03,
      textAlign: "left",
      alignSelf: "center",
      fontFamily: "OpenSansRegular",
  },
  productPrice: {
      flex: 1.4,
      textAlign: "left",
      alignSelf: "center",
      fontFamily: "OpenSansRegular",
  },
  productQuantity: {
      flex: 0.9,
      textAlign: "left",
      alignSelf: "center",
      fontFamily: "OpenSansRegular",
  },
  productTotal: {
      flex: 1,
      textAlign: "left",
      alignSelf: "center",
      fontFamily: "OpenSansRegular",
  },
  editDelProd: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between",
      marginEnd: width * 0.03,
  },
  editButtonProd: {
      backgroundColor: Colors.btnPrimary,
      borderRadius: 5,
      marginRight: 1,
      alignSelf: "center",
      width: 30,
      height: 30,
  },
  delButtonProd: {
      backgroundColor: Colors.btnSecondary,
      borderRadius: 5,
      marginLeft: 1,
      alignSelf: "center",
      width: 30,
      height: 30,
  },

})