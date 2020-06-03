import {INFO_SW_REQUEST,
  INFO_SW_SUCCESS,
  INFO_SW_ERROR} from './types';


export const dataRequest  = ()  => async (dispatch) =>{
  dispatch({
    type: INFO_SW_REQUEST
  });

  const obj = ['https://swapi.dev/api/films/', 'https://swapi.dev/api/people/', 'https://swapi.dev/api/planets/' ]
  const arrayGroup = [];

  //fetchAllData - функция которая будет делать  запрос на сервер,
  // и возвращать массив ответов
  const fetchAllData = async(obj) => {
    const promises = obj.map(url => fetch(url));

    const arrayResults = await Promise.all(promises)
    //на данной итерации мы возьмем из url нащвания разделов
    // по которым пришла информация
      .then(responses => { Promise.all(responses.map(
        r =>{
          const urlPars = r.url.split('/');
          const group = urlPars[urlPars.length-2];
          arrayGroup.push(group)}));
        return responses;
      })
      //на данной итерации мы преобразуем ответы promises, для чтения
      .then(responses => Promise.all(responses.map(
        r => r.json())))
      .then(res => {return res})
       return arrayResults
  };

  const fetchResults = await fetchAllData(obj);//плучаем результат готовый для чтения

  try {
    dispatch({
      type: INFO_SW_SUCCESS,
      payload: {
        isOpen: true,
        fetchResults: {
          [arrayGroup[0]]:fetchResults[0],
          [arrayGroup[1]]:fetchResults[1],
          [arrayGroup[2]]:fetchResults[2],
  }
      }
    });
  } catch (err) {
    dispatch({
      type: INFO_SW_ERROR,
      payload: "Sorry, error!"
    })
  }
};