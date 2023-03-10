import { StyleSheet, TextInput, View, Dimensions, KeyboardAvoidingView } from 'react-native';

const Input = ({ style, value, placeholder, onChangeText, keyboardType }) => {

  return (

    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30} style={styles.inputContainer}>

      <TextInput
        style={[style ? style : styles.input, !value && styles.invalidInput]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />

    </KeyboardAvoidingView>
  );
};
const {height, width} = Dimensions.get("window");
const styles = StyleSheet.create({

  inputContainer: {
    marginHorizontal: 1,
  },
  input: {
    width:width,
    borderWidth: 2,
    borderColor: 'green',
    paddingHorizontal: width * 0.02,
    marginVertical: 2,
    borderRadius: 5,
    backgroundColor: "white",
    fontFamily:"OpenSansRegular",
    maxWidth:width * 0.245,
    
  },
  invalidInput: {
    borderColor: 'grey',
  },
});

export default Input;