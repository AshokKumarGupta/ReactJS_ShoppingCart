import React, { Component } from "react";

class HomeComponent extends Component {
  state = { pageName: "Home" };
  render() {
    return this.state.pageName;
  }
}

export default HomeComponent;
