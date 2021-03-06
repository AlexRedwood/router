import React from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Welcome from "./Welcome";
import ItemCard from "./ItemCard";
import About from "./About";
import Contact from "./Contact";
import items from "../items.js";
import Sent from "./Sent";
import Checkout from "./Checkout";

const Shop = (props) => {
  let { buyings, setBuyings, formatToCzechCrowns } = props;

  let handleAdd = props.handleAdd;
  let handleRemove = props.handleRemove;
  let handleChangeQuantity = props.handleChangeQuantity;
  let clearCart = props.clearCart;

  return (
    <div className="shop container-fluid d-flex justify-content-center align-items-center">
      <Navbar items={items} buyings={buyings} />
      <Switch>
        <Route
          exact
          path="/shop/"
          render={(props) => (
            <Welcome {...props} buyings={buyings} setBuyings={setBuyings} />
          )}
          buyings={buyings}
          setBuyings={setBuyings}
        />
        <Route
          path="/shop/cart"
          render={(props) => (
            <Cart
              {...props}
              buyings={buyings}
              setBuyings={setBuyings}
              formatToCzechCrowns={formatToCzechCrowns}
              handleRemove={handleRemove}
              handleChangeQuantity={handleChangeQuantity}
              clearCart={clearCart}
            />
          )}
        />
        <Route path="/shop/about" component={About} />
        <Route path="/shop/contact" component={Contact} />
        <Route path="/shop/sent" component={Sent} />
        <Route path="/shop/checkout" component={Checkout} />
        <Route
          path="/shop/:id"
          render={(props) => (
            <ItemCard
              {...props}
              {...items}
              buyings={buyings}
              setBuyings={setBuyings}
              handleAdd={handleAdd}
              formatToCzechCrowns={formatToCzechCrowns}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Shop;
