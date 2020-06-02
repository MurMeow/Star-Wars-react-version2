import {FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR} from './types';



export const fetchFilms = () =>  async (dispatch) => {
  dispatch({
    type: FETCH_FILMS_REQUEST
  });
  try {
    const url = 'https://swapi.dev/api/films/';
    const result = await fetch(url);
    const informationReceived = await result.json();

    const arrayFilms = informationReceived.results;
    function sortByEpisode(arry){
      arry.sort((a, b) => a.episode_id > b.episode_id ? 1 : -1);
    }
    sortByEpisode(arrayFilms)

    dispatch({
      type: FETCH_FILMS_SUCCESS, payload:
        {films: arrayFilms,
        count: informationReceived.count}
    });
  }
  catch (err) {
    dispatch({
      type: FETCH_FILMS_ERROR,
      payload: "Sorry, information is not available now!"
    })
  }
};