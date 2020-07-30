import {FETCH_FAVS_FAILURE, 
    FETCH_FAVS_REQUEST, 
    FETCH_FAVS_SUCCESS,  
    UPLOAD_FAVS_FAILURE , 
    UPLOAD_FAVS_REQUEST , 
    UPLOAD_FAVS_SUCCESS
} from './FavouritesConstants'

import axios from "axios";

const uploadFavsRequest = () => {
    return {
        type : UPLOAD_FAVS_REQUEST
    }
}

const fetchFavsRequest = () => {
    return {
        type : FETCH_FAVS_REQUEST
    }
}

const fetchFavsSuccess = (user) => {
    return {
        type : FETCH_FAVS_SUCCESS,
        payload : user
    }
}

const uploadFavsSuccess = () => {
    return {
        type : UPLOAD_FAVS_SUCCESS
    }
}

const fetchFavsFailure = (error) => {
    return {
        type : FETCH_FAVS_FAILURE,
        payload : error
    }
}

const uploadFavsFailure = (error) => {
    return{
        type : UPLOAD_FAVS_FAILURE,
        payload : error
    }
}


export const fetchFavs = (dataToSubmit) => {
    console.log(dataToSubmit)
    return (dispatch) => {
        dispatch(fetchFavsRequest())
        axios.post('http://localhost:5000/api/favourites/getFavourites' , dataToSubmit)
        .then(response => {
            if(response.data.success){
            const favourites = response.data.favourites
            dispatch(fetchFavsSuccess(favourites))
            }
            else{
                dispatch(fetchFavsFailure(response.data.err))
            }
        })
        .catch(error => dispatch(fetchFavsFailure(error.message)))
    }
}

export const uploadFavs = (dataToSubmit) => {
    console.log(dataToSubmit)
    return (dispatch) => {
        dispatch(uploadFavsRequest())
        axios.post('http://localhost:5000/api/favourites/upload' , dataToSubmit)
        .then(response => {
            if(response.data.success){
            dispatch(uploadFavsSuccess())
            alert(response.data.message)
            }
            else{
                dispatch(uploadFavsFailure(response.data.err))
                alert(response.data.message)
            }
        })
        .catch(error => dispatch(uploadFavsFailure(error.message)))
    }
}
