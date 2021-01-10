import React, { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  const [buyings, setBuyings] = useState([]);

  function clearCart() {
    setBuyings([]);
  }

  function formatToCzechCrowns(number) {
    let formatted = new Intl.NumberFormat("cs-CZ", {
      style: "currency",
      currency: "CZK",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);

    return formatted;
  }

  function animateAddBtn(e) {
    let sibling = e.currentTarget.parentElement.children[1];

    if (!sibling.classList.contains("animated")) {
      sibling.classList.add("animated");

      setTimeout(function () {
        sibling.classList.remove("animated");
      }, 1000);
    }
  }

  function handleChangeQuantity(e) {
    // 1 get id of an item to change its quantity
    let id = e.currentTarget.parentElement.parentElement.parentElement.id;
    // 2 make copy of array
    let items = [...buyings];
    // 3 find index of the item
    let index = items.findIndex((element) => element.id === id);
    // 4 find if increment or decrement
    let direction = e.currentTarget.classList.value.split("-")[0];
    // 5 increment OR decrement item count
    direction === "increase"
      ? (items[index].count += 1)
      : (items[index].count -= 1);
    // 6 if count is 0 then remove item completely
    if (items[index].count < 1) items.splice(index, 1);
    // 7 set buyings to copied array
    setBuyings([...items]);
  }

  function handleRemove(e) {
    // 1 get id of an item to remove from button id
    let id = e.currentTarget.parentElement.parentElement.id;
    // 2 make copy of array
    let items = [...buyings];
    // 3 find index of the item
    let index = items.findIndex((element) => element.id === id);
    // 4 remove item by found index
    items.splice(index, 1);
    // 5 set buyings to copied array (minus removed item)
    setBuyings([...items]);
  }

  function handleAdd(e, item) {
    animateAddBtn(e);

    function isInCart(good) {
      let isFound = buyings.find((element) => {
        return element.id === good.id;
      });
      return !!isFound;
    }

    // If item is in the cart, then
    if (isInCart(item)) {
      // 1 make copy of array
      let items = [...buyings];
      // 2 find index of the item
      let index = items.findIndex((element) => element.id === item.id);
      // 3 copy the item
      let itemCopy = { ...items[index] };
      // 4 replace property count in it
      itemCopy.count++;
      // 5 put it back in array (mutation!)
      items[index] = itemCopy;
      // 6 set buyings to a new array
      setBuyings([...items]);
    } else {
      item.count = 1;
      setBuyings((prevBuyings) => [...prevBuyings].concat(item));
    }
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/shop"
          render={(props) => (
            <Shop
              {...props}
              buyings={buyings}
              setBuyings={setBuyings}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              handleChangeQuantity={handleChangeQuantity}
              formatToCzechCrowns={formatToCzechCrowns}
              clearCart={clearCart}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
