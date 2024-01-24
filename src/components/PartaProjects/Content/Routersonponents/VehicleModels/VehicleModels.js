import React from "react";
import "./VehicleModels.css";
import { stateConst } from "../../../../Redux/State/StateConst/StateConst";
import { useDispatch, useSelector } from "react-redux";
import { changeMarkModelCar } from "../../../../Redux/Slice/VehicleSlice/VehicleSlice";

const VehicleModels = () => {
  const dispatch = useDispatch();
  const { chooseRentCar, indexChooseRentCar } = useSelector(
    (state) => state.vehicleReducer.stateVehicle
  );
  return (
    <div id="vehicle-models" className="vehicle-models">
      <h3>Vehicle Models</h3>
      <h1>Our Rental Fleet</h1>
      <h5>
        Choose from a variety of our amazing vehicles to rent from our next
        adventure or business trip
      </h5>
      {/* ---------------------------------------- */}
      <div className="wrap-choose-car">
        <div className="wrap-btn">
          {stateConst.rentCar.map((element, index) => {
            return (
              <button
                style={{
                  backgroundColor: indexChooseRentCar === index && "red",
                  color: indexChooseRentCar === index && "white",
                }}
                key={index + Date.now()}
                className="btn-mark-model"
                onClick={() =>
                  dispatch(
                    changeMarkModelCar({
                      mark: element.mark,
                      model: element.model,
                    })
                  )
                }>
                {element.mark} {element.model}
              </button>
            );
          })}
        </div>
        {/*  */}
        <div>
          <img src={chooseRentCar.image} />
        </div>
        {/*  */}
        <div className="wrapper-params">
          <div className="rent-per-day">
            <div className="sum">{chooseRentCar.rentPerDay}</div>
            <div>/ rent per day</div>
          </div>
          <div className="wrap-parameter">
            <div className="parameter-name">mark</div>
            <div className="slash">|</div>
            <div className="parameter-car">{chooseRentCar.mark}</div>
          </div>
          <div className="wrap-parameter">
            <div className="parameter-name">model</div>
            <div className="slash">|</div>
            <div className="parameter-car">{chooseRentCar.model}</div>
          </div>
          <div className="wrap-parameter">
            <div className="parameter-name">year</div>
            <div className="slash">|</div>
            <div className="parameter-car">{chooseRentCar.year}</div>
          </div>
          <div className="wrap-parameter">
            <div className="parameter-name">doors</div>
            <div className="slash">|</div>
            <div className="parameter-car">{chooseRentCar.doors}</div>
          </div>
          <div className="wrap-parameter">
            <div className="parameter-name">A/S</div>
            <div className="slash">|</div>
            <div className="parameter-car">{chooseRentCar.as}</div>
          </div>
          <div className="wrap-parameter">
            <div className="parameter-name">trans-sion</div>
            <div className="slash">|</div>
            <div className="parameter-car">{chooseRentCar.transmission}</div>
          </div>
          <div className="wrap-parameter">
            <div className="parameter-name">fuel</div>
            <div className="slash">|</div>
            <div className="parameter-car">{chooseRentCar.fuel}</div>
          </div>
          <div>
            <button>Reserve Now</button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default VehicleModels;
{
  /* {stateConst.paramsRentCar.map((element, index) => {
            return (
              <div key={index + Date.now()} className="wrap-parameter">
                <div className="parameter-name">{element}</div>
                <div className="slash">|</div>
                <div className="parameter-car">
                  {stateVehicle.arrayChooseRentCar[index + 1]}
                </div>
              </div>
            );
          })} */
}
