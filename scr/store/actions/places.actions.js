import * as FileSystem from 'expo-file-system'
import { URL_API, GOOGLE_MAPS_API } from '../../constants/Database'

export const ADD_PLACE = "ADD_PLACE"
export const GET_PLACES = "GET_PLACES"

export const addPlace = (title, image, location, userId) => {

    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_MAPS_API}`)


        if (!response.ok) throw new Error("No se ha podido comunicar con Google Maps API");

        const resData = await response.json();

        if (!resData.results) throw new Error("No se han encontrado datos para las coordenadas seleccionadas");

        const address = resData.results[0].formatted_address;



        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }
        dispatch({ type: ADD_PLACE, payload: { id: Date.now(), title, image: Path, address, lat: location.lat, lng: location.lng } })
        const newPlace = { id: Date.now(), title, image: Path, address, lat: location.lat, lng: location.lng };
        try {
            const response = await fetch(URL_API + "Users/" + userId + ".json", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ["places/" + newPlace.id]: newPlace
                }),
            });

            const result = await response.json();
         /*    console.log(result)  */
        } catch (error) {
            console.log(error.message)
        }
    }

}

export const getPlaces = (userId) => {

    return async dispatch => {
        try {
            const response = await fetch(URL_API + "Users/" + userId + "/places.json");

            if (!response.ok) {
                throw new Error('No se ha podido obtener la información de los lugares');
            }

            const result = await response.json();
            if (result) {
            const places = Object.keys(result).map(key => {
                return {
                    ...result[key],
                    id: key,
                };
            });
        

            dispatch({ 
                type: GET_PLACES, 
                payload: places });

        }else{
            dispatch({ 
                type: GET_PLACES, 
                payload: [] });
        }
        } catch (error) {
            console.log(error.message);
        }
    }
};
