import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

const ItemCard = (props) => {
  useEffect(() => {
    console.log(props);
  });

  function handleClick(e, item) {
    function isInCart(good) {
      let isFound = props.buyings.find((element) => {
        return element.id === good.id;
      });
      return !!isFound;
    }

    // If item is in the cart, then
    if (isInCart(item)) {
      // 1 make copy of array
      let items = [...props.buyings];
      // 2 find index of the item
      let index = items.findIndex((element) => element.id === item.id);
      // 3 copy the item
      let itemCopy = { ...items[index] };
      // 4 replace property count in it
      itemCopy.count++;
      // 5 put it back in array (mutation!)
      items[index] = itemCopy;
      // 6 set buyings to a new array
      props.setBuyings([...items]);
    } else {
      item.count = 1;
      props.setBuyings([...props.buyings].concat(item));
    }
  }

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
    <div
      key={item.id}
      className="card mb-4 mx-2 col-xs-12 col-sm-4 col-lg-3 shadow-sm p-0"
    >
      <div className="card-header bg-transparent font-weight-bold">
        {item.title}
      </div>
      <img
        src={item.image}
        alt={item.title}
        className="card-img-top w-100"
      ></img>
      <div className="card-body">
        <p className="card-text">{item.description}</p>
        <div className="row justify-content-between">
          <div className="price col-6 d-flex justify-content-start align-items-center">
            {formatToPrice(item.price)}
          </div>
          <div className="buy col-6">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={(e) => handleClick(e, item)}
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
