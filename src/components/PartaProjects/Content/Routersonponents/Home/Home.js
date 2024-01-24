import React from "react";
import "./Home.css";
import { stateConst } from "../../../../Redux/State/StateConst/StateConst";
import { useSelector } from "react-redux";

const Home = () => {
  const name = useSelector((state) => state.vehicleReducer.stateVehicle.name);
  return (
    <div id="home" className="home">
      <h1>Home</h1>
      <h1>Name : {name}</h1>
      <div className="wrap">
        <div className="wrap-text">
          <span className="text h3">Plan your trip now</span>
          <span className="text h1">Save big with uor car rental</span>
          <span className="text h5">
            Rent the car of your dreams . Unbeatable prices , unlimited miles .
            Flexible pic-up options and match more
          </span>
          <div>
            <button>Book Read</button>
            <button>Learn More</button>
          </div>
        </div>
        <div>
          <img
            className="mercedes"
            src={stateConst.images.mercedes}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
