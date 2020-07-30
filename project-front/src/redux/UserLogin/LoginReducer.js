import {LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS , LOGIN_USER_REQUEST , LOGOUT_USER} from "./LoginConstants"

const initialState = {
    loading : false,
    user : {},
    error : ""
}

const loginReducer = (state = initialState , action) => {
    switch(action.type){
        case LOGIN_USER_REQUEST : return {
            ...state,
            loading : true
        }
        case LOGIN_USER_SUCCESS : return {
            loading : false,
            user : action.payload,
            error : ""
        }
        case LOGIN_USER_FAILURE : return {
            loading : false,
            error : action.payload
        }
        case LOGOUT_USER: return{
            ...state,
            user : {}
        }
        default : return state
    }
}

export default loginReducer