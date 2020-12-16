import React, { useEffect } from "react";

const Cart = (props) => {
  useEffect(() => {
    console.log("Hi from the cart");
    console.log(props);
  });

  return (
    <div className="container cart">
      <h1>Cart is empty now</h1>
    </div>
  );
};

export default Cart;
