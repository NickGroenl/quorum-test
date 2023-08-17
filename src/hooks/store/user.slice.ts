import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from "../../models/user.model"
import { RootState } from './index';

export const userInitialState: User  = {
    _id: '',
    email: '',
    password: '',
    name: '',
    lastname: '',
    votations: undefined,
    company: '',
    type: 0,
    birth: '',
    placebirth: '',
    identification_number: '',
}

const storeSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUserStore(state: any, action: PayloadAction<User>) {
      return state = action.payload;
    },
  },
});


export const { setUserStore } = storeSlice.actions;
export default storeSlice.reducer;
export const getStore = (
  state: RootState
) => state;

