import {AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR,
  OUTIN_SUCCESS} from './types';


export const checkAuthorization = (nickname, email, userId, counterUsers) => dispatch => {

  dispatch({
    type: AUTHORIZATION_REQUEST
  });
  try {
    dispatch({
      type: AUTHORIZATION_SUCCESS,
      payload: {
        nickname: nickname,
        userId: 'user/'+userId,
        email: email,
        counterUsers: counterUsers,
      }
    });
  } catch (err) {
    dispatch({
      type: AUTHORIZATION_ERROR,
      payload: "Sorry, failed to log in!"
    })
  }
};



export const outIn = () => dispatch => {

  dispatch({
    type: OUTIN_SUCCESS,
    payload: {
      authorizationSuccessful: false,
      personalInfo:{
        nickname: '',
        email: '',
        userId: ''
      },
    }
  });
};
