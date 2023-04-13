import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, Animated, Pressable, TouchableWithoutFeedback, Image } from "react-native"
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { addProduct } from '../../store/actions/products.action';
import { getProducts } from '../../store/actions/getproducts.action';
import { saveProducts } from '../../store/actions/products.action';
import Buttons from '../Button/Button';
import { listProducts, delListProducts } from "../../store/actions/listProducts.action";
import ModalSaveList from '../Modals/ModalSaveList';
import { TextInput } from 'react-native-gesture-handler';
import Input from '../Input/Input';
import Colors from "../../constants/Colors";
import { Entypo } from '@expo/vector-icons';
import ModalDel from "../Modals/ModalDel";
import { Feather } from '@expo/vector-icons';
import { logout } from "../../store/actions/auth.action";

const MenuItems = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [saveListName, setSaveListName] = useState("");
  const [deleteList, setDeleteList] = useState(false);
  const [showModalDel, setShowModalDel] = useState(false);
  const [confirmItemDel, setConfirmItemDel] = useState(null);
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const userId = useSelector(state => state.auth.userId);
  const email = useSelector(state => state.auth.email);





  const handlePress = () => {
    setShowInput(true);
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {

    dispatch(getProducts(userId))

  }, [saveListName, deleteList])

  const delList = (id) => {

    setShowModalDel(true)
    setConfirmItemDel(id)

  }

  const confirmDelList = (id) => {
    setDeleteList(!deleteList)
    dispatch(delListProducts(userId, id, list))
    setShowModalDel(false)

  }

  const onCancelModal = () => {
    setShowModalDel(false);
  }

  const prods = useSelector(state => state.products.productToAdd)

  const createListName = () => {

    dispatch(saveProducts(prods, saveListName, userId))
    setShowInput(false);
    setSaveListName("")
  }


  const checkShowInput = () => {
    setShowInput(false);
  }


  const getProduct = useSelector(state => state.getProducts.productsGet)

  const list = getProduct.map(list => list).flat();


  const handleSelectedList = (item) => {
    dispatch(listProducts(userId, item.id))
    navigation.navigate('ListProducts', {
      nameList: item.nameList,
    }
    )
  }


  return (
    <>

      <View style={styles.containerHeader}>
        <Feather style={styles.logout} name="log-out" size={24} color="white" onPress={() => dispatch(logout())} />
        <View style={styles.profileImage}>
          <View style={styles.profileBackground}>
            <Text style={styles.profileInitial}>{email.charAt(0).toUpperCase()}</Text>
          </View>
        </View>
        <Text style={styles.profileEmail}>{email}</Text>

      </View>
      <DrawerContentScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.container} >


        <Pressable style={{ height: 800 }} onPress={checkShowInput}>

          <Text style={styles.title}>Mis listas</Text>

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={styles.itemTextStyle}
            iconStyle={styles.iconStyle}
            data={list}
            search
            maxHeight={300}
            labelField="nameList"
            valueField="id"
            placeholder="Listas guardadas"
            searchPlaceholder="Buscar..."
            value={value}
            onChange={item => {
              setValue(item);
              handleSelectedList(item);
            }}
            renderItem={(item) => (
              <View style={styles.labelContainer}>
                <View style={styles.labelFieldContainer}>
                  <Text style={styles.labelFieldName}>{item.nameList}</Text>
                  <Text> - </Text>
                  <Text style={styles.labelFieldDate}>{item.date}</Text>
                </View>
                <TouchableOpacity style={styles.delButtonProd} onPress={() => { delList(item) }}>
                  <Entypo name="trash" size={22} color={'grey'} />
                </TouchableOpacity>

              </View>
            )}
          />
          {!showInput
            ?
            <Buttons style={styles.buttonContainer} onPress={handlePress}>Guardar Lista</Buttons>
            :
            <Buttons style={styles.buttonContainer} onPress={createListName}>Guardar</Buttons>
          }

          {showInput && (
            <Animated.View style={{
              marginTop: 10, transform: [{
                translateY: slideAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-50, 0],
                })
              }]
            }}>
              <Input
                style={styles.inputSaveNameList}
                placeholder={"Ingrese nombre"}
                value={saveListName}
                onChangeText={setSaveListName} />
            </Animated.View>
          )}

          {/* 
          <Buttons style={styles.buttonContainer}>Boton 2</Buttons>
          <Buttons style={styles.buttonContainer}>Boton 3</Buttons> */}
        </Pressable>
      </DrawerContentScrollView>
      {showModalDel &&

        <ModalDel
          modalDelVisible={showModalDel}
          listToDel={confirmItemDel}
          itemToDel={null}
          onCancelModal={onCancelModal}
          onDeleteItem={confirmDelList}
        />}
    </>
  )
}

export default MenuItems

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerHeader: {
    height: height * 0.2,
    backgroundColor: Colors.LIGTH_PINK,

  },
  logout: {
    marginTop: 6,
    marginRight: 6,
    alignSelf: "flex-end",
  },
  container: {
    flex: 1,
    padding: 15,
  },
  profileImage: {
    backgroundColor: "white",
    marginLeft: 10,
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  profileInitial: {
    alignSelf:"center",
    fontSize: 50,
    fontWeight: "600",
    color: Colors.LIGTH_PINK,
    bottom:7,
  },
  profileBackground: {
    alignSelf: "center",
    borderColor: Colors.LIGTH_PINK,
    borderWidth: 8,
    borderRadius: 50,
    width: 70,
    height: 70,
    marginTop: 5,
  },
  profileEmail: {
    color: "white",
    marginHorizontal: 15,
    marginTop:6,
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  inputSaveNameList: {
    width: width * 0.6,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: "grey",
    alignSelf: "center",
    paddingLeft: 10,
    height: 40,
    textAlign: "center",
  },
  dropdown: {
    width: width * 0.6,
    borderWidth: 1,
    borderColor: '6ca115ef',
    paddingHorizontal: width * 0.02,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "#95C154",
    alignSelf: "center",
    height: 40,
    fontSize: 10,
  },
  icon: {
    marginRight: 5,
  },
  labelContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  labelFieldContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "flex-start",
    borderBottomWidth: .5,
    borderBottomColor: "grey",
  },
  labelFieldName: {
    marginLeft: 5,
    fontWeight: "600"
  },
  labelFieldDate: {
    fontWeight: "200"
  },
  itemTextStyle: {
    fontSize: 14,
    color: "#393939",
  },
  placeholderStyle: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    paddingLeft: 30,

  },
  iconStyle: {
    width: 20,
    height: 10,
    tintColor: "white",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "white",
  },
  buttonContainer: {

    borderRadius: 8,
    marginTop: 10,
    width: width * 0.6,
    height: 40,
  },
  delButtonProd: {
    alignSelf: "center",
    alignItems: "center",
    /*     borderWidth: 1,
        borderColor: "grey",
        borderRadius:6, */
    width: width * 0.07,
    paddingVertical: 10,
    marginRight: 2,
    borderBottomWidth: .5,
    borderBottomColor: "grey",
  },
})