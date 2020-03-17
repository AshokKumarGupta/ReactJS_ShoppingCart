import React from "react";

const ProductComponent = props => {
  return (
    <React.Fragment>
      <span>{!props.value ? "Zero" : props.value}</span>

      <button onClick={() => props.onClick("increament")}>{"+"}</button>
      <button onClick={() => props.onClick("decrement")}>{"-"}</button>
    </React.Fragment>
  );
};

export default ProductComponent;
