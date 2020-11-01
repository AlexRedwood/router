import React from "react";
import { useRouteMatch } from "react-router-dom";

const ItemCard = (props) => {
  let { url } = useRouteMatch();
  console.log(useRouteMatch());

  return (
    <div className="container itemcard">
      <h1>Hello from ItemCard id: {url}</h1>
    </div>
  );
};

export default ItemCard;
