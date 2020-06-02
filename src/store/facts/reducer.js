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

      const newState = {
        ...state,
        loading: true,
      };
      return newState
    }

    case FACTS_INFO_SUCCESS : {

      const newState = {
        ...state,
        loading: false,
        error: null,
        isOpen: !state.isOpen,

      };
      return newState
    }

    case FACTS_INFO_ERROR : {

      const newState = {
        ...state,
        loading: false,
        error: action.payload.error
      };
      return newState
    }

    default : {
      return state
    }
  }
}