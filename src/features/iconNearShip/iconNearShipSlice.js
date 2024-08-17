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
      state.icons[icon].hovered = hovered;
      if (hovered) {
        const randomClass = Math.random() < 0.5 ? "jump" : "wiggle";
        state.icons[icon].animationClass = randomClass;
      } else {
        state.icons[icon].animationClass = "";
      }
    },
    setNearShip(state, action) {
      const { icon, nearShip } = action.payload;
      state.icons[icon].isNear = nearShip;
      if (nearShip) {
        const randomClass = Math.random() < 0.5 ? "jump" : "wiggle";
        state.icons[icon].animationClass = randomClass;
      } else {
        state.icons[icon].animationClass = "";
      }
    },
  },2
});

export const { setHovered, setNearShip } = iconsSlice.actions;

export default iconsSlice.reducer;
