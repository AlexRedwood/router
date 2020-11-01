import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="background"></div>

      <div className="title-container">
        <Link to="/shop">
          <span className="title">
            <h1>CRUSADE CALLS</h1>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
