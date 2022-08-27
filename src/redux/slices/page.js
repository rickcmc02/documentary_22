import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: "main",
  },
  reducers: {
    toCareerPage: (state) => {
      state.value = "career";
    },
    toEducationPage: (state) => {
      state.value = "education";
    },
  },
});

export const { toCareerPage, toEducationPage } = pageSlice.actions;
export default pageSlice.reducer;
