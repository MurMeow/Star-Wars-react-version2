import {AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR} from './types';

const initialState = {
  authorizationSuccessful: false,
  personalInfo:{
    nickname: '',
    email: ''
  },
  counterUsers: null,
  loading: false,
  error: null
};

export function Authorization(state = initialState, action){
  switch (action.type) {

    case AUTHORIZATION_REQUEST : {

         const newState = {
        ...state,
        loading: true,
      };
      return newState
    }

    case AUTHORIZATION_SUCCESS : {

      const newState = {
        ...state,
        authorizationSuccessful: true,
        personalInfo: action.payload,
        loading: false,
        error: null,
      };
      return newState
    }

    case AUTHORIZATION_ERROR : {
      const newState = {
        ...state,
        loading: false,
        error: action.payload
      };
      return newState
    }

    default : {
      return state
    }
  }
}