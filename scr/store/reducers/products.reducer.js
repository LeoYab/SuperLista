import { ADD_PRODUCT, EDIT_PRODUCT } from "../actions/products.action"

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
      case EDIT_PRODUCT:
      /*   const updatedProducts = [...state.products];
        const replaceProds = updatedProducts.filter((product) => product.id !== action.product.id)
        
        return {
          ...state,
          products: replaceProds,
        } */
        return {
          /* ...state, */
          products: action.product,
        }
      
    default:
      return state
  }
}

export default ProductsReducer