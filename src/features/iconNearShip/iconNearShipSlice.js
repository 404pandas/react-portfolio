import { createSlice } from "@reduxjs/toolkit";

const iconsSlice = createSlice({
  name: "icons",
  initialState: {
    knightNearShip: false,
    dragonNearShip: false,
    buildingNearShip: false,
  },
  reducers: {
    setKnightNearShip(state, action) {
      state.knightNearShip = action.payload;
    },
    setDragonNearShip(state, action) {
      state.dragonNearShip = action.payload;
    },
    setBuildingNearShip(state, action) {
      state.buildingNearShip = action.payload;
    },
  },
});

export const { setKnightNearShip, setDragonNearShip, setBuildingNearShip } =
  iconsSlice.actions;

export default iconsSlice.reducer;
