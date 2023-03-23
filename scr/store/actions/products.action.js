export const ADD_PRODUCT = "ADD_PRODUCT"
export const EDIT_PRODUCT = "EDIT_PRODUCT"

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product,
  });

  export const editProduct = (product) => ({
    type: EDIT_PRODUCT,
    product,
  });