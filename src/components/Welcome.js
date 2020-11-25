import React from "react";
import knightImg from "../assets/backgrounds/Knight.png";

const Welcome = () => {
  return (
    <div className="container-fluid row welcome justify-content-between align-items-center w-100 h-100">
      <div className="my-4 col-4 container">
        <img className="crusader" src={knightImg} alt="crusader"></img>
      </div>
      <div className="my-4 call col-4 container">
        <h1 className="first-part-call display-4 text-right">
          Crusade is calling.
        </h1>
        <h1 className="second-part-call display-4 text-right">
          Will you answer?
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
