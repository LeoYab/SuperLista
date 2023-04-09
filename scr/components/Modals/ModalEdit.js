import { StyleSheet, View, Modal, Text, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { useState, useEffect } from 'react'
import Input from "../Input/Input"
import Buttons from "../Button/Button"
import { ModalShadow } from '../../constants/ModalShadow'
import Colors from '../../constants/Colors'
/* import { CATEGORIES } from '../../categories/categories' */
import { Dropdown } from 'react-native-element-dropdown';
import { useSelector } from 'react-redux'

const ModalEdit = ({ category, setEditCatry, setEditCatryIcon, nameProd, price, quantity, setNameProd, numberInputPriceHandler, numberInputQuantityHandler, checkEmptyInput, modalEditVisible = false }) => {
  const categories = useSelector(state => state.categories.categories)
  const [value, setValue] = useState({});

useEffect(() => {
  setEditCatry(value.id)
  setEditCatryIcon(value.icon)
}, [value])


  return (
    <Modal animationType="fade" transparent={true} visible={modalEditVisible}>
      <TouchableWithoutFeedback onPress={checkEmptyInput}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleModalEdit}>EDITAR PRODUCTO</Text>
          <View style={styles.modalContent}>

            <Input
              value={nameProd}
              placeholder={"Producto"}
              onChangeText={setNameProd} />
            <Input
              value={price ? price.toString() : ""}
              placeholder={"Precio"}
              onChangeText={numberInputPriceHandler}
              keyboardType="numeric" />
            <Input
              value={quantity ? quantity.toString() : ""}
              placeholder={"Cantidad"}
              onChangeText={numberInputQuantityHandler}
              keyboardType="numeric" />
            <Dropdown
              style={[styles.dropdown, !value ? styles.dropdowngrey : styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={categories}
              search
              maxHeight={300}
              labelField="title"
              valueField="id"
              placeholder="Categoría"
              searchPlaceholder="Buscar..."
              value={category}
              onChange={item => {
                setValue(item);
              }}
            />

          </View>
          <View  style={styles.buttonEdit}>
          <Buttons onPress={checkEmptyInput}>Editar</Buttons>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ModalEdit

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
  dropdown: {
    width: 100,
    borderWidth: 2,
    borderColor: 'green',
    paddingHorizontal: width * 0.02,
    marginVertical: 2,
    borderRadius: 5,
    backgroundColor: "white",
    fontFamily: "OpenSansRegular",
    maxWidth: width * 0.245,
    height: 32,
    fontSize: 10,
},
dropdowngrey: {
    borderColor: 'grey',

},
  titleModalEdit: {
    fontWeight: "bold",
    color: "white",
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