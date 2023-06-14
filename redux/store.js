"use client";

import {configureStore} from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import searchbarReducer from "./slices/searchbarSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    searchbar: searchbarReducer,
  },
});