import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILUER, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILUER, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_PROFILE_SUCCESS } from "./auth.actionType"

const initialState = {
    jwt : null,
    error : null,
    loading : false,
    user:null
}
export const authReducer=(state=initialState,action) =>{
    switch(action.type){
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_PROFILE_REQUEST:
            return{...state, loading:true, error:null}

        case GET_PROFILE_SUCCESS:
        case UPDATE_PROFILE_SUCCESS: 
            return {...state,user:action.payload, error:null, loading:false}
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return{...state,jwt:action.payload, loading:false, error:null}
        case LOGIN_FAILUER:
        case REGISTER_FAILUER:
            return{...state,loading:false,error:action.payload}
        default:
            return state;
    }
}