import { URL_AUTH_SIGNUP, URL_AUTH_SIGNIN } from "../../constants/Database";
export const SIGN_UP_IN = "SIGN_UP";
export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (userId) => ({
    type: USER_LOGIN,
    userId,
})

export const signUpIn = (loginView, email, password) => {

    const CHECK_SIGN = loginView ? URL_AUTH_SIGNIN : URL_AUTH_SIGNUP;

    return async dispatch => {
        try {
            dispatch({
                type: "SIGN_UP_IN_START"
            })
            const response = await fetch(CHECK_SIGN, {
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
           if (!loginView) {
            if (!response.ok) {
                const errorResData = await response.json();

                const errorId = errorResData.error.message;

                let message = 'No se pudo registrar!';

                if (errorId === 'EMAIL_EXISTS') {
                    message = 'Este email ya existe!';
                }
                throw new Error(message);
            }
           }else{
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
           }
            

            const data = await response.json();

            userLogin(data.localId)

            dispatch({
                type: SIGN_UP_IN,
                token: data.idToken,
                userId: data.localId
            })
        } catch (error) {
            dispatch({
                type: "SIGN_UP_IN_FAIL"
            })
            alert(error);
        }
    }

}
