import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

import TotalGral from '../TotalGral/TotalGral';

const Separator = () => <View style={styles.separator} />;

const Table = ({ products, filter }) => {


  const DATA = ['PRODUCTO', 'PRECIO', 'CANTIDAD', 'TOTAL'];

  const headTable = ({ item }) => {
    return (
      <View style={styles.productTable}>
        <Text style={styles.productName}>{item[0]}</Text>
        <Text style={styles.productPrice}>{item[1]}</Text>
        <Text style={styles.productQuantity}>{item[2]}</Text>
        <Text style={styles.productTotal}>{item[3]}</Text>
        {!filter && <View style={styles.editDelProd} /> }

      </View>
    );
  };


  return (
   
    <View style={styles.statusBarContainer}>
       {!filter && 
       <>
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>PRODUCTOS AGREGADOS</Text>
        <TotalGral style={styles.totalGral} products={products} />
      </View>
      <View style={styles.qntyTotal}>
        <Text style={styles.qntyTotalTExt}>Cantidad: {products.length} </Text>
      </View>
      </>
    }
      <View>
        <FlatList
          data={[DATA]}
          renderItem={headTable}
        />
      </View>
      <Separator />
    </View>
  )
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  statusBarContainer: {
    backgroundColor: "#fff"
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: '#4B8A08',
    height: height * 0.041,
    marginTop: 6,
    marginHorizontal: 6,
    borderRadius: 4,

  },
  statusBarText: {
    alignSelf: "center",
    color: "#fff",
    marginHorizontal: 10,
    fontSize: width * 0.035,
  },
  qntyTotal: {
    backgroundColor: "#69a30a",
    width: width * 0.25,
    marginLeft: width * 0.05,
    marginBottom: 6,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    paddingBottom: 2,
  },
  qntyTotalTExt: {
    color: "white",
    alignSelf: "center",
    marginHorizontal: 2,
    alignSelf: "center",
  },
  totalGral: {
    alignSelf: "center",
  },
  productTable: {
    flexDirection: 'row',
    paddingVertical: 6,
    backgroundColor: "#fff",
  },
  productName: {
    marginStart: width * 0.03,
    flex: 1.8,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: width * 0.035,
  },
  productNameLndsp: {
    marginStart: width * 0.03,
    flex: 1.8,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: width * 0.035,
  },
  productPrice: {
    flex: 1,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: width * 0.035,
  },
  productQuantity: {
    flex: 1.3,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: width * 0.035,
  },
  productTotal: {
    flex: 1,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: width * 0.035,
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