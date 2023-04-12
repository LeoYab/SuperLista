import {createStore, combineReducers, applyMiddleware} from "redux"
import { persistStore, persistReducer } from "redux-persist"



import CategoryReducer from "./reducers/category.reducer"
import ProductsReducer from "./reducers/products.reducer"
import GetProductsReducer from "./reducers/getproducts.reducer"
import ListReducer from "./reducers/listProducts.reducer"
import authReducer from "./reducers/auth.reducer"
import placesReducer from "./reducers/places.reducer"

import thunk from "redux-thunk"
import AsyncStorage from "@react-native-async-storage/async-storage"


const persistConfig = {
    key: "root",
    storage: AsyncStorage,
}

const RootReducer = combineReducers({

categories: CategoryReducer,
products: ProductsReducer,
getProducts: GetProductsReducer,
listAction: ListReducer,
auth: authReducer,
places: placesReducer,
})

const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const storePersisted = persistStore(store)

/* export default createStore(RootReducer, applyMiddleware(thunk)) */