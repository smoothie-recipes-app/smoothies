import {GET_RECIPES_FAILURE, GET_RECIPES_REQUEST, GET_RECIPES_SUCCESS} from './RecipesConstants'
import axios from "axios";



const getRecipesRequest = () => {
    return {
        type : GET_RECIPES_REQUEST
    }
}

const getRecipesSuccess = (recipes) => {
    return {
        type : GET_RECIPES_SUCCESS,
        payload : recipes
    }
}
const getRecipesFailure = (error) => {
    return {
        type : GET_RECIPES_FAILURE,
        payload : error
    }
}

const getRecipes = () => {
    return (dispatch) => {
        dispatch(getRecipesRequest())
        axios.get('https://api.edamam.com/search?q=smoothie&app_id=f8293a1f&app_key=aacde078268ca0a6fb31383b4cc348b0&from=0&to=10')
        .then(response => {
            if(response.data){
            const recipes = response.data.hits
            dispatch(getRecipesSuccess(recipes))
            }
            else{
                dispatch(getRecipesFailure("Error"))
            }
        })
        .catch(error => dispatch(getRecipesFailure(error.message)))
    }
}
export default getRecipes