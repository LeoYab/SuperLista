import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import Buttons from './scr/components/Button/Button';
import Header from './scr/components/Header/Header';



export default function App() {



  const Separator = () => <View style={styles.separator} />;

  const [products, setProducts] = useState([]);
  const [nameProd, setNameProd] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [buttonViewEdit, setButtonViewEdit] = useState(true);
  const [editProduct, setEditProduct] = useState(false);
  const [productSelect, setProductSelect] = useState({});



  const handleAddProduct = () => {

    setProducts((product) => [...product, { id: Date.now(), nameProd, price: parseFloat(price), quantity: parseInt(quantity) }]);
    setNameProd('');
    setPrice('');
    setQuantity('');

  };


  const totalGral = () => {
    return products.reduce((acc, product) => {
      return acc + prodTotal(product);

    }, 0);
  };

  const prodTotal = (item) => {
    return item.price * item.quantity;
  }

  const totalProd = () => {

    return products.length;
  }

  const removeProd = (productId) => {

    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const replaceProd = () => {

    const replaceProds = products.filter((product) => product.id !== productSelect.id)

    setProducts([...replaceProds, { id: productSelect.id, nameProd, price: parseFloat(price), quantity: parseInt(quantity) }].sort((a, b) => a.id - b.id));



    setEditProduct(false);
    setNameProd('');
    setPrice('');
    setQuantity('');

  }


  const editProd = (productId) => {

    const updatedProducts = products.find((product) => product.id === productId);
    setNameProd(updatedProducts.nameProd);
    setPrice(updatedProducts.price.toString());
    setQuantity(updatedProducts.quantity.toString());
    setProductSelect(updatedProducts);
    setEditProduct(true);


  };



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




  const renderProduct = ({ item }) => {
    return (
      <View style={styles.productTable}>
        <Text style={styles.productName}>{item.nameProd}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <Text style={styles.productQuantity}>{item.quantity}</Text>
        <Text style={styles.productTotal}>${prodTotal(item).toFixed(2)}</Text>

        <View style={styles.editDelProd}>
          <Pressable style={styles.editButtonProd} onPress={() => { editProd(item.id) }}>
            <Text>Edit</Text>
          </Pressable>
          <Pressable style={styles.delButtonProd} onPress={() => { removeProd(item.id) }}>
            <Text>Del</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const renderInputs = () => {

    setButtonViewEdit(false)

  };

  return (
    <View style={styles.container}>
{/*       <View style={styles.header}>
        <Text style={styles.logo}>SUPERLISTA</Text>
        <TextInput style={styles.search} placeholder="Buscar" />
      </View>

      <Separator />

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
      </View> */}

<Header />

      <View style={styles.tableList}>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>



      <View style={styles.addItemButton}>

        {!buttonViewEdit && (
          <>
            <View style={styles.inputStyle}>
              <TextInput onChangeText={setNameProd} value={nameProd} placeholder="Producto" />
            </View>

            <View style={styles.inputStyle}>
              <TextInput onChangeText={setPrice} value={price} placeholder="Precio" />
            </View>

            <View style={styles.inputStyle}>
              <TextInput onChangeText={setQuantity} value={quantity} placeholder="Cantidad" />
            </View>

            <Buttons onPress={editProduct ? replaceProd : handleAddProduct}>+</Buttons>
          </>
          )}
          
{buttonViewEdit && (

<Buttons style={styles.buttonAdd} onPress={renderInputs}>+</Buttons>

  )}
      </View>

      </View>

  );
}

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  header: {
    backgroundColor: '#4B8A08',
  },
  logo: {
    color: "#fff",
    textAlign: 'center',
    paddingTop: 15,
  }, */
  /* statusBar: {
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
  },*/
  tableList: {
    backgroundColor: "orange",
    height: "65%",
  },
  productTable: {
    flexDirection: 'row',
    backgroundColor: "green",
    marginStart: 5,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
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
    textAlign: "right",
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
  separator: {
    borderBottomColor: 'red',
    borderBottomWidth: 3,
  },
  /* search: {
    color: "grey",
    backgroundColor: "#fff",
    width: 400,
    alignSelf: "center",
    borderRadius: 2,
    margin: 15,
  }, */

  buttonAdd: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#6ca115ef",
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: "center",
  },
  addItemButton: {
    flexDirection: 'row',
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    margin: 6,
  },
  inputStyle: {
    flex: 1,
  },


});
