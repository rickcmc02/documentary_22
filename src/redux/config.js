import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/todoSlices";

const preloadedState = window.____PRELOADED_STATE__;

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== "deploy",
});

export default store;
