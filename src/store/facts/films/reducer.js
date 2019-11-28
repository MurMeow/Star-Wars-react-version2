import {FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR} from './types';

const initialState = {
  films: [],
  loading: false,
  error: null,
  count: 0,
};

export function Films(state = initialState, action){
  switch (action.type) {

    case FETCH_FILMS_REQUEST : {
      const newState = {
        ...state,
        loading: true,
      };
      return newState
    }

    case FETCH_FILMS_SUCCESS : {
      const newState = {
        ...state,
        loading: false,
        error: null,
        films: action.payload.films,
        count: action.payload.count,
      };
      return newState
    }

    case FETCH_FILMS_ERROR : {
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