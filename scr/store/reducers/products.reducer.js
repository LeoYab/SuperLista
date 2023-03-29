import { ADD_PRODUCT, EDIT_PRODUCT, LIST_PRODUCTS, SAVE_PRODUCTS } from "../actions/products.action"

const initialState = {
  productToAdd: [],
  productsList: [],
  productsSaved:[],
}

const ProductsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_PRODUCT:

      return {
         ...state, 
         productToAdd: action.productToAdd,
      }
      case EDIT_PRODUCT:
      /*   const updatedProducts = [...state.products];
        const replaceProds = updatedProducts.filter((product) => product.id !== action.product.id)
        
        return {
          ...state,
          products: replaceProds,
        } */
        return {
          ...state, 
          products: action.product,
        }
        case LIST_PRODUCTS:
          return {
            ...state, 
            productsList: action.productsList,
          }
      case SAVE_PRODUCTS:
        return {
          ...state, 
          productsSaved: action.product,
        }

    default:
      
      return state
  }
}

export default ProductsReducer