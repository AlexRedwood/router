import React from "react";
import { Link } from "react-router-dom";

const CartFilled = (props) => {
  let formatToCzechCrowns = props.formatToCzechCrowns;

  let items = props.buyings.map((item) => (
    <tr key={item.id} id={item.id}>
      <td className="align-middle">
        <img className="cart-item-img rounded" src={item.image} alt=""></img>
      </td>
      <td className="align-middle">{item.title}</td>
      <td className="align-middle">
        {formatToCzechCrowns(item.price * item.count)}
      </td>
      <td className="align-middle">
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
      </td>
      <td className="align-middle">
        <button
          onClick={props.handleRemove}
          className="remove-btn d-flex justify-content-center align-items-center"
          type="button"
        >
          <i className="fas fa-times"></i>
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="cart-filled">
      <div className="row">
        <h1 className="mb-5 col-9">Cart:</h1>
        <Link to="checkout" className="col-3" onClick={props.clearCart}>
          <button type="button" className="checkout mb-5  btn">
            <span>CHECK OUT</span>
          </button>
        </Link>
      </div>
      <table className="table">
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};
export default CartFilled;
