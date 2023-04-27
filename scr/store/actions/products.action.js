import { URL_API } from "../../constants/Database";

export const ADD_PRODUCT = "ADD_PRODUCT"
export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const DEL_PRODUCT = "DEL_PRODUCT"
export const SAVE_PRODUCTS = "SAVE_PRODUCTS"
export const ADD_PRODUCTOS_USUARIO = "ADD_PRODUCTOS_USUARIO"
export const NAME_LIST_PRODUCTS = "NAME_LIST_PRODUCTS"

export const addProduct = (productToAdd) => ({
  type: ADD_PRODUCT,
  productToAdd,
});

export const saveProducts = (productsSaved, nameList, userId) => {

  const date = new Date();
  const formatDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

  return async dispatch => {
    try {


      const response = await fetch(URL_API + "Users/" + userId + "/List_Products.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: Date.now(),
          date: formatDate.toString(),
          nameList,
          items: productsSaved
        }),
      });

      const result = await response.json();

      dispatch({
        type: SAVE_PRODUCTS,
        productsSaved,
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

export const agregarProductoUsuario = (user, product, nameList) => ({
  type: "ADD_PRODUCTOS_USUARIO",
  payload: {
    user,
    product,
    nameList,
  }
});

export const nameListProducts = (nameList) => ({
  type: NAME_LIST_PRODUCTS,
  nameList,
});