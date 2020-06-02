import {ADD_THEME_REQUEST,  ADD_THEME_SUCCESS,  ADD_THEME_ERROR, OPEN_THEMES, CLOSE_THEMES
  // ADD_COMMIT_REQUEST,  ADD_COMMIT_SUCCESS,  ADD_COMMIT_ERROR
} from './types';

export const openThemes = (i) => dispatch => {
  dispatch({
    type: OPEN_THEMES,
    payload: {
      id: i,
      isOpen: "!isOpen"
    }});
};





















export const closeThemes = () => dispatch => {
  dispatch({
    type: CLOSE_THEMES
  });
};

export const addNewTheme = (title, idTheme, author, idAuthor, counterComments) => dispatch => {

  console.log("вошли в addNewTheme");
  dispatch({
    type: ADD_THEME_REQUEST
  });
  try {
    dispatch({
      type: ADD_THEME_SUCCESS,
      payload: {
        title: title,
        idTheme: 'theme/'+idTheme,
        author: author,
        idAuthor: idAuthor,
        counterComments: counterComments,
        comments: []
      }
    });
  } catch (err) {
    dispatch({
      type: ADD_THEME_ERROR,
      payload: "Sorry, but failed to add topic!"
    })
  }
};