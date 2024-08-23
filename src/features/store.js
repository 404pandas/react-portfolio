import { configureStore } from "@reduxjs/toolkit";

import iconsReducer from "../features/iconNearShip/iconNearShipSlice";

export const store = configureStore({
  reducer: {
    icons: iconsReducer,
    iconClasses: iconClassesReducer,
  },
});
