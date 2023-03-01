import { StyleSheet, Text, View } from 'react-native'
import Buttons  from '../Button/Button'


const Product = ({ style, item, editProd, removeProd, prodTotal }) => {

    return (
        <View style={[styles.productTable, style]}>
            <Text style={styles.productName}>{item.nameProd}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            <Text style={styles.productQuantity}>{item.quantity}</Text>
            <Text style={styles.productTotal}>${prodTotal(item).toFixed(2)}</Text>

            <View style={styles.editDelProd}>
                <Buttons style={styles.editButtonProd} onPress={() => { editProd(item.id) }}>
                    <Text>Edit</Text>
                </Buttons>
                <Buttons style={styles.delButtonProd} onPress={() => { removeProd(item) }}>
                    <Text>Del</Text>
                </Buttons>
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
        alignSelf:"center",
    },
    productPrice: {
        flex: 1,
        textAlign: "left",
        alignSelf:"center",
    },
    productQuantity: {
        flex: 1.2,
        textAlign: "center",
        alignSelf:"center",
    },
    productTotal: {
        flex: 1,
        textAlign: "left",
        alignSelf:"center",
    },
    editDelProd: {
        flex: 1.2,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginLeft: 4,
    },
    editButtonProd: {
        backgroundColor:"#69a30a",
        borderRadius:5,
        padding:4,
        alignSelf:"center",
    },
    delButtonProd: {
        backgroundColor:"grey",
        borderRadius:5,
        padding:4,
        alignSelf:"center",
    },

})

export default Product