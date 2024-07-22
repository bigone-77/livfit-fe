import { combineReducers, configureStore } from '@reduxjs/toolkit';
import playReducer from './slices/playSlice';

const rootReducer = combineReducers({
  play: playReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
