import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import Buttons from '../Button/Button';
import Table from "../Table/Table";
import Input from "../Input/Input"
import ProductList from "../ProductList/ProductList"
import Footer from '../Footer/Footer';
import { Dropdown } from 'react-native-element-dropdown';
/* import { CATEGORIES } from '../../categories/categories' */
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions/category.action';

const Header = ({ products, removeProd, editProd, prodTotal, modalEditVisible, modalDelVisible, navigation }) => {

  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch() 

  const [searchProduct, setSearchProduct] = useState("");
  const [viewSearchProducts, setViewSearchProducts] = useState([]);
  const [value, setValue] = useState(null);

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







  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate('Category', {
/*       categoryId: item.id, */
      categoryName: item.title,
      products: products,

    })


  }





  return (
    <>

      <View style={isPortrait ? styles.header : styles.headerLandscape}>

        <Text style={isPortrait ? styles.logo : styles.logoLdscp}>SUPERLISTA</Text>

        {/*   {isPortrait &&
          <View style={styles.Category}>
            <Buttons onPress={handleSelectedCategory}>Category</Buttons>
          </View>
        } */}
        <View style={styles.searchContainer}>
          <Input style={styles.search}
            value={searchProduct}
            onChangeText={setSearchProduct}
            placeholder={"Búsqueda"}
          />

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={categories}
            search
            maxHeight={300}
            labelField="title"
            valueField="id"
            placeholder="Por categoría"
            searchPlaceholder="Buscar..."
            value={value}
            onChange={item => {
              setValue(item);
              handleSelectedCategory(item)
            }}
          />
        </View>
      </View>

      <Table products={products} isPortrait={isPortrait} />

      <ProductList products={!searchProduct
        ?
        products
        :
        viewSearchProducts}
        removeProd={removeProd}
        editProd={editProd}
        prodTotal={prodTotal}
      />

      <Footer />
    </>
  );

};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#4B8A08',
    /*     marginTop: height * 0.05, */
  },
  headerLandscape: {
    marginTop: height * 0.02,
  },
  /*   Category: {
      alignSelf: "flex-start",
    }, */
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
  searchContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  search: {
    backgroundColor: "#fff",
    width: width * 0.60,
    height: height * 0.04,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    marginVertical: 15,
    paddingLeft: 4,
  },
  dropdown: {
    width: width * 0.30,

    height: height * 0.04,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,

    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    backgroundColor: "#6ca115ef",

  },

  placeholderStyle: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 2,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#fff"
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Header;