import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { Octicons, Feather } from '@expo/vector-icons'

import Colors from '../../constants/Colors'

const Product = ({ style, item, editProd, removeProd, filter }) => {

    const prodTotal = (item) => {
        return item.price * item.quantity;
    };

    return (

        <View style={[styles.productTable, style]}>
            <Text style={styles.productName}>{item.icon + " " + item.nameProd}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            <Text style={styles.productQuantity}>{item.quantity}</Text>
            <Text style={styles.productTotal}>${prodTotal(item).toFixed(2)}</Text>

            {!filter &&

                <View style={styles.editDelProd}>

                    <TouchableOpacity style={styles.editButtonProd} onPress={() => { editProd(item.id) }}>
                        <Feather name="edit" size={22} color={Colors.btnPrimary} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.delButtonProd} onPress={() => { removeProd(item) }}>
                        <Octicons name="trash" size={22} color={'grey'} />

                    </TouchableOpacity>

                </View>
            }
        </View>
    )
}

const { width } = Dimensions.get("window");

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
        justifyContent: "space-around",
        marginEnd: width * 0.03,
        gap: 10,
    },
    editButtonProd: {
        alignSelf: "center",
        padding: 4,
        borderRadius: 5,
        paddingVertical: 3,
    },
    delButtonProd: {
        alignSelf: "center",
        padding: 4,
        paddingVertical: 3,
        borderRadius: 5,
    },

})

export default Product