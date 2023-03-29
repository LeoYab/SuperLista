import { GET_PRODUCTS } from "../actions/getproducts.action";

const initialState = {
  productsGet: [],
};

const GetProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productsGet: action.productsGet,
      };
    default:
      return state;
  }
};

export default GetProductsReducer;