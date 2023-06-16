"use client";

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  placeholder: 'Search',
  value: '',
  callback: null,
};

const searchbarSlice = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    updateSearchbarPlaceholder(state, action) {
      state.placeholder = action.payload;
    },
    updateSearchbarValue(state, action) {
      state.value = action.payload;
    },
    clearSearchbarValue(state) {
      state.value = '';
    },
  },
});

export const {updateSearchbarPlaceholder, updateSearchbarValue, clearSearchbarValue} = searchbarSlice.actions;

export default searchbarSlice.reducer;