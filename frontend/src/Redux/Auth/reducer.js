import { SIGNIN_FAILURE_REQUEST, SIGNIN_LOODING_REQUEST, SIGNIN_SUCCESS_REQUEST, SIGNOUT_REQUEST, SIGNUP_FAILURE_REQUEST, SIGNUP_LOODING_REQUEST, SIGNUP_SUCCESS_REQUEST } from "./actionTypes"

<<<<<<< HEAD
<<<<<<< HEAD
const user = JSON.parse(localStorage.getItem('userdata'))

const userData = {
    token: "token not exisst" || user.token,
    isAuth: user ? true : false,
    isLooding: false,
    signup_status : false,
    isError: false,
    isErrorData:"",
    u_Data: [] || user.data,
    msg:""
=======
=======
const user = JSON.parse(localStorage.getItem('userdata'))

>>>>>>> 3bc0099 (added)
const userData = {
    token: "token not exisst" || user.token,
    isAuth: user ? true : false,
    isLooding: false,
    signup_status : false,
    isError: false,
<<<<<<< HEAD
    u_Data: []
>>>>>>> c67e613 (add authreducr function)
=======
    u_Data: [] || user.data
>>>>>>> 3bc0099 (added)
}

export function AuthReducer(state = userData,action){
    const {type,payload} = action
    switch(type){
        case SIGNUP_LOODING_REQUEST : return {
            ...state,isLooding: true
        }
        case SIGNUP_SUCCESS_REQUEST : return {
<<<<<<< HEAD
<<<<<<< HEAD
            ...state,isLooding: false, signup_status: true,msg:payload
        }
        case SIGNUP_FAILURE_REQUEST : return {
            ...state, isLooding: false, isError: true,isErrorData:payload,signup_status:false
=======
            ...state,isLooding: false, token: payload.token, u_Data: payload.data, isAuth: true 
        }
        case SIGNUP_FAILURE_REQUEST : return {
            ...state,isLooding: false, isError: true
>>>>>>> c67e613 (add authreducr function)
=======
            ...state,isLooding: false, signup_status: true
        }
        case SIGNUP_FAILURE_REQUEST : return {
            ...state, isLooding: false, isError: true
>>>>>>> 3bc0099 (added)
        }
        case SIGNIN_LOODING_REQUEST : return {
            ...state,isLooding: true
        }
<<<<<<< HEAD
<<<<<<< HEAD
        case SIGNIN_SUCCESS_REQUEST :
        return {
            ...state,isLooding: false, token: payload.token, u_Data: payload.data,msg:payload.msg, isAuth: true 
        }
        case SIGNIN_FAILURE_REQUEST : return {
            ...state,isLooding: false, isError: true,isErrorData:payload
=======
        case SIGNIN_SUCCESS_REQUEST : return {
=======
        case SIGNIN_SUCCESS_REQUEST :
        return {
>>>>>>> 3bc0099 (added)
            ...state,isLooding: false, token: payload.token, u_Data: payload.data, isAuth: true 
        }
        case SIGNIN_FAILURE_REQUEST : return {
            ...state,isLooding: false, isError: true
>>>>>>> c67e613 (add authreducr function)
        }
        case SIGNOUT_REQUEST : return {
            ...state
        }
        default : return state
    }
}