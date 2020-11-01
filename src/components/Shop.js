import React from "react";
import Navbar from "./Navbar";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Cart from "./Cart";
import Welcome from "./Welcome";
import ItemCard from "./ItemCard";
import About from "./About";
import Contact from "./Contact";
import items from "../items.js";

const Shop = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <div className="shop container-fluid d-flex justify-content-center align-items-center">
      <Navbar items={items} />
      <Switch>
        <Route exact path="/shop/" component={Welcome} />
        <Route path="/shop/cart" component={Cart} />
        <Route path="/shop/about" component={About} />
        <Route path="/shop/contact" component={Contact} />

        <Route
          path="/shop/:id"
          render={(props) => <ItemCard {...props} {...items} />}
        />
      </Switch>
    </div>
  );
};

export default Shop;
