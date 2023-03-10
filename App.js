import { StyleSheet, View, Dimensions, SafeAreaView } from 'react-native';
import { useEffect, useState, useCallback } from 'react';

import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen';

import { Header, Input, Buttons, ModalDel, ModalEmptyImput, ModalEdit } from './scr/components/Index';
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
  const onPortrait = () =>{

    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => setIsPortrait(onPortrait())

    useEffect(() =>{

      Dimensions.addEventListener("change", statePortrait)

      return () =>{

        Dimensions.addEventListener("change", statePortrait)
      }
    });
  
  const [products, setProducts] = useState([]);
  const [nameProd, setNameProd] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [buttonViewAdd, setButtonViewAdd] = useState(true);
  const [editProduct, setEditProduct] = useState(false);
  const [productSelect, setProductSelect] = useState({});
  const [modalDelVisible, setModalDelVisible] = useState(false);
  const [modalEmptyVisible, setModalEmptyVisible] = useState(false);
  /* const [searchProduct, setSearchProduct] = useState(""); */
/* const [viewSearchProducts, setViewSearchProducts] = useState([]); */
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [aboutView, setAboutView] = useState(false);
/* 
useEffect(() => {
  first

  return () => {
    second
  }
}, [third])
 */
  const changeScreen = () => {
    setAboutView(!aboutView)
  }

  const numberInputPriceHandler = inputText => {


    if (/^(?:\d+(?:\.\d*)?|\.\d+)?$/.test(inputText)) {

      setPrice(inputText);

    }

  }


  const numberInputQuantityHandler = inputText => {

    setQuantity(inputText.replace(/[^0-9]/g, ''))

  }


  const handleAddProduct = () => {

    setProducts((product) => [...product, { id: Date.now(), nameProd, price: parseFloat(price), quantity: parseInt(quantity) }]);
    setNameProd('');
    setPrice('');
    setQuantity('');

  };

/*   const handleSearchProduct = () => {

    setViewSearchProducts(products.filter((product) => product.nameProd.includes(searchProduct)))



  } */

  const prodTotal = (item) => {

    return item.price * item.quantity;

  };

  const removeProd = (productSelect) => {

    setProductSelect(productSelect);
    setModalDelVisible(true);

  };

  const replaceProd = () => {

    const replaceProds = products.filter((product) => product.id !== productSelect.id)

    setProducts([...replaceProds, { id: productSelect.id, nameProd, price: parseFloat(price), quantity: parseInt(quantity) }].sort((a, b) => a.id - b.id));
    setModalEditVisible(false);
    setEditProduct(false);
    setNameProd('');
    setPrice('');
    setQuantity('');

  };







  const editProd = (productId) => {

    const updatedProducts = products.find((product) => product.id === productId);
    setNameProd(updatedProducts.nameProd);
    setPrice(updatedProducts.price.toString());
    setQuantity(updatedProducts.quantity.toString());
    setProductSelect(updatedProducts);
    setEditProduct(true);
    setModalEditVisible(true);

  };








  const checkEmptyInput = () => {

    !nameProd.trim() || !price.trim() || !quantity.trim()
      ?
      modalEmptyView()
      :
      editProduct ? replaceProd() : handleAddProduct()

  };

  const renderInputs = () => {

    setButtonViewAdd(false)



  };

  const onCancelModal = () => {

    setModalDelVisible(!modalDelVisible);

  };

  const onDeleteModal = (productId) => {

    setModalDelVisible(false);
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);

  };

  const modalEmptyView = () => {

    setModalEmptyVisible(true);


  };

  const onCancelModalCheck = () => {

    setModalEmptyVisible(false);
  };


  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView  style={styles.container} onLayout={onLayoutRootView}>

      {!aboutView && (
        <>
          <Header changeScreen={changeScreen} products={products} removeProd={removeProd} editProd={editProd} prodTotal={prodTotal} modalEditVisible={modalEditVisible} modalDelVisible={modalDelVisible} /* searchProduct={searchProduct} onChangeText={setSearchProduct} *//*  handleSearchProduct={searchProduct && handleSearchProduct()} */ />

        

          <ModalEmptyImput
            modalEmptyVisible={modalEmptyVisible}
            onCancelModalCheck={onCancelModalCheck}
          />

          <ModalDel
            modalDelVisible={modalDelVisible}
            productSelect={productSelect}
            onCancelModal={onCancelModal}
            onDeleteModal={onDeleteModal}
          />


          {modalEditVisible && (

            <ModalEdit
              nameProd={nameProd}
              price={price}
              quantity={quantity}
              setNameProd={setNameProd}
              numberInputPriceHandler={numberInputPriceHandler}
              numberInputQuantityHandler={numberInputQuantityHandler}
              editProduct={editProduct}
              checkEmptyInput={checkEmptyInput}
            />

          )}

          <View style={styles.addItemButton}>

            {!buttonViewAdd && (

              <>
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
              </>

            )}

            {buttonViewAdd && (

              <Buttons style={styles.buttonAdd} onPress={renderInputs}>+</Buttons>

            )}

          </View>
        </>
      )}

      {aboutView && 
        <>
          <About changeScreen={changeScreen} />
        </>
      }

    </SafeAreaView>
  )
};
const {height, width} = Dimensions.get("window");

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
