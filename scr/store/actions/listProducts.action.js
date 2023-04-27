import { URL_API } from "../../constants/Database";

export const LIST_PRODUCTS = "LIST_PRODUCTS"
export const DEL_LIST_PRODUCTS = "DEL_LIST_PRODUCTS"

export const listProducts = (userId, listProd) => {

  return async (dispatch) => {

    try {
      const response = await fetch(`${URL_API}Users/${userId}/List_Products/${listProd}.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      const products = result.items;

      dispatch({
        type: LIST_PRODUCTS,
        productsList: products,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};

export const delListProducts = (userId, listId, list) => {

  return async dispatch => {
    try {
      await fetch(`${URL_API}Users/${userId}/List_Products/${listId}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const listUpdate = list.filter(item => item.id !== listId)
      /*             Alert.alert("Lista " + listId.nameList + " eliminada") */

      dispatch({
        type: DEL_LIST_PRODUCTS,
        listToDel: listUpdate,
      });
    } catch (error) {
      console.log(error.message)
    }
  }
};


