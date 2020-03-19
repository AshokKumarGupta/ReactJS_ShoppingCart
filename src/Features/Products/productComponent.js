import React, { Component } from "react";
class ProductComponent extends Component {
  state = { value: 0 };

  handleIncreament = () => {
    let { value } = this.state;
    const { updateCounterValueCallback } = this.props;

    this.setState(
      {
        value: value + 1
      },
      () => {
        if (!!updateCounterValueCallback) {
          updateCounterValueCallback(this.state.value);
        }
      }
    );
  };

  handleDecrement = () => {
    let { value } = this.state;
    const { updateCounterValueCallback } = this.props;

    if (!value) return 0;
    this.setState(
      {
        value: value - 1
      },
      () => {
        if (!!updateCounterValueCallback) {
          updateCounterValueCallback(this.state.value);
        }
      }
    );
  };

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <span>{!value ? "Zero" : value}</span>

        <button onClick={() => this.handleIncreament()}>{"+"}</button>
        <button onClick={() => this.handleDecrement()}>{"-"}</button>
      </React.Fragment>
    );
  }
}

export default ProductComponent;
