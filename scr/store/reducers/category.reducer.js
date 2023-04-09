import { CATEGORIES } from "../../categories/categories"
import { CATEGORY, SELECT_CATEGORY } from "../actions/category.action"

const initialState = {
    categories: [],
    selected: null,
}

const CategoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case CATEGORY:
            return {
                ...state,
                categories: action.categories,
            }
        case SELECT_CATEGORY:

         /*    console.log("categoryId", action.categoryId) */
            if (action.categoryId.id === -1) return state

            return { ...state, selected: action.categories[action.categoryId.id] }

        default:
            return state

    }
}

export default CategoryReducer