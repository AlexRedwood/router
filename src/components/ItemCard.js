import React from "react";
import { useRouteMatch } from "react-router-dom";

const ItemCard = (props) => {
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
    <div
      key={item.id}
      className="card mb-4 mx-2 col-xs-12 col-sm-4 col-lg-3 p-0"
    >
      <div className="card-header bg-transparent font-weight-bold">
        {item.title}
      </div>
      <img src={item.image} alt={item.title} className="card-img-top"></img>
      <div className="card-body">
        <p className="card-text">{item.description}</p>
        <div className="row justify-content-between">
          <div className="price col-6 d-flex justify-content-start align-items-center">
            {props.formatToCzechCrowns(item.price)}
          </div>
          <div className="buy col-6">
            <button
              type="button"
              className="btn card-btn"
              onClick={(e) => props.handleClick(e, item)}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container-fluid row justify-content-center">{cards}</div>
  );
};

export default ItemCard;
