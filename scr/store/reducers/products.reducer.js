import { ADD_PRODUCT } from "../actions/products.action"

const initialState = {
    products: [],
}

const ProductsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PRODUCT:
          return {
            /* ...state, */
            products: [...state.products, action.product],
          }
        default:
          return state
      }
}

export default ProductsReducer