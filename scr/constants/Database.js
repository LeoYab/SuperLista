import {FIREBASE_DATABASE_URL, FIREBASE_API_KEY, GOOGLE_MAPS_API_KEY} from "react-native-dotenv" 

export const URL_API = FIREBASE_DATABASE_URL
export const URL_AUTH_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`
export const URL_AUTH_SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`
export const GOOGLE_MAPS_API = GOOGLE_MAPS_API_KEY
