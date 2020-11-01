import React from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"} forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
