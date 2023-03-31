import { URL_API } from "../../constants/Database";
import { Alert } from "react-native";

export const LIST_PRODUCTS = "LIST_PRODUCTS"
export const DEL_LIST_PRODUCTS = "DEL_LIST_PRODUCTS"

export const listProducts = (productsList) => ({
    type: LIST_PRODUCTS,
    productsList,
  });
  
export const delListProducts = (listId) => {

    return async dispatch => {
        try {
            await fetch(`${URL_API}/Products/${listId.id}.json`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            });
            Alert.alert("Lista " + listId.nameList + " eliminada")
            dispatch({
                type: DEL_LIST_PRODUCTS, 
                listToDel: listId 
            });
        } catch (error) {
            console.log(error.message)
        }
   }};

  
  