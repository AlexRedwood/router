import React from "react";

const CartFilled = (props) => {
  let items = props.buyings.map((item) => (
    <div className="card" key={item.id}>
      <div className="row">
        <div className="col-2">
          <img src={item.image} alt="" width="100"></img>
        </div>
        <div className="col-5">
          <div className="col-6">Name:</div>
          <div className="col-6">Price:</div>
          <div className="col-6">Quantity:</div>
        </div>
        <div className="col-5">
          <div className="col-6">{item.title}</div>
          <div className="col-6">{item.price} CZK</div>
          <div className="col-6">{item.count}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Cart:</h1>
      <div>{items}</div>
    </div>
  );
};
export default CartFilled;
