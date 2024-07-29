import { createSlice } from "@reduxjs/toolkit";

const iconsSlice = createSlice({
  name: "icons",
  initialState: {
    icons: {
      knight: { hovered: false, isNear: false },
      dragon: { hovered: false, isNear: false },
      building: { hovered: false, isNear: false },
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
  },
});

export const { setHovered, setNearShip } = iconsSlice.actions;

export default iconsSlice.reducer;
