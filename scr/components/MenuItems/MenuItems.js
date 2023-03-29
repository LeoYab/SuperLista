import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addProduct } from '../../store/actions/products.action';
import { getProducts } from '../../store/actions/getproducts.action';
import { listProducts } from '../../store/actions/products.action';

const MenuItems = ({navigation}) => {
    const [value, setValue] = useState(null);
    const dispatch = useDispatch();
    dispatch(getProducts())
 /*    useEffect(() => {
        dispatch(getProducts())
        
    }, [])
 */
    const getProduct = useSelector(state => state.getProducts.productsGet)
  
    const list = getProduct.map(list => list).flat();
   
  


  



    const handleSelectedList= (item) => {

    dispatch(listProducts(item))
        navigation.navigate('ListProducts',{
            nameList: item.nameList,
        }

        )}
    


    return(
  
      <DrawerContentScrollView>
           <Text>Mis listas</Text>
  
   <Dropdown
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={list}
                      search
                      maxHeight={300}
                      labelField="nameList"
                      valueField="id"
                      placeholder="Categoría"
                      searchPlaceholder="Buscar..."
                      value={value}
                      onChange={item => {
                        setValue(item);
                        handleSelectedList(item)
                      }}
                  /> 
      </DrawerContentScrollView>
  
    )
  }
  
  export default MenuItems

  const { width } = Dimensions.get("window");
  
  const styles = StyleSheet.create({
  
    dropdown: {
      width: 100,
      borderWidth: 2,
      borderColor: 'green',
      paddingHorizontal: width * 0.02,
      marginVertical: 2,
      borderRadius: 5,
      backgroundColor: "white",
      /* fontFamily: "OpenSansRegular", */
      maxWidth: width * 0.245,
      height: 32,
      fontSize: 10,
  },  
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 13,
    color: "grey",
    marginLeft: 1,
  
  },
  iconStyle: {
    width: 20,
    height: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 12,
  
  },
  })