import React from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Welcome from "./Welcome";
import ItemCard from "./ItemCard";
import About from "./About";
import Contact from "./Contact";
import items from "../items.js";

const Shop = (props) => {
  let { buyings, setBuyings, counter, setCounter } = props;

  let handleClick = props.handleClick;

  return (
    <div className="shop container-fluid d-flex justify-content-center align-items-center">
      <Navbar items={items} buyings={buyings} />
      <Switch>
        <Route
          exact
          path="/shop/"
          render={(props) => (
            <Welcome
              {...props}
              counter={counter}
              setCounter={setCounter}
              buyings={buyings}
              setBuyings={setBuyings}
              handleClick={handleClick}
            />
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
              counter={counter}
              setCounter={setCounter}
            />
          )}
        />
        <Route path="/shop/about" component={About} />
        <Route path="/shop/contact" component={Contact} />

        <Route
          path="/shop/:id"
          render={(props) => (
            <ItemCard
              {...props}
              {...items}
              buyings={buyings}
              setBuyings={setBuyings}
              handleClick={handleClick}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Shop;
