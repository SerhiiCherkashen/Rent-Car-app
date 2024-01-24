// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { stateConst } from "../../State/StateConst/StateConst";
import { stateVehicle } from "../../State/StatesParts/StateVehicle";
import { stateAllRedux } from "../../State/StateAllRedux";

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: stateAllRedux,
  reducers: {
    changeMarkModelCar: (state, actions) => {
      const chRC = state.stateVehicle.chooseRentCar;
      const { mark, model } = actions.payload;

      let indexRentCar = stateConst.rentCar.findIndex(
        (element) => element.mark === mark && element.model === model
      );
      state.stateVehicle.indexChooseRentCar = indexRentCar;
      // console.log("mark, model : ", mark, model, indexRentCar);
      // console.log(
      //   "stateConst.rentCar[indexRentCar] : ",
      //   stateConst.rentCar[indexRentCar]
      // );
      state.stateVehicle.chooseRentCar = stateConst.rentCar[indexRentCar];
      // state.stateVehicle.arrayChooseRentCar = [];
      // state.stateVehicle.arrayChooseRentCar.push(
      //   stateConst.rentCar[indexRentCar].image,
      //   stateConst.rentCar[indexRentCar].mark,
      //   stateConst.rentCar[indexRentCar].model,
      //   stateConst.rentCar[indexRentCar].year,
      //   stateConst.rentCar[indexRentCar].doors,
      //   stateConst.rentCar[indexRentCar].as,
      //   stateConst.rentCar[indexRentCar].transmission,
      //   stateConst.rentCar[indexRentCar].fuel
      // );
    },
  },
});

export const { changeMarkModelCar } = vehicleSlice.actions;
export default vehicleSlice.reducer;
