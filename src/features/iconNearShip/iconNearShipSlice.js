import { createSlice } from "@reduxjs/toolkit";

const iconsSlice = createSlice({
  name: "icons",
  initialState: {
    icons: {
      knight: { hovered: false, isNear: false, animationClass: "" },
      dragon: { hovered: false, isNear: false, animationClass: "" },
      building: { hovered: false, isNear: false, animationClass: "" },
    },
  },
  reducers: {
    setHovered(state, action) {
      const { icon, hovered } = action.payload;
      if (state.icons[icon].hovered !== hovered) {
        state.icons[icon].hovered = hovered;
      }
    },
    setNearShip: (state, action) => {
      const { icon, nearShip } = action.payload;
      state.icons[icon].isNear = nearShip;
    },
    setAnimationClass: (state, action) => {
      const { icon, animationClass } = action.payload;
      if (state.icons[icon]) {
        state.icons[icon].animationClass = animationClass;
      } else {
      }
    },
  },
});

export const { setHovered, setNearShip, setAnimationClass } =
  iconsSlice.actions;

export default iconsSlice.reducer;
