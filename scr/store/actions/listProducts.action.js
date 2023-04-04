import { URL_API } from "../../constants/Database";
import { Alert } from "react-native";

export const LIST_PRODUCTS = "LIST_PRODUCTS"
export const DEL_LIST_PRODUCTS = "DEL_LIST_PRODUCTS"

export const listProducts = (userId, listProd) => {

        return async (dispatch) => {
      
          try {
            const response = await fetch(`${URL_API}${userId}/${listProd}.json`, {
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
  
export const delListProducts = (userId, listId) => {

    return async dispatch => {
        try {
            await fetch(`${URL_API}/${userId}/${listId.id}.json`, {
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

  
  