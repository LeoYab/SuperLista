import { GET_PRODUCTS } from "../actions/getproducts.action";

const initialState = {
  products: [],
};

const GetProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default GetProductsReducer;