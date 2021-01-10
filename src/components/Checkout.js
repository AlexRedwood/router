import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkout-main">
      <h1 className="checkout-message text-center mb-5">
        Thank you for the purchase!
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
export default Checkout;
