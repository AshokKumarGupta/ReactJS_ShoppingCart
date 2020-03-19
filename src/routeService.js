import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "./Features/Home/homeComponent";
import ProductsComponent from "./Features/Products/productsComponent";
import ContactComponent from "./Features/Contact/contactComponent";

export default function RouteService() {
  return (
    <Switch>
      <Route exact path="/">
        <HomeComponent />
      </Route>
      <Route path="/products">
        <ProductsComponent />
      </Route>
      <Route path="/contactus">
        <ContactComponent />
      </Route>
    </Switch>
  );
}
