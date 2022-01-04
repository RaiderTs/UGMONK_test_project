import { createStore } from 'redux';
import { applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(rootReducer, composedEnhancer);
