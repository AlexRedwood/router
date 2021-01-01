import React from "react";

const CartFilled = (props) => {
  let formatToCzechCrowns = props.formatToCzechCrowns;

  let items = props.buyings.map((item) => (
    <tr key={item.id}>
      <td className="align-middle">
        <img className="cart-item-img rounded" src={item.image} alt=""></img>
      </td>
      <td className="align-middle">{item.title}</td>
      <td className="align-middle">
        {formatToCzechCrowns(item.price * item.count)}
      </td>
      <td className="align-middle">{item.count}</td>
    </tr>
  ));

  return (
    <div className="cart-filled">
      <div className="row">
        <h1 className="mb-5 col-9">Cart:</h1>
        <button type="button" className="mb-5 col-3 btn">
          <span>CHECK OUT</span>
        </button>
      </div>
      <table className="table">
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};
export default CartFilled;
