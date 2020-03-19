import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { fakeAuth } from "./Features/Shared/helpers/routeHelper";
import HomeComponent from "./Features/Home/homeComponent";
import ProductsComponent from "./Features/Products/productsComponent";
import ContactComponent from "./Features/Contact/contactComponent";
import LoginComponent from "./Features/Login/loginComponent";

export default function RouteService() {
  return (
    <Switch>
      <Route exact path="/">
        <HomeComponent />
      </Route>
      <Route path="/login">
        <LoginComponent />
      </Route>
      <PrivateRoute path="/products">
        <ProductsComponent />
      </PrivateRoute>
      <Route path="/contactus">
        <ContactComponent />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
