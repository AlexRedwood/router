import React from "react";
import Navbar from "./Navbar";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Cart from "./Cart";
import Welcome from "./Welcome";

const Shop = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="shop container-fluid">
      <Navbar url={url} path={path} />
      <Switch>
        <Route exact path={`${path}`} component={Welcome} />
        <Route path={`${path}/cart`} component={Cart} />
      </Switch>
    </div>
  );
};

export default Shop;
