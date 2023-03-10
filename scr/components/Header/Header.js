import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import Buttons from '../Button/Button';
import Table from "../Table/Table";
import Input from "../Input/Input"
import ProductList from "../ProductList/ProductList"
import Footer from '../Footer/Footer';

const Header = ({ changeScreen, products, removeProd, editProd, prodTotal, modalEditVisible, modalDelVisible }) => {
  /* 
  products && handleSearchProduct() */

  const [searchProduct, setSearchProduct] = useState("");
  const [viewSearchProducts, setViewSearchProducts] = useState([]);

  useEffect(() => {

    setViewSearchProducts(products.filter((product) => product.nameProd.includes(searchProduct)))

    modalEditVisible || modalDelVisible ? setSearchProduct("") : searchProduct

  }, [searchProduct, editProd, removeProd])





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
  })




  return (
    <>

      <View style={isPortrait ? styles.header : styles.headerLandscape}>

        <Text style={isPortrait ? styles.logo : styles.logoLdscp}>SUPERLISTA</Text>

        {isPortrait &&
          <View style={styles.about}>
            <Buttons onPress={changeScreen}>About</Buttons>
          </View>
        }
        <Input style={styles.search}
          value={searchProduct}
          onChangeText={setSearchProduct}
          placeholder={"Búsqueda"}
        />
      </View>

      <Table products={products} isPortrait={isPortrait} />
      <ProductList products={!searchProduct ? products : viewSearchProducts} removeProd={removeProd} editProd={editProd} prodTotal={prodTotal} />
      <Footer />
    </>
  );

};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#4B8A08',
    marginTop: height * 0.05,
  },
  headerLandscape: {
    marginTop: height * 0.02,
  },
  about: {
    alignSelf: "flex-start",

  },
  logo: {
    color: "#fff",
    textAlign: 'center',
    fontFamily: "QicksandBold",
    fontSize: 20,
  },
  logoLdscp: {
    color: "#fff",
    textAlign: 'center',
    fontFamily: "QicksandBold",
    fontSize: 30,
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