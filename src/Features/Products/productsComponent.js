import React, { Component } from "react";
import ProductComponent from "./productComponent";

class ProductsComponent extends Component {
  state = {
    counterValue: 0
  };

  handleUpdatedValue = value => {
    this.setState({
      counterValue: value
    });
  };

  render() {
    const { counterValue } = this.state;
    return (
      <React.Fragment>
        <p>Value from child to parent: {counterValue}</p>
        <ProductComponent
          updateCounterValueCallback={value => this.handleUpdatedValue(value)}
        />
      </React.Fragment>
    );
  }
}

export default ProductsComponent;
