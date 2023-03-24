import {createStore, combineReducers, applyMiddleware} from "redux"

import CategoryReducer from "./reducers/category.reducer"
import ProductsReducer from "./reducers/products.reducer"
import thunk from "redux-thunk"

const RootReducer = combineReducers({

categories: CategoryReducer,
products: ProductsReducer,

})

export default createStore(RootReducer, applyMiddleware(thunk))