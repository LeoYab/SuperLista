import { StyleSheet, TextInput } from 'react-native';

const Input = ({ value, placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default Input;