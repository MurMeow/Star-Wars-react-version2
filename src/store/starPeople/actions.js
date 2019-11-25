import {FETCH_AMAZING_PEOPLE_REQUEST,
  FETCH_AMAZING_PEOPLE_SUCCESS,
  FETCH_AMAZING_PEOPLE_ERROR} from './types';

import {getRoute} from './helper.js'


export const fetchPeople = () => dispatch => async () => {


  // const route = getRoute('123')
  console.log("вошли в featch");
  dispatch({
    type: FETCH_AMAZING_PEOPLE_REQUEST
  })
  try {
    const url = 'https://swapi.co/api/people/';
    const result = await fetch(url);
    dispatch({
      type: FETCH_AMAZING_PEOPLE_SUCCESS, payload: result
    });
    console.log(result)
  } catch (err) {

    dispatch({
      type: FETCH_AMAZING_PEOPLE_ERROR,
      payload: "error- ???"
    })
  }
}