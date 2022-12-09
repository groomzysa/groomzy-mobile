import { createSlice } from "@reduxjs/toolkit";
import { IHomeSliceState, IHomeSliceSetProviderAction } from "./types";

const initialState: IHomeSliceState = {
  provider: undefined,
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setProvider: (state, action: IHomeSliceSetProviderAction) => {
      state.provider = action.payload.provider;
    },
  },
});

export const { setProvider } = homeSlice.actions;

export default homeSlice.reducer;
