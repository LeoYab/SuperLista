import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import Buttons from '../Button/Button';
import Table from "../Table/Table";
import Input from "../Input/Input"
import ProductList from "../ProductList/ProductList"

const Header = ({ changeScreen,  products , removeProd, editProd, prodTotal, modalEditVisible, modalDelVisible }) => {
  /* 
  products && handleSearchProduct() */

  const [searchProduct, setSearchProduct] = useState("");
  const [viewSearchProducts, setViewSearchProducts] = useState([]);

useEffect(() => {

  setViewSearchProducts(products.filter((product) => product.nameProd.includes(searchProduct)) )

  modalEditVisible || modalDelVisible ? setSearchProduct("") : searchProduct

}, [searchProduct , editProd, removeProd ])

 

/*     
    console.log(searchProduct)
    console.log(viewSearchProducts)  */



  return (
    <>

      <View style={styles.header}>
        <Buttons style={styles.about} onPress={changeScreen}>About</Buttons>
        <Text style={styles.logo}>SUPERLISTA</Text>

        <Input
          value={searchProduct}
          onChangeText={setSearchProduct}
          placeholder={"Búsqueda"}
        />
        {/* <TextInput style={styles.search} placeholder="Buscar" /> */}
      </View>

      <Table products={products} />

      <ProductList products={!searchProduct ? products : viewSearchProducts } removeProd={removeProd} editProd={editProd} prodTotal={prodTotal} />
    </>
  );
};

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#4B8A08',
  },
  about: {
    alignSelf: "flex-start"
  },
  logo: {
    color: "#fff",
    textAlign: 'center',
    paddingTop: 15,
    fontFamily: "QicksandBold",
    fontSize:20,
  },
  search: {
    color: "grey",
    backgroundColor: "#fff",
    width: 400,
    alignSelf: "center",
    borderRadius: 2,
    margin: 15,
  },
});

export default Header;