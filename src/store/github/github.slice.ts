import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRepo } from "../../models/models";

const LS_FAV_KEY = "rfk";
interface GithubSlice {
  favourites: IRepo[];
  selectedRepo: IRepo | null;
}

const initialState: GithubSlice = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
  selectedRepo: null,
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<IRepo>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<IRepo>) {
      state.favourites = state.favourites.filter(
        (f) => f.id !== action.payload.id
      );
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    selectRepo(state, action: PayloadAction<IRepo>) {
      state.selectedRepo = action.payload;
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
