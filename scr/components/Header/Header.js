import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native';
import Table from "../Table/Table";

const Header = ({ products }) => {

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.logo}>SUPERLISTA</Text>
        <TextInput style={styles.search} placeholder="Buscar" />
      </View>

      {/*      <Separator /> */}

      <Table products={products} />

    </>

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
  search: {
    color: "grey",
    backgroundColor: "#fff",
    width: 400,
    alignSelf: "center",
    borderRadius: 2,
    margin: 15,
  },
});

export default Header;