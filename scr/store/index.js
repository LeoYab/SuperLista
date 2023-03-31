import {createStore, combineReducers, applyMiddleware} from "redux"

import CategoryReducer from "./reducers/category.reducer"
import ProductsReducer from "./reducers/products.reducer"
import GetProductsReducer from "./reducers/getproducts.reducer"
import ListReducer from "./reducers/listProducts.reducer"

import thunk from "redux-thunk"

const RootReducer = combineReducers({

categories: CategoryReducer,
products: ProductsReducer,
getProducts: GetProductsReducer,
listAction: ListReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))