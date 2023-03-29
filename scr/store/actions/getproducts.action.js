import { URL_API } from "../../constants/Database";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => {
  return async (dispatch) => {

    try {
      const response = await fetch(URL_API + "Products.json", {
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