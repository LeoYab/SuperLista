import { StyleSheet, Text } from 'react-native'


const TotalGral = ({ products }) => {

  const totalGral = () => {

    return products.reduce((acc, product) => {
      return acc + product.price * product.quantity;

    }, 0);

  };

  return (

    <Text style={styles.statusBarTextTotal}>TOTAL: ${totalGral().toFixed(2)}</Text>

  );

};

export default TotalGral

const styles = StyleSheet.create({
  statusBarTextTotal: {
    color: "#fff",
    marginTop: 6,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
})