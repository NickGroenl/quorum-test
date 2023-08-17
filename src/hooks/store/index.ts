import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './user.slice';

const allReducers = combineReducers({
  user: userSlice,

})
export const store = configureStore({
  reducer: allReducers,
  devTools: true
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>
