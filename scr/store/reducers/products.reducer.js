import { ADD_PRODUCT/* , EDIT_PRODUCT */, SAVE_PRODUCTS, ADD_PRODUCTOS_USUARIO } from "../actions/products.action"

const initialState = {
  productToAdd: [],
  productsSaved: [],
  users: [],


}

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:

      return {
        ...state,
        productToAdd: action.productToAdd,
      }
    /* case EDIT_PRODUCT:
    const updatedProducts = [...state.products];
      const replaceProds = updatedProducts.filter((product) => product.id !== action.product.id)
      
      return {
        ...state,
        products: replaceProds,
      } */
    /*  return {
       ...state,
       products: action.product,
     } */
    case SAVE_PRODUCTS:
      return {
        ...state,
        productsSaved: action.product,
      }
    case ADD_PRODUCTOS_USUARIO:
      const { user, product } = action.payload;
   

return{
  users: {
  ...state.users,
        [user]: {
products:product
        }
      }
    
}
    /*   const newUsers = {
        ...state.users,
        [user]: {
          ...state.users[user],
          products: [...state.users[user].products, product],
        },
      };
      return { ...state, users: newUsers }; */
    default:
      return state;
  }
}


export default ProductsReducer