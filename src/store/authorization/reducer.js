import {AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR} from './types';

const initialState = {
  authorizationSuccessful: false,
  loading: true,
  error: null
};

export function StarPeople(state = initialState, action){
  switch (action.type) {

    case AUTHORIZATION_REQUEST : {
      console.log(state, "--State - REQUEST")

      const newState = {
        ...state,
        loading: true,
      };
      console.log(newState, "--newState - REQUEST")
      return newState
    }

    case AUTHORIZATION_SUCCESS : {
      console.log(state, "--State - SUCCESS")

      const newState = {
        ...state,
        authorizationSuccessful: true,
        loading: false,
        error: null,
      };
      console.log(newState, "--newState - SUCCESS")
      return newState
    }

    case AUTHORIZATION_ERROR : {
      console.log(state, "--State - ERROR")

      const newState = {
        ...state,
        loading: false,
        error: action.payload
      };
      console.log(newState, "--newState - ERROR")
      return newState
    }

    default : {
      return state
    }
  }
}