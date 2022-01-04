import { productReducer } from './productReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
