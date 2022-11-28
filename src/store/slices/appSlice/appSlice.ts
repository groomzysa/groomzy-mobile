import { createSlice } from "@reduxjs/toolkit";
import {
  IAppSliceState,
  IAppSliceSetTokenAction,
  IAppSliceSetUserAction,
  IAppSliceSetHideDrawerHeaderAction,
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
    setToken: (state, action: IAppSliceSetTokenAction) => {
      state.token = action.payload.token;
    },
    setUser: (state, action: IAppSliceSetUserAction) => {
      state.user = action.payload.user;
    },
    setHideDrawerHeader: (
      state,
      action: IAppSliceSetHideDrawerHeaderAction
    ) => {
      state.hideDrawerHeader = action.payload.hideDrawerHeader;
    },
  },
});

export const { setToken, setUser, setHideDrawerHeader } = appSlice.actions;

export default appSlice.reducer;
