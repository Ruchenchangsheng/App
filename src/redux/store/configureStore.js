import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import queryReducer from '../reducers/queryReducer';

const store = configureStore({
    reducer: {
      user: userReducer,
      query: queryReducer,
          },
  });

  export default store;