import { configureStore } from "@reduxjs/toolkit";
import iconsReducer from "./iconNearShip/iconNearShipSlice";

// redux
export const store = configureStore({
  reducer: {
    icons: iconsReducer,
  },
});
