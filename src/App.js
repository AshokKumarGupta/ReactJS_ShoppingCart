import React, { Component } from "react";

import "./App.css";
import RouteService from "./routeService";
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
          </ul>
        </div>
        <RouteService />
      </Router>
    );
  }
}

export default App;
