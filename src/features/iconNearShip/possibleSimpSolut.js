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
        console.log(`setHovered: ${icon} is now ${hovered}`);
      }
    },
    setNearShip: (state, action) => {
      const { iconId, isNear } = action.payload;
      state[iconId] = isNear;
    },
    applyRandomClassRedux(state, action) {
      const { icon, randomClass } = action.payload;
      // should randomClass also be handled by redux???
      state.icons[icon].animationClass = randomClass;
    },
    removeRandomClassRedux(state, action) {
      const { icon } = action.payload;
      state.icons[icon].animationClass = "";
    },
  },
});

export const {
  setHovered,
  setNearShip,
  applyRandomClassRedux,
  removeRandomClassRedux,
} = iconsSlice.actions;

export default iconsSlice.reducer;
