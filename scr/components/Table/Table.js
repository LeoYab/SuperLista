import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native';



const Table = () => {

    return (
        <>
            <View style={styles.statusBar}>
                <Text style={styles.statusBarText}>PRODUCTOS AGREGADOS</Text>
                <Text style={styles.statusBarTextTotal}>TOTAL: ${totalGral().toFixed(2)}</Text>
            </View>
            <View style={styles.qntyTotal}>
                <Text style={styles.qntyTotalTExt}>Cantidad: {totalProd()} </Text>
            </View>

            <View >
                <FlatList
                    data={[DATA]}
                    renderItem={headTable}
                />
            </View>
        </>
    )   
}

const styles = StyleSheet.create({
    statusBar: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#4B8A08',
        height: 30,
        marginTop: 6,
        marginHorizontal: 6,
        borderRadius: 10,
      },
      statusBarText: {
        color: "#fff",
        marginTop: 6,
        marginLeft: 10,
        marginRight: 10,
      },
      statusBarTextTotal: {
        color: "#fff",
        marginTop: 6,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: "bold",
      },
      qntyTotal: {
        backgroundColor: "#69a30a",
        width: "23%",
        marginLeft: 20,
        marginBottom: 6,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      },
      qntyTotalTExt: {
        color: "white",
        alignSelf: "center",
        marginHorizontal: 2,
      },
});


export default Table;