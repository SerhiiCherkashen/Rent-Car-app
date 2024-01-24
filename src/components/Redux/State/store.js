import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "../Slice/VehicleSlice/VehicleSlice";
// import vehicleReducer from "../Slice/VehicleSlice/VehicleSlice";

export const store = configureStore({
  reducer: {
    vehicleReducer,
  },
});
