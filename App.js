import { StyleSheet, View, Dimensions, SafeAreaView } from 'react-native';
import { useEffect, useState, useCallback } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Header, ProdAdd, ProdEdit, Buttons, ProdDel } from './scr/components/Index';
import About from "./scr/screens/About";


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'OpenSansRegular': require("./assets/fonts/OpenSansRegular.ttf"),
    'QicksandBold': require("./assets/fonts/OpenSansBold.ttf"),
    'QickSandMedium': require('./assets/fonts/QuicksandMedium.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSansBold.ttf'),

  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  const [isPortrait, setIsPortrait] = useState(true);
  const onPortrait = () => {

    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => setIsPortrait(onPortrait())

  useEffect(() => {

    Dimensions.addEventListener("change", statePortrait)

    return () => {

      Dimensions.addEventListener("change", statePortrait)
    }
  });


  const [products, setProducts] = useState([]);
  const [buttonViewAdd, setButtonViewAdd] = useState(true);
  const [productSelectToEdit, setProductSelectToEdit] = useState({});
  const [productSelectToDel, setProductSelectToDel] = useState({});
  const [modalDelVisible, setModalDelVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [aboutView, setAboutView] = useState(false);


  const onAddProd = (value) => {
    setProducts(value)
  };

  const changeScreen = () => {
    setAboutView(!aboutView)
  };
  const onEditProd = (value) => {
    setProducts(value)
    setModalEditVisible(false)

  };

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


  const prodTotal = (item) => {

    return item.price * item.quantity;

  };

  const renderInputs = () => {

    setButtonViewAdd(false)

  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>

      {!aboutView && (
        <>
          <Header
            changeScreen={changeScreen}
            products={products}
            removeProd={removeProd}
            editProd={editProd}
            prodTotal={prodTotal}
            modalEditVisible={modalEditVisible}
            modalDelVisible={modalDelVisible}
          />

          <View style={styles.addItemButton}>

            {!buttonViewAdd && (

              <>
                <ProdAdd
                  products={products}
                  onAddProd={onAddProd}
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
      )}

      {
        aboutView &&
        <>
          <About changeScreen={changeScreen} />
        </>
      }
    </SafeAreaView >
  )
};


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
