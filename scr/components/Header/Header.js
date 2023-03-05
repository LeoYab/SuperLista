import { StyleSheet, Text, View } from 'react-native';
import Buttons from '../Button/Button';
import Table from "../Table/Table";
import Input from "../Input/Input"

const Header = ({ changeScreen, products, searchProduct, onChangeText }) => {



  return (
    <>

      <View style={styles.header}>
        <Buttons style={styles.about} onPress={changeScreen}>About</Buttons>
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
  about: {
    alignSelf: "flex-start"
  },
  logo: {
    color: "#fff",
    textAlign: 'center',
    paddingTop: 15,
    fontFamily: "Qicksand-Bold",
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