import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCategory } from '../../store/actions/category.action';
import Table from "../Table/Table";
import Input from "../Input/Input";
import ProductList from "../ProductList/ProductList";
import Footer from '../Footer/Footer';



const Header = ({ products, removeProd, editProd, prodTotal, modalEditVisible, modalDelVisible, navigation, nameList }) => {

  const categories = useSelector(state => state.categories.categories)


  const dispatch = useDispatch()
  const [searchProduct, setSearchProduct] = useState("");
  const [viewSearchProducts, setViewSearchProducts] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(null)
  }, [value])


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
      categoryName: item.title,
    })

  }


  return (
    <>

      <View style={isPortrait ? styles.header : styles.headerLandscape}>

        <View style={styles.searchContainer}>

          <TouchableOpacity>

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              itemTextStyle={styles.itemTextStyle}
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
                handleSelectedCategory(item);
              }}
            />
          </TouchableOpacity>
          <Input style={styles.search}
            value={searchProduct}
            onChangeText={setSearchProduct}
            placeholder={"Búsqueda"}
          />
        </View>
      </View>

      <Table
        products={products}
        nameList={nameList}
        isPortrait={isPortrait} />

      <ProductList
        products={!searchProduct
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
  },
  headerLandscape: {
    marginTop: height * 0.02,
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
  searchContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  search: {
    backgroundColor: "#fff",
    width: width * 0.60,
    height: height * 0.04,
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    marginVertical: 15,
    paddingLeft: 4,
  },
  dropdown: {
    width: width * 0.30,
    height: height * 0.04,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomColor: "#fff",
    backgroundColor: "#6ca115ef",
  },
  itemTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 10,
    tintColor: "white",
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 4,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 2,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});

export default Header;