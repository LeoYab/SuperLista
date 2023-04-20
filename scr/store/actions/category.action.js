import { URL_API } from "../../constants/Database"
import { CATEGORIES } from "../../categories/categories"

export const SELECT_CATEGORY = "SELECT_CATEGORY"
export const CATEGORY = "CATEGORY"

export const category = () => {

  return async (dispatch) => {

    try {
      const response = await fetch(URL_API + "Categories.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {

        console.log("Network response was not ok. Loading local categories...");
 
         dispatch({
           type: CATEGORY,
           categories: CATEGORIES,
         });
       }else{
 
         const result = await response.json();
 console.log(result)
         dispatch({
           type: CATEGORY,
           categories: result,
       });
     }

    } catch (error) {
      console.log(error.message);

    }
  };

}

export const selectCategory = (id) => {

  return async (dispatch) => {

    try {
      const response = await fetch(URL_API + "Categories.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {

        console.log("Network response was not ok. Loading local categories...");

        const IndexCategory = CATEGORIES.find(item => item.id === id)


        dispatch({
          type: SELECT_CATEGORY,
          categoryId: IndexCategory,
          categories: result
        });
      }else{

      

      const result = await response.json();

      const IndexCategory = result.find(item => item.id === id)


      dispatch({
        type: SELECT_CATEGORY,
        categoryId: IndexCategory,
        categories: result
      });
    }
    } catch (error) {
      console.log(error.message);

    }
  };



}