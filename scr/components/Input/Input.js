import { StyleSheet, TextInput, View } from 'react-native';

const Input = ({ value, placeholder, onChangeText, keyboardType }) => {

  return (

    <View style={styles.inputContainer}>

      <TextInput
        style={[styles.input, !value && styles.invalidInput]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  inputContainer: {
    marginHorizontal: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: 'green',
    paddingHorizontal: 25,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "white",
    fontFamily:"OpenSans-Regular",
  },
  invalidInput: {
    borderColor: 'grey',
  },
});

export default Input;