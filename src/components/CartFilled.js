import React from "react";
import { Link } from "react-router-dom";

const CartFilled = (props) => {
  let formatToCzechCrowns = props.formatToCzechCrowns;

  let items = props.buyings.map((item) => (
    <div
      key={item.id}
      id={item.id}
      className="px-0 col-12 cart-item pb-2 mb-4 row align-items-center justify-content-between"
    >
      <div className="mb-3 mb-md-0 col-3 col-md-3">
        <img className="cart-item-img rounded" src={item.image} alt=""></img>
      </div>

      <div className="text-center mb-3 mb-md-0 col-5 col-md-3">
        {item.title}
      </div>

      <div className="mb-3 mb-md-0 col-4 text-right text-md-center col-md-3">
        {formatToCzechCrowns(item.price * item.count)}
      </div>

      <div className="d-flex align-items-center justify-content-center col-6 col-md-2">
        <div className="d-flex count-container justify-content-between">
          <button
            type="button"
            className="decrease-btn"
            onClick={props.handleChangeQuantity}
          >
            <i className="fas fa-minus"></i>
          </button>
          <span>{item.count}</span>
          <button
            type="button"
            className="increase-btn"
            onClick={props.handleChangeQuantity}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <hr className="item-border"></hr>
      </div>

      <div className="col-6 col-md-1 d-flex justify-content-end">
        <button
          onClick={props.handleRemove}
          className="remove-btn d-flex justify-content-center align-items-center"
          type="button"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <div className="cart-filled container">
      <div className="mb-5 row d-flex align-items-center">
        <h1 className=" col-7 col-lg-9 px-0">Cart:</h1>
        <div className="col-5 col-lg-3 d-flex justify-content-center align-items-center">
          <Link to="checkout" onClick={props.clearCart}>
            <button type="button" className="checkout btn">
              <span>CHECK OUT</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="row buyings-table">
        <div className="flex-column w-100 d-flex align-items-baseline justify-content-between ">
          {items}
        </div>
      </div>
    </div>
  );
};
export default CartFilled;
