import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'

const Auth = () => {

    const title = "REGISTRO",
        message = "¿Ya tienes una cuenta?",
        messageAction = "Ingresar",
        messageTarget = "Login";

    return (

        <KeyboardAvoidingView behavior='height' style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text>formulario</Text>
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => console.log(messageTarget)}>
                        <Text style={styles.promptButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>

    )


}

export default Auth

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: "center",
    },
    container: {
        width: "80%",
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
    },
    prompt: {
        alignItems: "center",
    },
    promptMessage: {
        fontSize: 16,
        color: "#333",
    },
    promptButton: {
        fontSize: 16,
        color: "green",
    },
    button: {
        backgroundColor: "grey",
        marginVertical: 20,
    },
})