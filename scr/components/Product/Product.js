import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Buttons from '../Button/Button'
import Colors from '../../constants/Colors'

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
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    productTable: {
        flexDirection: 'row',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
    },
    productName: {
        flex: 1.8,
        marginStart: width * 0.03,
        textAlign: "left",
        alignSelf: "center",
        fontFamily: "OpenSansRegular",
    },
    productPrice: {
        flex: 1.4,
        textAlign: "left",
        alignSelf: "center",
        fontFamily: "OpenSansRegular",
    },
    productQuantity: {
        flex: 0.9,
        textAlign: "left",
        alignSelf: "center",
        fontFamily: "OpenSansRegular",
    },
    productTotal: {
        flex: 1,
        textAlign: "left",
        alignSelf: "center",
        fontFamily: "OpenSansRegular",
    },
    editDelProd: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginEnd: width * 0.03,
    },
    editButtonProd: {
        backgroundColor: Colors.btnPrimary,
        borderRadius: 5,
        marginRight: 1,
        alignSelf: "center",
        width: 30,
        height: 30,
    },
    delButtonProd: {
        backgroundColor: Colors.btnSecondary,
        borderRadius: 5,
        marginLeft: 1,
        alignSelf: "center",
        width: 30,
        height: 30,
    },

})

export default Product