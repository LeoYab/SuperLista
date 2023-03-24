import { URL_API } from "../../constants/Database";

export const ADD_PRODUCT = "ADD_PRODUCT"
export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const DEL_PRODUCT = "DEL_PRODUCT"

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const saveProduct = (product) => {
  return async dispatch => {
    try{
      const response = await fetch (URL_API + "Products.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: Date.now(),
          items: product
        }),
      });

      const result = await response.json();
      console.log(result)

      dispatch({
        type: ADD_PRODUCT,
        confirm: true,
      });
    } catch (error) {
      console.log(error.message)
    }
  }
};
  export const editProduct = (product) => ({
    type: EDIT_PRODUCT,
    product,
  });

  export const delProduct = (productId) => ({
    type: DEL_PRODUCT,
    productId,
  });