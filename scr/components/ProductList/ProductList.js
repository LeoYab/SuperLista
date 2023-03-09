import { StyleSheet, FlatList, View, Dimensions } from 'react-native'
import Product from '../Product/Product';


const ProductList = ({ products, removeProd, editProd, prodTotal }) => {


    const renderProduct = ({ item, index }) => {

        return <Product
            style={{ backgroundColor: index % 2 ? '#fff' : '#14e71021' }}
            item={item}
            removeProd={removeProd}
            editProd={editProd}
            prodTotal={prodTotal}
        />;
    }

    return (
        <View style={styles.tableList}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const {height, width} = Dimensions.get("window");
const styles = StyleSheet.create({

    tableList: {
        height: height,
        backgroundColor:"#fff",
        borderBottomColor:"#fff",
  
    },
})

export default ProductList