import { createSlice } from "@reduxjs/toolkit";
import {
  IProviderHomeSliceState,
  ISetDayOptionsAction,
  ISetOperatingTimeAction,
  ISetServiceAction,
} from "./types";

const initialState: IProviderHomeSliceState = {
  dayOptions: [],
  operatingTime: undefined,
  service: undefined,
};

export const homeProviderSlice = createSlice({
  name: "providerHomeSlice",
  initialState,
  reducers: {
    setDayOptions: (state, action: ISetDayOptionsAction) => {
      state.dayOptions = action.payload.dayOptions;
    },
    setOperatingTime: (state, action: ISetOperatingTimeAction) => {
      state.operatingTime = action.payload.operatingTime;
    },
    setService: (state, action: ISetServiceAction) => {
      state.service = action.payload.service;
    },
  },
});

export const { setDayOptions, setOperatingTime, setService } =
  homeProviderSlice.actions;

export default homeProviderSlice.reducer;
