import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState, useReducer, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Colors from '../constants/Colors'
import { signUpIn } from '../store/actions/auth.action'
import InputRegister from '../components/Input/InputRegister'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let formIsValid = true;
        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }
        return {
            formIsValid,
            inputValidities,
            inputValues
        }
    }
    return state;
}


const RegisterAndLogin = () => {

    const [loginView, setLoginView] = useState(false);

    const dispatch = useDispatch();
    const isAuthLoading = useSelector(state => state.auth.isLoading);

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });


    const onHandleRegister = () => {
        if (formState.formIsValid) {
            dispatch(signUpIn(loginView, formState.inputValues.email, formState.inputValues.password))
        } else {
            alert('Por favor, ingrese un email y una contraseña válidos')
        }
    }

    const handleChangedText = useCallback((inputIdentifier, inputValue, inputValidity) => {

        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        })
    }, [dispatchFormState])


    const loginEnable = () => {

        setLoginView(!loginView)
    }


    const onHandleLogin = () => {
        if (formState.formIsValid) {
            dispatch(signUpIn(loginView, formState.inputValues.email, formState.inputValues.password))
        } else {
            console.log('Por favor, ingrese un email y una contraseña válidos')
        }
    }

    return (
        <KeyboardAvoidingView style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>{!loginView ? "REGISTRO" : "INGRESAR"}</Text>
                <View style={styles.form}>
                    <InputRegister
                        initialValue={formState.inputValues.email}
                        initiallyValid={formState.inputValidities.email}
                        onInputChange={handleChangedText}
                        id='email'
                        required
                        email
                        minLength={5}
                        label='Email'
                        errorText='Por favor, ingrese un email válido'
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />


                    <InputRegister
                        initialValue={formState.inputValues.password}
                        initiallyValid={formState.inputValidities.password}
                        onInputChange={handleChangedText}
                        id='password'
                        required
                        minLength={5}
                        label='Password'
                        errorText='Por favor, ingrese un password válido'
                        autoCapitalize='none'
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={!loginView ? onHandleRegister : onHandleLogin}>
                        <Text style={styles.loginButtonText}>{isAuthLoading ? 'Loading...' : !loginView ? 'Registrarse' : 'Ingresar'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{!loginView ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}</Text>
                    <TouchableOpacity onPress={loginEnable}>
                        <Text style={styles.promptButton}>{!loginView ? "Iniciar sesión" : "Registrarse"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterAndLogin

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 12,
        textAlign: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#fff',
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: 16,

    },
    textInput: {
        width: '100%',
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 12,
    },
    loginButton: {
        width: '100%',
        justifyContent: 'center',
        height: 40,
        backgroundColor: Colors.btnPrimary,
        marginVertical: 12,
    },
    loginButtonText: {
        fontSize: 18,

        textAlign: 'center',
        color: '#fff',
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,

        color: '#333',
    },
    promptButton: {
        fontSize: 16,

        color: Colors.btnPrimary
    },
    button: {
        backgroundColor: Colors.btnPrimary,
        marginVertical: 20,
    }
})


