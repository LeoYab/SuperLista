import { LIST_PRODUCTS, DEL_LIST_PRODUCTS } from "../actions/listProducts.action";

const initialState = {
    productsList: [],
    listToDel: [],
}

const ListReducer = (state = initialState, action) => {

    switch (action.type) {

        case LIST_PRODUCTS:
            return {
                ...state,
                productsList: action.productsList,
            }

        case DEL_LIST_PRODUCTS:
          
            return {
                ...state,
                listToDel: action.listToDel,
            };
         
        default:
            return state;
    }
}

export default ListReducer