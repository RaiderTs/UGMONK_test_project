import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { useReducer } from './reducers/useReducer';

export const store = createStore({ useReducer }, applyMiddleware(thunk));
