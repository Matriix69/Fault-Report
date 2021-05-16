import { configureStore } from '@reduxjs/toolkit';
import msgReducer from '../redux/msgSlice';

export const store = configureStore({
  reducer: {
    msg: msgReducer,
  },
});