import { StyleSheet, View, Dimensions, SafeAreaView } from 'react-native';
import { useState, useCallback, useEffect } from 'react';


import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Header, ProdAdd, ProdEdit, Buttons, ProdDel } from '../components/Index';
import { useDispatch } from 'react-redux';
import ProductsReducer from '../store/reducers/products.reducer';
import { addProduct, editProduct, saveProduct } from '../store/actions/products.action';

SplashScreen.preventAutoHideAsync();

const SuperLista = ({ navigation, props }) => {

  const [fontsLoaded] = useFonts({
    'OpenSansRegular': require("../../assets/fonts/OpenSansRegular.ttf"),
    'QicksandBold': require("../../assets/fonts/OpenSansBold.ttf"),
    'QickSandMedium': require('../../assets/fonts/QuicksandMedium.ttf'),
    'OpenSansBold': require('../../assets/fonts/OpenSansBold.ttf'),

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  const [products, setProducts] = useState([]);
  const [buttonViewAdd, setButtonViewAdd] = useState(true);
  const [productSelectToEdit, setProductSelectToEdit] = useState({});
  const [productSelectToDel, setProductSelectToDel] = useState({});
  const [modalDelVisible, setModalDelVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);


  const dispatch = useDispatch() 

  /* useEffect(() => {
    dispatch(addProduct(products))
  }, [products]) */
  
  function onAddProd(value) {
    setProducts(() => [...products, value]);
    dispatch(addProduct(value))
  }

  const onEditProd = (value) => {
    setProducts(value)
    setModalEditVisible(false)
    dispatch(editProduct(value))

  };
  
  const saveListName = (nameList) => {
    dispatch(saveProduct(products, nameList))
  }


  const onDeleteProd = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    setModalDelVisible(false);

  };

  const onCancelModal = () => {
    setModalDelVisible(false);
  };


  const removeProd = (productSelect) => {
    setProductSelectToDel(productSelect);
    setModalDelVisible(true);

  };

  const editProd = (productId) => {

    const updatedProducts = products.find((product) => product.id === productId);
    setProductSelectToEdit(updatedProducts);
    setModalEditVisible(true);

  };



  const renderInputs = () => {

    setButtonViewAdd(false)

  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>

      <>
        <Header
          products={products}
          removeProd={removeProd}
          editProd={editProd}
          modalEditVisible={modalEditVisible}
          modalDelVisible={modalDelVisible}
          navigation={navigation}
        />

        <View style={styles.addItemButton}>

          {!buttonViewAdd && (

            <>
              <ProdAdd
                products={products}
                onAddProd={onAddProd}
                saveListName={saveListName}
              />

              <ProdEdit
                products={products}
                productSelectToEdit={productSelectToEdit}
                modalEditVisible={modalEditVisible}
                onEditProd={onEditProd}
              />

              <ProdDel
                productSelectToDel={productSelectToDel}
                modalDelVisible={modalDelVisible}
                onDeleteProd={onDeleteProd}
                onCancelModal={onCancelModal}
              />
            </>

          )}

          {buttonViewAdd && (

            <Buttons style={styles.buttonAdd} onPress={renderInputs}>+</Buttons>

          )}

        </View>

      </>
    </SafeAreaView >
  )
}

export default SuperLista

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#4B8A08',

  },
  buttonAdd: {
    width: 50,
    height: 50,
    borderRadius: 50,

    alignSelf: "center",
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: height * 0.05,
  },
  addItemButton: {
    flexDirection: 'row',
    position: "absolute",
    bottom: height * 0.01,
    alignSelf: "center",
  },
  inputStyle: {
    flex: 1,
  },

});
