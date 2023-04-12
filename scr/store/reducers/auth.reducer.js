import { SIGN_UP_IN, USER_LOGOUT } from "../actions/auth.action"


const initalState = {
    token: null,
    userId: null,
    isLoading: false,
}


const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SIGN_UP_IN_START":

            return {
                ...state,
                isLoading: true
            }
        case SIGN_UP_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                isLoading: false
            }

        case "SIGN_UP_IN_FAIL":
            return {
                ...state,
                isLoading: false
            }

        case USER_LOGOUT:

        return{
            ...state,
            userId: null,
        }
       /*  case "SIGN_IN_START":

            return {
                ...state,
                isLoading: true
            }
        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                isLoading: false
            }

        case "SIGN_IN_FAIL":
            return {
                ...state,
                isLoading: false
            }
        case USER_LOGIN:

            return {
                ...state,
                userId: action.userId,
            } */
        default:
            return state;
    }
}

export default authReducer;
