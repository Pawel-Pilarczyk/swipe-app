import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/slice';
import modalsReducer from './modals/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
