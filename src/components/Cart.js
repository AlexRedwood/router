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
      />
    );
  }

  return <div className="container cart">{cartContent}</div>;
};

export default Cart;
