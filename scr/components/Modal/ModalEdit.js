import { StyleSheet, View, Modal, Text } from 'react-native'
import React from 'react'
import Input from "../Input/Input"
import Buttons from "../Button/Button"
import { ModalShadow } from '../../constants/ModalShadow'
import Colors from '../../constants/Colors'

const ModalEdit = ({ nameProd, price, quantity, setNameProd, numberInputPriceHandler, numberInputQuantityHandler, checkEmptyInput, editProduct = false, setbuttonViewEdit }) => {


  return (
    <Modal animationType="fade" transparent={true} visible={editProduct}>
      <View style={styles.modalContainer}>
        <Text style={styles.titleModalEdit}>EDITAR PRODUCTO</Text>
        <View style={styles.modalContent}>

          <Input
            value={nameProd}
            placeholder={"Producto"}
            onChangeText={setNameProd} />
          <Input
            value={price}
            placeholder={"Precio"}
            onChangeText={numberInputPriceHandler}
            keyboardType="numeric" />
          <Input
            value={quantity}
            placeholder={"Cantidad"}
            onChangeText={numberInputQuantityHandler}
            keyboardType="numeric" />

          <Buttons onPress={checkEmptyInput}>+</Buttons>
        </View>
      </View>

    </Modal>
  )
}

export default ModalEdit

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flexDirection: "row",
    backgroundColor: '#7ec07a',
    padding: 5,
    borderRadius: 10,
    borderWidth:5,
    borderColor:"#fff",
    alignItems: 'center',
    ...ModalShadow,
  },
  titleModalEdit: {
    fontWeight: "bold",
    color:"white",
    backgroundColor: "#7ec07a",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  deleteButton: {
    backgroundColor: Colors.btnPrimary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: Colors.btnSecondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})