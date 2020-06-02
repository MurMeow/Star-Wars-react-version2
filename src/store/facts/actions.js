import {FACTS_REQUEST,
  FACTS_INFO_SUCCESS,
  FACTS_INFO_ERROR
  } from './types';
// import dispatch from 'redux'


export const isOpenFacts = () => dispatch => {
  dispatch({
    type: FACTS_INFO_SUCCESS
    // payload: {
    //   authorizationSuccessful: false,
    //   personalInfo:{
    //     nickname: '',
    //     email: '',
    //     userId: ''
    //   },
    // }
  });
}

// const isOpenFacts = () => dispatch =>  {
//   console.log("openFacts");
//     dispatch({
//       type: FACTS_INFO_SUCCESS,
//     });
// };

