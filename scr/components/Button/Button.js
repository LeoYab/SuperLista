import { StyleSheet, Text, TouchableOpacity } from "react-native";
const Buttons = ({children="Boton", style, onPress  }) => {

    return (

        <TouchableOpacity  style={[styles.defaultButton, style]} onPress={onPress}>
           <Text style={styles.colorText}>{children}</Text>  
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

defaultButton: {
    width: 80,
    height: 30,
    borderRadius: 5,
    backgroundColor:"#6ca115ef",
    alignSelf:"center",
    alignItems: 'center',
    justifyContent: "center",
},
colorText: {
    color: "white",
},

});

export default Buttons;