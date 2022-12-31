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
    setToken: (state, { payload }: ISetTokenAction) => {
      state.token = payload.token;
    },
    setUser: (state, { payload }: ISetUserAction) => {
      state.user = payload.user;
    },
    setHideDrawerHeader: (state, { payload }: IHideDrawerHeaderAction) => {
      state.hideDrawerHeader = payload.hideDrawerHeader;
    },
  },
});

export const { setToken, setUser, setHideDrawerHeader } = appSlice.actions;

export default appSlice.reducer;
