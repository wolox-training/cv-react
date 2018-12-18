import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import game from './game/reducers';
import login from './login/reducers';
import general from './general/reducers';
import results from './results/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const Enhancers = [applyMiddleware(thunk)];
const reducers = {
  user: login,
  game,
  general,
  results,
  form: formReducer,
}

export default createStore(
  combineReducers(reducers),
  composeEnhancers(...Enhancers)
);
