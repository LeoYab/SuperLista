import { StyleSheet, Text, View, Pressable } from 'react-native'



const Product = ({ style, item, editProd, removeProd, prodTotal }) => {

    return (
        <View style={[styles.productTable, style]}>
            <Text style={styles.productName}>{item.nameProd}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            <Text style={styles.productQuantity}>{item.quantity}</Text>
            <Text style={styles.productTotal}>${prodTotal(item).toFixed(2)}</Text>

            <View style={styles.editDelProd}>
                <Pressable style={styles.editButtonProd} onPress={() => { editProd(item.id) }}>
                    <Text>Edit</Text>
                </Pressable>
                <Pressable style={styles.delButtonProd} onPress={() => { removeProd(item) }}>
                    <Text>Del</Text>
                </Pressable>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    productTable: {
        flexDirection: 'row',
        marginStart: 5,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
    },

    productName: {
        flex: 1.8,
        textAlign: "left",
    },
    productPrice: {
        flex: 1,
        textAlign: "left",
    },
    productQuantity: {
        flex: 1.2,
        textAlign: "center",
    },
    productTotal: {
        flex: 1,
        textAlign: "left",
    },
    editDelProd: {
        flex: 1.2,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginLeft: 4,
    },
    editButtonProd: {
        borderColor: "red",
        borderWidth: 1,
    },
    delButtonProd: {
        borderColor: "red",
        borderWidth: 1,
    },

})

export default Product