import { DEL_LIST_PRODUCTS } from "../actions/listProducts.action";

const initialState = {
    listToDel: [],
}

const ListReducer = (state = initialState, action) => {

    switch (action.type) {
        case DEL_LIST_PRODUCTS:

        return {
            ...state,
            listToDel: list.filter(item => item.id !== action.listId)
        };
        default:
            return state;
    }
}

export default ListReducer