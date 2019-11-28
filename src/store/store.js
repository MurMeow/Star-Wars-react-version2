import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {StarPeople} from "./facts/starPeople/reducer";
import {GeneralInfo} from "./generalInfo/reducer";
import {Authorization} from "./authorization/reducer";
import {Facts} from "./facts/reducer";
import {Blog} from "./blog/reducer";
import {Statistics} from "./statistics/reducer";
import {Films} from "./facts/films/reducer";



const reducers = combineReducers({
  GeneralInfo,
  Facts,
  Blog,
  Statistics,
  Authorization,
  StarPeople,
  Films
});

const composeEnhancers = composeWithDevTools ({});

const store = createStore(reducers, composeEnhancers(
  applyMiddleware (thunk),
));

export default store;