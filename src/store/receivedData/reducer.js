import {INFO_SW_REQUEST,
  INFO_SW_SUCCESS,
  INFO_SW_ERROR} from './types';

const initialState = {
  isOpen: false,
  fetchResults: [],
  loading: false,
  error: null
};

export function receivedData (state = initialState, action){
  switch (action.type) {

    case INFO_SW_REQUEST : {

         const newState = {
        ...state,
        loading: true,
      };
      return newState
    }

    case INFO_SW_SUCCESS : {

      const newState = {
        ...state,
        isOpen: true,
        fetchResults: action.payload.fetchResults,
        loading: false,
        error: null,
      };
      return newState
    }

    case INFO_SW_ERROR : {
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