import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
