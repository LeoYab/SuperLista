import { URL_API } from "../../constants/Database";

export const ADD_PRODUCT = "ADD_PRODUCT"
export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const DEL_PRODUCT = "DEL_PRODUCT"
export const LIST_PRODUCTS = "LIST_PRODUCTS"
export const SAVE_PRODUCTS = "SAVE_PRODUCTS"


export const addProduct = (productToAdd) => ({
  type: ADD_PRODUCT,
  productToAdd,
});

export const saveProducts = (productsSaved, nameList) => {
  
  return async dispatch => {
    try{
      const response = await fetch (URL_API + "Products.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: Date.now(),
          nameList,
          items: productsSaved
        }),
      });

      const result = await response.json();
      console.log(result)

      dispatch({
        type: SAVE_PRODUCTS,
        productsSaved
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

  export const listProducts = (productsList) => ({
    type: LIST_PRODUCTS,
    productsList,
  });
  