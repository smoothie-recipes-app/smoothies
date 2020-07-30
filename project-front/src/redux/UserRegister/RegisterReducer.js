import {REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS , REGISTER_USER_REQUEST} from "./RegisterConstants"

const initialState = {
    loading : false,
    message : ""
}

const registerReducer = (state = initialState , action) => {
    switch(action.type){
        case REGISTER_USER_REQUEST : return {
            ...state,
            loading : true
        }
        case REGISTER_USER_SUCCESS : return {
            loading : false,
            message : action.payload
        }
        case REGISTER_USER_FAILURE : return {
            loading : false,
            message : action.payload
        }
        default : return state
    }
}

export default registerReducer