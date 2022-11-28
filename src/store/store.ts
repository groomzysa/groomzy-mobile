import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice/appSlice";
import explorerReducer from "./slices/explorerSlice/explorerSlice";

import { api } from "../api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    app: appReducer,
    explorer: explorerReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([api.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
