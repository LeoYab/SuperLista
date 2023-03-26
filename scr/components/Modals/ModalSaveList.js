import { StyleSheet, View, Modal, Text, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { useState, useEffect } from 'react'
import Input from "../Input/Input"
import Buttons from "../Button/Button"
import { ModalShadow } from '../../constants/ModalShadow'
import Colors from '../../constants/Colors'
import { CATEGORIES } from '../../categories/categories'
import { Dropdown } from 'react-native-element-dropdown';

const  ModalSaveList = ({ modalNameVisible, saveList, setSaveList, createListName, checkVisibled, saveListName, category, setEditCatry, setEditCatryIcon, nameProd, price, quantity, setNameProd, numberInputPriceHandler, numberInputQuantityHandler, checkEmptyInput, modalEditVisible = false }) => {

 
  
  
/*   const [value, setValue] = useState({});

useEffect(() => {
  setEditCatry(value.id)
  setEditCatryIcon(value.icon)
}, [value])

 */
  return (
    <Modal animationType="fade" transparent={true} visible={modalNameVisible}>
      <TouchableWithoutFeedback onPress={checkVisibled}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Input
               value={saveList}
               placeholder={"Ingrese nombre de la Lista"}
               onChangeText={setSaveList} />
              
          </View>
          <View  style={styles.buttonEdit}>
          <Buttons onPress={createListName}>Aceptar</Buttons>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ModalSaveList

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flexDirection: "row",
    backgroundColor: '#7ec07a',
    padding: 5,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#fff",
    alignItems: 'center',
    ...ModalShadow,

  },
  buttonEdit:{
   marginBottom:56,
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