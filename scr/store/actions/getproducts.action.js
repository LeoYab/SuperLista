import { URL_API } from "../../constants/Database";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = (userId) => {
  return async (dispatch) => {

    try {
      const response = await fetch("https://superlista-9c70f-default-rtdb.firebaseio.com/"+ userId + ".json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
    
      const products = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
  
      dispatch({
        type: GET_PRODUCTS,
        productsGet: products,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};