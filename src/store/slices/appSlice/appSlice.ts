import { createSlice } from "@reduxjs/toolkit";
import {
  IAppSliceState,
  ISetTokenAction,
  ISetUserAction,
  IHideDrawerHeaderAction,
} from "./types";

const initialState: IAppSliceState = {
  token: undefined,
  user: undefined,
  hideDrawerHeader: false,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setToken: (state, action: ISetTokenAction) => {
      state.token = action.payload.token;
    },
    setUser: (state, action: ISetUserAction) => {
      state.user = action.payload.user;
    },
    setHideDrawerHeader: (state, action: IHideDrawerHeaderAction) => {
      state.hideDrawerHeader = action.payload.hideDrawerHeader;
    },
  },
});

export const { setToken, setUser, setHideDrawerHeader } = appSlice.actions;

export default appSlice.reducer;
