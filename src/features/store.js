import { configureStore } from "@reduxjs/toolkit";
import iconsReducer from "./iconNearShip/iconNearShipSlice";

// redux fix yourseeeeelf
export const store = configureStore({
  reducer: {
    icons: iconsReducer,
  },
});
