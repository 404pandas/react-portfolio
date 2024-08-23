import { configureStore } from "@reduxjs/toolkit";
import iconsReducer from "./iconNearShip/iconNearShipSlice";

export const store = configureStore({
  reducer: {
    icons: iconsReducer,
  },
});
