import React, { Component } from "react";
import ProductComponent from "./productComponent";

class ProductsComponent extends Component {
  state = {
    counter: 0
  };

  handleIncreament = () => {
    let { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  };

  handleDecrement = () => {
    let { counter } = this.state;
    if (!counter) return 0;
    this.setState({
      counter: counter - 1
    });
  };

  handleProductQuantity = type => {
    if (type === "increament") {
      this.handleIncreament();
    } else {
      this.handleDecrement();
    }
  };
  render() {
    const { counter } = this.state;

    return (
      <React.Fragment>
        <ProductComponent
          value={counter}
          onClick={type => this.handleProductQuantity(type)}
        />
      </React.Fragment>
    );
  }
}

export default ProductsComponent;
