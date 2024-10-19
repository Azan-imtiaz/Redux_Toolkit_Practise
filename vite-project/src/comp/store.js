// store.js
import { configureStore } from '@reduxjs/toolkit';
import toggleSlice from './toogle'; // Import your reducer

const store = configureStore({
  reducer: {
    toggle:toggleSlice, // Add your reducers here
  },
});

export default store;
