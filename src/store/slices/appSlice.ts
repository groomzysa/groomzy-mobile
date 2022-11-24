import { createSlice } from "@reduxjs/toolkit";
import {
  IAppSliceState,
  IAppSliceSetTokenAction,
  IAppSliceSetUserAction,
} from "./types";

const initialState: IAppSliceState = {
  token: undefined,
  user: undefined,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setToken: (state, action: IAppSliceSetTokenAction) => {
      state.token = action.payload.token;
    },
    setUser: (state, action: IAppSliceSetUserAction) => {
      state.user = action.payload.user;
    },
  },
});

export const { setToken, setUser } = appSlice.actions;

export default appSlice.reducer;
