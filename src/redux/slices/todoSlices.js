import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  page: "main",
};
const changePage = createAction("CHANGE_PAGE");

const rootReducer = createReducer(initialState, {
  [changePage]: (state, action) => (state.page = action.payload),
});

export default rootReducer;
