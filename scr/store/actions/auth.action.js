import { URL_AUTH_SIGNUP, URL_AUTH_SIGNIN } from "../../constants/Database";
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (userId) => ({
    type: USER_LOGIN,
    userId,
})

export const signUp = (email, password) => {



    return async dispatch => {
        try {
            dispatch({
                type: "SIGN_UP_START"
            })
            const response = await fetch(URL_AUTH_SIGNUP, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),

            });

            if (!response.ok) {
                const errorResData = await response.json();

                const errorId = errorResData.error.message;

                let message = 'No se pudo registrar!';

                if (errorId === 'EMAIL_EXISTS') {
                    message = 'Este email ya existe!';
                }
                throw new Error(message);
            }

            const data = await response.json();

            userLogin(data.localId)

            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId
            })
        } catch (error) {
            dispatch({
                type: "SIGN_UP_FAIL"
            })
            alert(error);
        }
    }

}

export const signIn = (email, password) => {

    return async dispatch => {
        try {
            dispatch({
                type: "SIGN_IN_START"
            })
            const response = await fetch(URL_AUTH_SIGNIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),

            });

            if (!response.ok) {
                const errorResData = await response.json();

                const errorId = errorResData.error.message;
                let message = 'No se pudo Ingresar!';

                if (errorId === 'EMAIL_NOT_FOUND') {
                    message = 'Este email no existe!';
                } else if (errorId === 'INVALID_PASSWORD') {
                    message = 'Contraseña incorrecta!';
                }

                throw new Error(message);
            }
            const data = await response.json();

            userLogin(data.localId)

            dispatch({
                type: SIGN_IN,
                token: data.idToken,
                userId: data.localId
            })
        } catch (error) {
            dispatch({
                type: "SIGN_IN_FAIL"
            })
            alert(error);
        }
    }

}