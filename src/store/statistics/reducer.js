import {STATISTICS_REQUEST,
  STATISTICS_SUCCESS,
  STATISTICS_ERROR} from './types';

const initialState = {
  isOpen: false,
  release:[],
  people:{
    name: '',
    counter: null
  },
  planets:{
    name: '',
    counter: null
  },
  starships:{
    name: '',
    counter: null
  },
  species:{
    name: '',
    counter: null
  },
  vehicles:{
    name: '',
    counter: null
  },
  loading: false,
  error: null
};

export function Statistics(state = initialState, action){
  switch (action.type) {

    case STATISTICS_REQUEST : {

         const newState = {
        ...state,
        loading: true,
      };
      return newState
    }

    case STATISTICS_SUCCESS : {

      const newState = {
        ...state,
        isOpen: true,
        release: action.payload.release,
        people: action.payload.characters,
        planets: action.payload.planets,
        starships: action.payload.starships,
        species: action.payload.species,
        vehicles: action.payload.vehicles,
        loading: false,
        error: null,
      };
      return newState
    }

    case STATISTICS_ERROR : {
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