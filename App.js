import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

const DATA = ['PRODUCTO', 'PRECIO', 'CANTIDAD', 'TOTAL'];

const Separator = () => <View style={styles.separator} />;



export default function App() {

  const [itemInputText, setItemInputText] = useState("");
  const [items, setItems] = useState([]);

  const prodIngr = (input) => {

    setItemInputText(input);

  };

  const addItem = () => {

setItems((itemArray) => [...itemArray, {id: Date.now(), value: itemInputText }]);

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>SUPERLISTA</Text>
        <TextInput style={styles.search} placeholder="Buscar" />
      </View>

      <Separator />

      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>PRODUCTOS AGREGADOS</Text>
      </View>

      <View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => <Text style={styles.headTable}>{item}</Text>}
        />
      </View>

      <View style={styles.tableList}>
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <Text>{itemData.item.value}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
         
      />
  
  </View>


      <View>
        <TextInput onChangeText={prodIngr} value={itemInputText} placeholder="Producto" />
      </View>

      <View>
        <Button style={styles.buttonAdd} color="#0B610B" title="+" onPress={addItem}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
  statusBar: {
    backgroundColor: '#4B8A08',
    height: 30,
    margin: 6,
    marginTop: 10,
    borderRadius: 10,
  },
  statusBarText: {
    color: "#fff",
    marginTop: 6,
    marginLeft: 10,
  },
  table: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'flex-start',
backgroundColor:"grey",
  },

  headTable: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 4,
    borderBottomColor: 'red',
    borderBottomWidth: 1.4,

  },
  headEditTable: {
    paddingRight: 6,
    paddingBottom: 4,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  tableList: {

    backgroundColor:"orange",
  },
  separator: {
    borderBottomColor: 'red',
    borderBottomWidth: 3,
  },
  search: {
    color: "grey",
    backgroundColor: "#fff",
    width: 400,
    alignSelf: "center",
    borderRadius: 2,
    margin: 15,
  },

  buttonAdd: {
flex: 1,
alignSelf: "flex-end",
  },
});
