import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {StarPeople} from "./starPeople/reducer";
import {GeneralInfo} from "./generalInfo/reducer";
import {Facts} from "./facts/reducer";



const reducers = combineReducers({
  GeneralInfo,
  Facts,
  StarPeople
});

const composeEnhancers = composeWithDevTools ({});

const store = createStore(reducers, composeEnhancers(
  applyMiddleware (thunk),
));

console.log(store);
export default store;