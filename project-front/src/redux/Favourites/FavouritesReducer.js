import {FETCH_FAVS_FAILURE, 
    FETCH_FAVS_REQUEST, 
    FETCH_FAVS_SUCCESS,  
    UPLOAD_FAVS_FAILURE , 
    UPLOAD_FAVS_REQUEST , 
    UPLOAD_FAVS_SUCCESS
} from './FavouritesConstants'


const fetchInitialState = {
    loading : false,
    favourites : [],
    error : ""
}
const uploadInitialState = {
    loading : false,
    error : ""
}

export const fetchFavouritesReducer = (state = fetchInitialState , action) => {
    switch(action.type){
        case FETCH_FAVS_REQUEST : return {
            ...state,
            loading : true
        }
        case FETCH_FAVS_SUCCESS : return {
            loading : false,
            favourites : action.payload,
            error : ""
        }
        case FETCH_FAVS_FAILURE : return {
            loading : false,
            error : action.payload
        }
        default : return state
    }
}


export const uploadFavouritesReducer = (state = uploadInitialState , action) => {
    switch(action.type){

        case UPLOAD_FAVS_REQUEST : return {
            loading : true,
            error : ''
        }
        case UPLOAD_FAVS_SUCCESS : return {
            ...state,
            loading : false
 
        }
        case UPLOAD_FAVS_FAILURE : return {
            loading : false,
            error : action.payload
        }
        
        default : return state
    }
}
