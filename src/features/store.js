import { configureStore } from "@reduxjs/toolkit";
import iconsReducer from "./iconNearShip/iconNearShipSlice";
import iconClassesReducer from "./iconClasses/iconClasses";

export const store = configureStore({
  reducer: {
    icons: iconsReducer,
    iconClasses: iconClassesReducer,
  },
});
