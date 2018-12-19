import { actions } from './actions';
import {createReducer } from 'redux-recompose';

const initialState = {
  history: [{
    squares: Array(9).fill(null)
  }],
  stepNumber: 0,
  xIsNext: true
};

const reducerDescription = {
  [actions.ADD_STEP]: (state, action) => ({ 
    ...state, 
    history: action.payload.history,
    stepNumber: action.payload.stepNumber,
    xIsNext:action.payload.xIsNext
  }),
  [actions.JUMP_TO]: (state, action) => ({
    ...state,
    stepNumber: action.payload.stepNumber,
    xIsNext:action.payload.xIsNext
  })
};

export default createReducer(initialState, reducerDescription);
