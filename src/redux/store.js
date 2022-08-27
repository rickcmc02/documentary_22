import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./slices/page";

const preloadedState = window.____PRELOADED_STATE__;

const store = configureStore({
  reducer: {
    page: pageSlice,
  },
  preloadedState,
  devTools: process.env.NODE_ENV !== "deploy",
});

export default store;
