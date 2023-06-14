"use client";

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  game: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame(state, action) {
      state.game = action.payload;
    }
  },
});

export const {setGame} = gameSlice.actions;

export default gameSlice.reducer;