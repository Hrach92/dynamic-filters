import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/data';

const store = configureStore({
  reducer: {
    dataSlice: dataReducer,
  },
});

export default store;