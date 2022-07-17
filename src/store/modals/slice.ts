import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalsState {
  loadingModal: boolean;
  loadingModalText: string;
}

const initialState: ModalsState = {
  loadingModal: false,
  loadingModalText: 'Loading',
};

export const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setLoadingModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.loadingModal = action.payload;
    },
    setLoadingModalText: (state, action: PayloadAction<string>) => {
      state.loadingModalText = action.payload;
    },
  },
});

export const actions = modalSlice.actions;

export default modalSlice.reducer;
