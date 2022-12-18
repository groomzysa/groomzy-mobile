import { createSlice } from "@reduxjs/toolkit";
import {
  IProviderHomeSliceState,
  ISetDayOptionsAction,
  ISetSocialOptionsAction,
  ISetOperatingTimeAction,
  ISetServiceAction,
  ISetSocialAction,
} from "./types";

const initialState: IProviderHomeSliceState = {
  dayOptions: [],
  socialOptions: [],
  operatingTime: undefined,
  service: undefined,
  social: undefined,
};

export const homeProviderSlice = createSlice({
  name: "providerHomeSlice",
  initialState,
  reducers: {
    setDayOptions: (state, action: ISetDayOptionsAction) => {
      state.dayOptions = action.payload.dayOptions;
    },
    setSocialOptions: (state, action: ISetSocialOptionsAction) => {
      state.socialOptions = action.payload.socialOptions;
    },
    setOperatingTime: (state, action: ISetOperatingTimeAction) => {
      state.operatingTime = action.payload.operatingTime;
    },
    setService: (state, action: ISetServiceAction) => {
      state.service = action.payload.service;
    },
    setSocial: (state, action: ISetSocialAction) => {
      state.social = action.payload.social;
    },
  },
});

export const {
  setDayOptions,
  setOperatingTime,
  setService,
  setSocial,
  setSocialOptions,
} = homeProviderSlice.actions;

export default homeProviderSlice.reducer;
