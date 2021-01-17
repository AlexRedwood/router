import React from "react";
import CartEmpty from "./CartEmpty";
import CartFilled from "./CartFilled";

const Cart = (props) => {
  let buyings = props.buyings;

  let cartContent;

  if (buyings.length === 0) {
    cartContent = <CartEmpty />;
  } else {
    cartContent = (
      <CartFilled
        formatToCzechCrowns={props.formatToCzechCrowns}
        buyings={buyings}
        handleRemove={props.handleRemove}
        handleChangeQuantity={props.handleChangeQuantity}
        clearCart={props.clearCart}
      />
    );
  }

  return (
    <div className="container cart d-flex justify-content-center">
      {cartContent}
    </div>
  );
};

export default Cart;
