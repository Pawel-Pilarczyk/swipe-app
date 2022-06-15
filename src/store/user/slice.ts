import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  age: number;
}

const initialState: UserState = {
  name: 'Adam',
  age: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const actions = userSlice.actions;

export default userSlice.reducer;
