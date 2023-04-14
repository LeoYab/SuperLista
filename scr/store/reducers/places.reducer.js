import { ADD_PLACE, GET_PLACES, LOAD_PLACES } from "../actions/places.actions"
import Place from "../../models/Place"

const initialState = {
    places: []
}

 const placesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                action.payload.id.toString(),
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
                  case LOAD_PLACES:
                   
            return {
                ...state,
                places: action.payload.places.map(place => new Place(
                    place.id.toString(), 
                    place.title, 
                    place.image, 
                    place.address, 
                    place.lat, 
                    place.lng
                    ))
            }
        default:
            return state
    }
}
export default placesReducer