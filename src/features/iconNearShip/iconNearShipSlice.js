import { createSlice } from "@reduxjs/toolkit";

const iconsSlice = createSlice({
  name: "icons",
  initialState: {
    icons: {
      knight: { hovered: false, nearShip: false },
      dragon: { hovered: false, nearShip: false },
      building: { hovered: false, nearShip: false },
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
    setNearShip(state, action) {
      const { icon, nearShip } = action.payload;
      if (state.icons[icon].nearShip !== nearShip) {
        state.icons[icon].nearShip = nearShip;
        console.log(`setNearShip: ${icon} is now ${nearShip}`);
      }
    },
  },
});

export const { setHovered, setNearShip } = iconsSlice.actions;

export default iconsSlice.reducer;
