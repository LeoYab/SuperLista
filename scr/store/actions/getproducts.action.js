import { URL_API } from "../../constants/Database";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = (userId) => {


  return async (dispatch) => {

    try {
      const response = await fetch(URL_API + "Users/" + userId + "/List_Products.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
 
      if (result) {
        const products = Object.keys(result).map((key) => ({
          ...result[key],
          id: key,
        }));

        dispatch({
          type: GET_PRODUCTS,
          productsGet: products,
        });
      } else {
        dispatch({
          type: GET_PRODUCTS,
          productsGet: [],
        });
      }

    } catch (error) {
      console.log(error.message);

    }
  };
};