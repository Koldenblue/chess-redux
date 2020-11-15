import { createSlice } from '@reduxjs/toolkit';

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    spaceArray: []
  },
  reducers: {
    setSpaceArray: (state, action) => {
      state.spaceArray = action.payload;
    }
  }
});

export const selectSpaceArray = state => state.board.spaceArray;

export const { setSpaceArray } = boardSlice.actions

export default boardSlice.reducer;