import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: "main",
  },
  reducers: {
    toNavPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toNavPage } = pageSlice.actions;
export default pageSlice.reducer;
