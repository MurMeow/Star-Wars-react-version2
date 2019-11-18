import {GENERAL_INFO_REQUEST,
  GENERAL_INFO_SUCCESS,
  GENERAL_INFO_ERROR} from './types';

const initialState = {
  nestingPath: '',
  loading: false,
  error: null,
};

export function GeneralInfo(state = initialState, action){
  switch (action.type) {

    case GENERAL_INFO_REQUEST : {
      console.log(state, "--State - REQUEST")

      const newState = {
        ...state,
        loading: true,
      };
      console.log(newState, "--newState - REQUEST")
      return newState
    }

    case GENERAL_INFO_SUCCESS : {
      console.log(state, "--State - SUCCESS")

      const newState = {
        ...state,
        loading: false,
        error: null,
        nestingPath: action.payload.path,

      };
      console.log(newState, "--newState - SUCCESS")
      return newState
    }

    case GENERAL_INFO_ERROR : {
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