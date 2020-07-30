import {REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS  } from './RegisterConstants'
import axios from "axios";


const registerUserRequest = () => {
    return {
        type : REGISTER_USER_REQUEST
    }
}

const registerUserSuccess = (message) => {
    return {
        type : REGISTER_USER_SUCCESS,
        payload : message
    }
}

const registerUserFailure = (message) => {
    return {
        type : REGISTER_USER_FAILURE,
        payload : message
    }
}





const registerUser = (dataToSubmit) => {
    console.log(dataToSubmit)
    return (dispatch) => {
        console.log('here inside')
        dispatch(registerUserRequest())
        axios.post('https://smoothie-recipes-app.herokuapp.com/api/user/register' , dataToSubmit)
        .then(response => {
            console.log(response)
            if(response.data.registerSuccess){
                console.log('here')
                dispatch(registerUserSuccess(response.data.message))
            }
            else{
                dispatch(registerUserFailure(response.data.message))
            }
        })
        .catch((error) => dispatch(registerUserFailure(error.message)))
    }
}
export default registerUser