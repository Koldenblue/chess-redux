import { createSlice } from '@reduxjs/toolkit';

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    pickingEnd: false,
    pieceToMove: {}
  },
  reducers: {
    setPickingEnd: (state) => {
      state.pickingEnd = !state.pickingEnd;
    },
    setPieceToMove: (state, action) => {
      state.pieceToMove = action.payload
    }
  }
});

export const selectPickingEnd = state => state.board.pickingEnd;
export const selectPieceToMove = state => state.board.pieceToMove;

export const { setPickingEnd, setPieceToMove } = boardSlice.actions

export default boardSlice.reducer;