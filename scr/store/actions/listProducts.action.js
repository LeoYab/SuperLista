import { URL_API } from "../../constants/Database";
import { Alert } from "react-native";

export const DEL_LIST_PRODUCTS = "DEL_LIST_PRODUCTS"


export const delListProducts = (listId) => {
    console.log(listId.id)
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
    
   }
};
