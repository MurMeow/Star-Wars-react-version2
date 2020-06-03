import {STATISTICS_REQUEST,
  STATISTICS_SUCCESS,
  STATISTICS_ERROR} from './types';
import {sortFunction, checkKorrectTitle} from '../../helper';


export const statisticsСollection = () => async (dispatch) =>{
  dispatch({
    type: STATISTICS_REQUEST
  });



  const url = 'https://swapi.dev/api/films/';
  const result = await fetch(url);
  const informationReceived = await result.json();

  const resultStatistics = {
    release:[],
    characters:[],
    planets:[],
    species:[],
    starships:[],
    vehicles:[]
  };
  informationReceived.results.map((key)=>{

    resultStatistics.release.push({
      episode_id: key.episode_id,
      title: key.title,
      release_date: key.release_date
    });
    key.characters.map((item)=> {
      if (!resultStatistics.characters.some((elem) => elem.title === item)) {
        return resultStatistics.characters.push({title: item, count: 1})
      }
      else{
        const index = resultStatistics.characters.findIndex((elem) => elem.title === item)
        return resultStatistics.characters[index].count =  resultStatistics.characters[index].count+1;
      }
    });
    key.planets.map((item)=> {
      if (!resultStatistics.planets.some((elem) => elem.title === item)) {
        return resultStatistics.planets.push({title: item, count: 1})
      }
      else{
        const index = resultStatistics.planets.findIndex((elem) => elem.title === item)
        return resultStatistics.planets[index].count =  resultStatistics.planets[index].count+1;
      }
    });
    key.species.map((item)=> {
      if (!resultStatistics.species.some((elem) => elem.title === item)) {
        return resultStatistics.species.push({title: item, count: 1})
      }
      else{
        const index = resultStatistics.species.findIndex((elem) => elem.title === item)
        return resultStatistics.species[index].count =  resultStatistics.species[index].count+1;
      }
    });
    key.starships.map((item)=> {
      if (!resultStatistics.starships.some((elem) => elem.title === item)) {
        return  resultStatistics.starships.push({title: item, count: 1})
      }
      else{
        const index = resultStatistics.starships.findIndex((elem) => elem.title === item)
        return resultStatistics.starships[index].count =  resultStatistics.starships[index].count+1;
      }
    });
    key.vehicles.map((item)=> {
      if (!resultStatistics.vehicles.some((elem) => elem.title === item)) {
        return resultStatistics.vehicles.push({title: item, count: 1})
      }
      else{
        const index = resultStatistics.vehicles.findIndex((elem) => elem.title === item)
        return resultStatistics.vehicles[index].count =  resultStatistics.vehicles[index].count+1;
      }
    });
  });


  function sortByCount(arry){
    arry.sort((a, b) => a.count < b.count ? 1 : -1);
  }

  function correctLenghts(element){
    element.map((key)=>{
      if(key.count===1){
        const index = element.findIndex((elem) => elem.count===1)
        element.splice(index, )
      }
    })
  }

  // function sortByEpisode(arry){
  //   arry.sort((a, b) => a.episode_id > b.episode_id ? 1 : -1);
  // }
  sortFunction(resultStatistics.release, "episode_id")
  // sortByEpisode(resultStatistics.release)

  // sortFunction(resultStatistics.characters, "count")
  sortByCount(resultStatistics.characters);
  correctLenghts(resultStatistics.characters);

  // sortFunction(resultStatistics.planets, "count")
  sortByCount(resultStatistics.planets);
  correctLenghts(resultStatistics.planets);

  // sortFunction(resultStatistics.species, "count")
  sortByCount(resultStatistics.species);
  correctLenghts(resultStatistics.species);

  // sortFunction(resultStatistics.starships, "count")
  sortByCount(resultStatistics.starships);
  correctLenghts(resultStatistics.starships);

  // sortFunction(resultStatistics.vehicles, "count")
  sortByCount(resultStatistics.vehicles);
  correctLenghts(resultStatistics.vehicles);


  const check = (key, param, title) =>{
    key[param]=title
  };

  checkKorrectTitle(resultStatistics.characters, "title", check)
  checkKorrectTitle(resultStatistics.planets, "title", check)
  checkKorrectTitle(resultStatistics.species, "title", check)
  checkKorrectTitle(resultStatistics.starships, "title", check)
  checkKorrectTitle(resultStatistics.vehicles, "title", check)

  try {
    dispatch({
      type: STATISTICS_SUCCESS,
      payload: {
        isOpen: true,
        release: resultStatistics.release,
        planets: resultStatistics.planets,
        characters: resultStatistics.characters,
        species: resultStatistics.species,
        starships: resultStatistics.starships,
        vehicles: resultStatistics.vehicles
      }
    });
  } catch (err) {
    dispatch({
      type: STATISTICS_ERROR,
      payload: "Sorry, failed to log in!"
    })
  }
};