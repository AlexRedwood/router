import React from "react";
import { Link } from "react-router-dom";

const Sent = () => {
  return (
    <div className="sent-main">
      <h1 className="sent-message text-center mb-5">
        Message is sent. Thank you!
      </h1>
      <Link to="/shop">
        <button
          type="button"
          id="back-to-store-btn"
          className="mt-5 btn btn-block"
        >
          <span>BACK TO STORE</span>
        </button>
      </Link>
    </div>
  );
};
export default Sent;
