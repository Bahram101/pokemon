import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    addToFavorite(state, action) {
      state.favorites.includes(action.payload)
        ? state.favorites = state.favorites.filter((id) => id !== action.payload)
        : state.favorites.push(action.payload);
    }
  },
});

export const { addToFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
