import { StyleSheet, FlatList, View, Text, Dimensions } from 'react-native'

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
            {!products.length ? <Text style={styles.textTable}>LISTO PARA CARGAR PRODUCTOS</Text> : null}
                <FlatList
                    data={products}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item.id.toString()}
                />
          
        </View>
    )
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({

    tableList: {
        flex: 1,
        backgroundColor: "#fff",

    },
    textTable: {
        top: height * 0.3,
        alignSelf: "center",
    },
})

export default ProductList