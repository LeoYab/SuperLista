import { StyleSheet, Text, View, FlatList } from 'react-native';
import TotalGral from '../TotalGral/TotalGral';

const Separator = () => <View style={styles.separator} />;

const Table = ({ products }) => {

  const DATA = ['PRODUCTO', 'PRECIO', 'CANTIDAD', 'TOTAL'];

  const headTable = ({ item }) => {
    return (
      <View style={styles.productTable}>
        <Text style={styles.productName}>{item[0]}</Text>
        <Text style={styles.productPrice}>{item[1]}</Text>
        <Text style={styles.productQuantity}>{item[2]}</Text>
        <Text style={styles.productTotal}>{item[3]}</Text>
        <View style={styles.editDelProd}>
        </View>
      </View>
    );
  };


  return (
    <>
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>PRODUCTOS AGREGADOS</Text>
        <TotalGral products={products} />
      </View>
      <View style={styles.qntyTotal}>
        <Text style={styles.qntyTotalTExt}>Cantidad: {products.length} </Text>
      </View>

      <View >
        <FlatList
          data={[DATA]}
          renderItem={headTable}
        />
      </View>
      <Separator />
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
  productTable: {
    flexDirection: 'row',
    marginStart: 5,
    paddingVertical: 6,
  },
  productName: {
    flex: 1.8,
    textAlign: "left",
    fontWeight:"bold"
  },
  productPrice: {
    flex: 1,
    textAlign: "left",
    fontWeight:"bold"
  },
  productQuantity: {
    flex: 1.2,
    textAlign: "center",
    fontWeight:"bold"
  },
  productTotal: {
    flex: 1,
    textAlign: "left",
    fontWeight:"bold"
  },
  editDelProd: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: "space-around",
    marginLeft: 4,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
   
  },
});


export default Table;