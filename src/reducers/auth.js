import {
  LOGIN_SUCCESS,
   LOGIN_FAIL, 
   USER_LOADED_SUCCESS, 
   USER_LOADED_FAIL,
   AUTHENTICATED_SUCCESS,
   AUTHENTICATED_FAIL,
   LOGOUT
  } from '../actions/types';

const INITIAL_STATE = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: null,
  user: null
}

export default (state=INITIAL_STATE, action) =>{
  const {type, payload} = action;

  switch(type){
    case LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access);
      localStorage.setItem('refresh', payload.refresh);
      return{
        ...state,
        access : payload.access,
        refresh : payload.refresh,
        isAuthenticated : true
      }

    case LOGIN_FAIL:
      return{
        ...state,
        access : null,
        refresh : null,
        isAuthenticated : false
      }

    case USER_LOADED_SUCCESS:
      return{
        ...state,
        user: payload
      }

    case USER_LOADED_FAIL:
      return{
        ...state,
        user: null
      }

    case AUTHENTICATED_SUCCESS:
      return{
        ...state,
        isAuthenticated : true,
      }

    case AUTHENTICATED_FAIL:
      return{
        ...state,
        isAuthenticated : false,
      }  

    case LOGOUT:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return{
        ...state,
        isAuthenticated: false,
        access: null,
        refresh: null,
        user: null
      }

    default:
      return state;

  }

}