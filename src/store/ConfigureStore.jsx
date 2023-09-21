import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './slice/Slice';

const store = configureStore({
  reducer: {
    addresses: addressReducer,
  },
});

export default store;