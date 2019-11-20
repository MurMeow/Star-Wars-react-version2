import {FACTS_REQUEST,
  FACTS_INFO_SUCCESS,
  FACTS_INFO_ERROR
  } from './types';
// import dispatch from 'redux'


const isOpenFacts = () => dispatch => {
  console.log("vow")
  dispatch({
    type: FACTS_REQUEST
  })
  try {
    dispatch({
      type: FACTS_INFO_SUCCESS,
    });

  } catch (err) {
    dispatch({
      type: FACTS_INFO_ERROR,
      payload: "error- ???"
    })
  }
}

// const isOpenFacts = () => dispatch =>  {
//   console.log("openFacts");
//     dispatch({
//       type: FACTS_INFO_SUCCESS,
//     });
// };

export default isOpenFacts