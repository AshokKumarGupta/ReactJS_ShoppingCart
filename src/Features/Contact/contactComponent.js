import React, { Component } from "react";

class ContactComponent extends Component {
  state = { pageName: "Contact us" };
  render() {
    return this.state.pageName;
  }
}

export default ContactComponent;
