import {LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS , LOGOUT_USER} from './LoginConstants'
import axios from "axios";



const loginUserRequest = () => {
    return {
        type : LOGIN_USER_REQUEST
    }
}

const loginUserSuccess = (user) => {
    return {
        type : LOGIN_USER_SUCCESS,
        payload : user
    }
}
const loginUserFailure = (error) => {
    return {
        type : LOGIN_USER_FAILURE,
        payload : error
    }
}
export const logoutUser = () => {
    return{
        type : LOGOUT_USER
    }
}

const loginUser = (dataToSubmit) => {
    return (dispatch) => {
        dispatch(loginUserRequest())
        axios.post('http://localhost:5000/api/user/login' , dataToSubmit)
        .then(response => {
            if(response.data.loginSuccess){
            const user = response.data.user
            dispatch(loginUserSuccess(user))
            return true
            }
            else{
                dispatch(loginUserFailure(response.data.message))
            }
        })
        .catch(error => dispatch(loginUserFailure(error.message)))
    }
}
export default loginUser