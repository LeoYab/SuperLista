import { StyleSheet, View, Dimensions, SafeAreaView } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';



import { Header, ProdAdd, ProdEdit, Buttons, ProdDel } from '../components/Index';
import { useDispatch, useSelector } from 'react-redux';
import ProductsReducer from '../store/reducers/products.reducer';
import { addProduct, editProduct, saveProducts, productsInTable, agregarProductoUsuario } from '../store/actions/products.action';
import { category } from '../store/actions/category.action';


const SuperLista = ({ navigation, props }) => {

  const user = useSelector(state => state.auth.userId);
  const prod = useSelector(state => state.products.users[user]?.products || [])


  const [products, setProducts] = useState(prod);
  const [buttonViewAdd, setButtonViewAdd] = useState(true);
  const [productSelectToEdit, setProductSelectToEdit] = useState({});
  const [productSelectToDel, setProductSelectToDel] = useState({});
  const [modalDelVisible, setModalDelVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
  
    dispatch(agregarProductoUsuario(user));
    dispatch(category())

  }, [])


  useEffect(() => {
    /*  dispatch(addProduct(products)) */
    dispatch(agregarProductoUsuario(user, products))

    /* console.log("Superlista", prod, "Productos", products) */
  }, [products])

  function onAddProd(value) {
    setProducts(() => [...products, value]);
    /* console.log({idusr: user, products: [...products, value]}) */
  }

  const onEditProd = (value) => {
    setProducts(value)
    setModalEditVisible(false)
    /*  dispatch(editProduct(value)) */

  };

  /*  const saveListName = (nameList) => {
     dispatch(saveProducts(products, nameList))
   }
  */

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
    setButtonViewAdd(false);

  };

  const editProd = (productId) => {

    const updatedProducts = products.find((product) => product.id === productId);
    setProductSelectToEdit(updatedProducts);
    setModalEditVisible(true);
    setButtonViewAdd(false);

  };



  const renderInputs = () => {

    setButtonViewAdd(false)

  };


  return (
    <SafeAreaView style={styles.container} >
      
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
              /* saveListName={saveListName} */
              />

              <ProdEdit
                products={products}
                productSelectToEdit={productSelectToEdit}
                modalEditVisible={modalEditVisible}
                onEditProd={onEditProd}
              />

              <ProdDel
                itemToDel={productSelectToDel}
                modalDelVisible={modalDelVisible}
                onDeleteItem={onDeleteProd}
                onCancelModal={onCancelModal}
              />
            </>

          )}

          {buttonViewAdd && (

            <Buttons style={styles.buttonAdd} onPress={renderInputs}>+</Buttons>

          )}

        </View>

    
    </SafeAreaView >
  )
}

export default SuperLista

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({

  container: {
    flex: 1,
    /*  backgroundColor: '#4B8A08', */

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
