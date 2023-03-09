import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import Buttons from '../Button/Button';
import Table from "../Table/Table";
import Input from "../Input/Input"
import ProductList from "../ProductList/ProductList"

const Header = ({ changeScreen, products, removeProd, editProd, prodTotal, modalEditVisible, modalDelVisible }) => {
  /* 
  products && handleSearchProduct() */

  const [searchProduct, setSearchProduct] = useState("");
  const [viewSearchProducts, setViewSearchProducts] = useState([]);

  useEffect(() => {

    setViewSearchProducts(products.filter((product) => product.nameProd.includes(searchProduct)))

    modalEditVisible || modalDelVisible ? setSearchProduct("") : searchProduct

  }, [searchProduct, editProd, removeProd])



  /*     
      console.log(searchProduct)
      console.log(viewSearchProducts)  */



  return (
    <>

      <View style={styles.header}>
<View  style={styles.about}>
          <Buttons onPress={changeScreen}>About</Buttons>
          </View>
          <Text style={styles.logo}>SUPERLISTA</Text>

        <Input style={styles.search}
          value={searchProduct}
          onChangeText={setSearchProduct}
          placeholder={"Búsqueda"}
        />
        {/* <TextInput style={styles.search} placeholder="Buscar" /> */}
      </View>

      <Table products={products} />

      <ProductList products={!searchProduct ? products : viewSearchProducts} removeProd={removeProd} editProd={editProd} prodTotal={prodTotal} />
    </>
  );

};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#4B8A08',
    marginTop:height * 0.05,
  },
  about: {
alignSelf:"flex-start",

  },
  logo: {
    color: "#fff",
    textAlign: 'center',
    fontFamily: "QicksandBold",
    fontSize: width * 0.05,
  },
  search: {
    backgroundColor: "#fff",
    width: width * 0.95,
    height: height * 0.04,
    alignSelf: "center",
    borderRadius: 4,
    marginVertical: 15,
    paddingLeft: 4,

  },
});

export default Header;