import {FETCH_AMAZING_PEOPLE_REQUEST,
  FETCH_AMAZING_PEOPLE_SUCCESS,
  FETCH_AMAZING_PEOPLE_ERROR} from './types';

const initialState = {
  people: [],
  loading: false,
  error: null,
  count: null,
  next: null,
  previous: null
};

export function StarPeople(state = initialState, action){
  switch (action.type) {

    case FETCH_AMAZING_PEOPLE_REQUEST : {
      console.log(state, "--State - REQUEST")

      const newState = {
        ...state,
        loading: true,
      };
      console.log(newState, "--newState - REQUEST")
      return newState
    }

    case FETCH_AMAZING_PEOPLE_SUCCESS : {
      console.log(state, "--State - SUCCESS")

      const newState = {
        ...state,
        loading: false,
        error: null,
        people: action.payload.result,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous
      };
      console.log(newState, "--newState - SUCCESS")
      return newState
    }

    case FETCH_AMAZING_PEOPLE_ERROR : {
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