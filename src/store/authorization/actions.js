import {AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR} from './types';


export const auhorization = (nickname, email, userId, counterUsers) => dispatch => {

  console.log("вошли в auhorization");
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