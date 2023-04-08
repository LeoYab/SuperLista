import { ADD_PLACE, GET_PLACES } from "../actions/places.actions"
import Place from "../../models/Place"

const initialState = {
    places: []
}

 const placesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                action.payload.id,
                action.payload.title,
                action.payload.image,
                action.payload.address,
                action.payload.lat,
                action.payload.lng,
                );
            return {
                ...state,
                places: state.places.concat(newPlace)
            }
            case GET_PLACES:
                return {
                    places: action.payload
                  };
        default:
            return state
    }
}
export default placesReducer