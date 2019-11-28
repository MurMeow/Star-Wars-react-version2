import {AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR,
  OUTIN_SUCCESS} from './types';

const initialState = {
  authorizationSuccessful: false,
  personalInfo:{
    nickname: '',
    email: '',
    userId: ''
  },
  counterUsers: 0,
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
        counterUsers: action.payload.counterUsers,
        personalInfo: {
          nickname: action.payload.nickname,
          email: action.payload.email,
          userId: action.payload.userId
        },
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

    case OUTIN_SUCCESS : {

      const newState = {
        ...state,
        authorizationSuccessful: action.payload.authorizationSuccessful,
        personalInfo: {
          nickname: action.payload.nickname,
          email: action.payload.email,
          userId: action.payload.userId
        },
        loading: false,
        error: null,
      };
      return newState
    }

    default : {
      return state
    }
  }
}