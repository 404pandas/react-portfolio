import { configureStore } from "@reduxjs/toolkit";
import iconsReducer from "../features/iconNearShip/iconNearShipSlice";

// redux
export const store = configureStore({
  reducer: {
    icons: iconsReducer,
  },
});
