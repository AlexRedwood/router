import React from "react";
import Navbar from "./Navbar";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Cart from "./Cart";
import Welcome from "./Welcome";
import ItemCard from "./ItemCard";

const Shop = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="shop container-fluid">
      <Navbar url={url} path={path} />
      <Switch>
        <Route exact path="/shop/" component={Welcome} />
        <Route path="/shop/cart" component={Cart} />
        <Route path="/shop/:id" component={ItemCard} />
      </Switch>
    </div>
  );
};

export default Shop;
