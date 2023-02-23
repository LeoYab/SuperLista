import { StyleSheet, Text, Pressable } from "react-native";
const Buttons = ({children="Boton", style, onPress  }) => {

    return (

        <Pressable  style={style ? style : styles.defaultButton} onPress={onPress}>
           <Text style={styles.colorText}>{children}</Text>  
        </Pressable>
    )
}


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

})



export default Buttons;