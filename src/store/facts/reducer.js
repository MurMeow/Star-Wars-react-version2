import {FACTS_REQUEST,
  FACTS_INFO_SUCCESS,
  FACTS_INFO_ERROR} from './types';

const initialState = {
  isOpen: false,
  loading: false,
  error: null,
};

export function Facts(state = initialState, action){
  switch (action.type) {

    case FACTS_REQUEST : {
      console.log(state, "--State - REQUEST")

      const newState = {
        ...state,
        loading: true,
      };
      console.log(newState, "--newState - REQUEST")
      return newState
    }

    case FACTS_INFO_SUCCESS : {
      console.log(state, "--State - SUCCESS")

      const newState = {
        ...state,
        loading: false,
        error: null,
        isOpen: true,

      };
      console.log(newState, "--newState - SUCCESS")
      return newState
    }

    case FACTS_INFO_ERROR : {
      console.log(state, "--State - ERROR")

      const newState = {
        ...state,
        loading: false,
        error: action.payload.error
      };
      console.log(newState, "--newState - ERROR")
      return newState
    }

    default : {
      return state
    }
  }
}