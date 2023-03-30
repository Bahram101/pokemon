import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const getPokemonList = createAsyncThunk("pokemonList", async () => {
  const pokemonList = [];
  for (let i = 1; i <= 20; i++) {
    const { data } = await axios.get(`pokemon/${i}`);
    pokemonList.push(data);
  }
  return pokemonList;
});

const initialState = {
  pokemonList: {
    items: [],
    status: "loading",
  },
};

const pokemonSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {},
  extraReducers: {
    [getPokemonList.pending]: (state) => {
      state.pokemonList.items = [];
      state.pokemonList.status = "loading";
    },
    [getPokemonList.fulfilled]: (state, action) => {
      state.pokemonList.items = action.payload;
      state.pokemonList.status = "loaded";
    },
    [getPokemonList.rejected]: (state) => {
      state.pokemonList.items = [];
      state.pokemonList.status = "error";
    },
  },
});

// export const {increment, decrement} = counterSlice.actions;

export default pokemonSlice.reducer;
