import {STATISTICS_REQUEST,
  STATISTICS_SUCCESS,
  STATISTICS_ERROR} from './types';


export const statisticsСollection = (informationReceived) => dispatch => async () =>{

  console.log("вошли в statisticsСollection");
  console.log(informationReceived);

  // const url = 'https://swapi.co/api/films/';
  // const result = await fetch(url);
  // const informationReceived = await result.json();
  // console.log(informationReceived)
  dispatch({
    type: STATISTICS_REQUEST
  });
  try {
    dispatch({
      type: STATISTICS_SUCCESS,
      payload: {
        // relase:{
        //   films: '',
        //   year: null
        // },
        // people:{
        //   name: '',
        //   counter: null
        // },
        // planets:{
        //   name: '',
        //   counter: null
        // },
        // starships:{
        //   name: '',
        //   counter: null
        // },
        // species:{
        //   name: '',
        //   counter: null
        // },
        // vehicles:{
        //   name: '',
        //   counter: null
        // },
        // email: email,
        // counterUsers: counterUsers,
      }
    });
  } catch (err) {
    dispatch({
      type: STATISTICS_ERROR,
      payload: "Sorry, failed to log in!"
    })
  }
};