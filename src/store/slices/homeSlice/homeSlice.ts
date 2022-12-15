import { createSlice } from "@reduxjs/toolkit";
import { IHomeSliceState, ISetProviderAction } from "./types";

const initialState: IHomeSliceState = {
  provider: undefined,
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setProvider: (state, action: ISetProviderAction) => {
      state.provider = action.payload.provider;
    },
  },
});

export const { setProvider } = homeSlice.actions;

export default homeSlice.reducer;
