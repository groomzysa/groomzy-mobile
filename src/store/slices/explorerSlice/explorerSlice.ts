import { createSlice } from "@reduxjs/toolkit";
import {
    IExplorerSliceState,
  IExplorerSliceSetProviderAction,
} from "./types";

const initialState: IExplorerSliceState = {
    provider: undefined
};

export const explorerSlice = createSlice({
  name: "explorerSlice",
  initialState,
  reducers: {
    setProvider: (state, action: IExplorerSliceSetProviderAction) => {
      state.provider = action.payload.provider;
    },
  },
});

export const { setProvider } = explorerSlice.actions;

export default explorerSlice.reducer;
