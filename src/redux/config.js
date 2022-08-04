import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/todoSlices";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "deploy",
});

export default store;
