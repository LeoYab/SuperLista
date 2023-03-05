import { StyleSheet, Text, View, TextInput } from 'react-native';
import Table from "../Table/Table";
import Input from "../Input/Input"

const Header = ({ products, searchProduct, onChangeText }) => {



  return (
    <>

      <View style={styles.header}>

        <Text style={styles.logo}>SUPERLISTA</Text>

        <Input
        value={searchProduct}
        onChangeText={onChangeText}
        placeholder={"Búsqueda"}
        
 />
        {/* <TextInput style={styles.search} placeholder="Buscar" /> */}
      </View>

      <Table products={products} />

    </>
  );
};

const styles = StyleSheet.create({
  
  header: {
    backgroundColor: '#4B8A08',
  },
  logo: {
    color: "#fff",
    textAlign: 'center',
    paddingTop: 15,
    fontFamily:"Qicksand-Bold",
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