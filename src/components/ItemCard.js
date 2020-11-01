import React from "react";
import { useRouteMatch } from "react-router-dom";
import items from "../items";

const ItemCard = (props) => {
  function formatToPrice(number) {
    let formatted = new Intl.NumberFormat("cs-CZ", {
      style: "currency",
      currency: "CZK",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);

    return formatted;
  }

  let goods;

  let { url } = useRouteMatch();
  let goodsTypeFromUrl = url.split("/")[2];
  let armors = Object.keys(props.armor);
  let weapons = Object.keys(props.weapons);

  if (armors.includes(goodsTypeFromUrl)) {
    goods = props.armor[goodsTypeFromUrl];
  } else if (weapons.includes(goodsTypeFromUrl)) {
    goods = props.weapons[goodsTypeFromUrl];
  } else {
    console.log("Something went horribly wrong in ItemCard");
  }

  let cards = goods.map((item) => (
    <div key={item.id} className="card mb-4 mx-2">
      <div className="card-header bg-transparent">{item.title}</div>
      <img src={item.image} alt={item.title} className="card-img-top"></img>
      <div className="card-body">
        <p className="card-text">{item.description}</p>
        <div className="row justify-content-between">
          <div className="price col-6 d-flex justify-content-start align-items-center">
            {formatToPrice(item.price)}
          </div>
          <div className="buy col-6">
            <button type="button" className="btn btn-secondary">
              BUY
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container-fluid row row-cols-1 row-cols-sm-3 row-cols-md-4 justify-content-center">
      {cards}
    </div>
  );
};

export default ItemCard;
