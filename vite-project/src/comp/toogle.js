import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { val: 'white' }, // Initialize with a default color
  reducers: {
    toggleColor: (state) => {
      // Toggle between 'white' and 'black'
      state.val = state.val === 'black' ? 'white' : 'black';
    },
  },
});

// Export actions and reducer
export const { toggleColor } = toggleSlice.actions;
export default toggleSlice.reducer;
