import { createSlice } from "@reduxjs/toolkit";
import {
  IProviderHomeSliceState,
  IProviderHomeSliceSetDayOptionsAction,
} from "./types";

const initialState: IProviderHomeSliceState = {
  dayOptions: [],
};

export const homeProviderSlice = createSlice({
  name: "providerHomeSlice",
  initialState,
  reducers: {
    setDayOptions: (state, action: IProviderHomeSliceSetDayOptionsAction) => {
      state.dayOptions = action.payload.dayOptions;
    },
  },
});

export const { setDayOptions } = homeProviderSlice.actions;

export default homeProviderSlice.reducer;
