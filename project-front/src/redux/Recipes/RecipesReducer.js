import {GET_RECIPES_FAILURE, GET_RECIPES_REQUEST, GET_RECIPES_SUCCESS} from "./RecipesConstants"

const initialState = {
    loading : false,
    recipes : [],
    error : ""
}

const recipesReducer = (state = initialState , action) => {
    switch(action.type){
        case GET_RECIPES_REQUEST : return {
            ...state,
            loading : true
        }
        case GET_RECIPES_SUCCESS : return {
            loading : false,
            recipes : action.payload,
            error : ""
        }
        case GET_RECIPES_FAILURE : return {
            ...state,
            loading : false,
            error : action.payload
        }

        default : return state
    }
}

export default recipesReducer