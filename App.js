import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Input, ProductList, Buttons, ModalDel, ModalEmptyImput } from './scr/components/Index';


import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Qicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'QickSand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }

  }, [fontsLoaded])

  const [products, setProducts] = useState([]);
  const [nameProd, setNameProd] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [buttonViewEdit, setButtonViewEdit] = useState(true);
  const [editProduct, setEditProduct] = useState(false);
  const [productSelect, setProductSelect] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEmptyVisible, setModalEmptyVisible] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [viewSearchProducts, setViewSearchProducts] = useState([]);



  const numberInputPriceHandler = inputText => {

    if (/^(?:\d+(?:\.\d*)?|\.\d+)?$/ .test(inputText)) {
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

  const handleSearchProduct = () => {

    const searchProducts = products.filter((product) => product.nameProd.includes(searchProduct))

    console.log(searchProducts)

  }

  const prodTotal = (item) => {

    return item.price * item.quantity;

  };

  const removeProd = (productSelect) => {

    setProductSelect(productSelect);
    setModalVisible(true);

  };

  const replaceProd = () => {

    const replaceProds = products.filter((product) => product.id !== productSelect.id)

    setProducts([...replaceProds, { id: productSelect.id, nameProd, price: parseFloat(price), quantity: parseInt(quantity) }].sort((a, b) => a.id - b.id));

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

  };

  const checkEmptyInput = () => {

    !nameProd.trim() || !price.trim() /* || price === "." */ || !quantity.trim()
      ?
      modalEmptyView()
      :
      editProduct ? replaceProd() : handleAddProduct()

  };

  const renderInputs = () => {

    setButtonViewEdit(false)

  };

  const onCancelModal = () => {

    setModalVisible(!modalVisible);

  };

  const onDeleteModal = (productId) => {

    setModalVisible(false);
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);

  };

  const modalEmptyView = () => {

    setModalEmptyVisible(true);

  };

  const onCancelModalCheck = () => {

    setModalEmptyVisible(false);
  };

  return (

    <View style={styles.container}>

      <Header products={products} searchProduct={searchProduct} onChangeText={setSearchProduct} handleSearchProduct={searchProduct && handleSearchProduct()} />

      <ProductList products={products} removeProd={removeProd} editProd={editProd} prodTotal={prodTotal} />

      <ModalEmptyImput
        modalEmptyVisible={modalEmptyVisible}
        onCancelModalCheck={onCancelModalCheck}
      />

      <ModalDel
        modalVisible={modalVisible}
        productSelect={productSelect}
        onCancelModal={onCancelModal}
        onDeleteModal={onDeleteModal}
      />

      <View style={styles.addItemButton}>

        {!buttonViewEdit && (

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

        {buttonViewEdit && (

          <Buttons style={styles.buttonAdd} onPress={renderInputs}>+</Buttons>

        )}

      </View>

    </View>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 35,
  },
  buttonAdd: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#6ca115ef",
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: "center",
  },
  addItemButton: {
    flexDirection: 'row',
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    margin: 6,
  },
  inputStyle: {
    flex: 1,
  },

});
