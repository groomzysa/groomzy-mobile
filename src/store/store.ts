import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice/appSlice";
import homeReducer from "./slices/homeSlice/homeSlice";
import homeProviderReducer from "./slices/providerHomeSlice/providerHomeSlice";

import { api } from "../api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    app: appReducer,
    home: homeReducer,
    homeProvider: homeProviderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([api.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
