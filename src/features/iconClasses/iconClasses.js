import { createSlice } from "@reduxjs/toolkit";

const iconClassesSlice = createSlice({
  name: "iconClasses",
  initialState: {},
  reducers: {
    applyRandomClass(state, action) {
      const { iconId } = action.payload;
      state[iconId] = Math.random() < 0.5 ? "jump" : "wiggle";
    },
    removeClasses(state, action) {
      const { iconId } = action.payload;
      state[iconId] = null;
    },
  },
});

export const { applyRandomClass, removeClasses } = iconClassesSlice.actions;
export default iconClassesSlice.reducer;
