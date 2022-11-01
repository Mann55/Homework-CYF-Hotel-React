import React from "react";

const RestaurantButton = (props) => {
  const orderOnePizza = props.orderOnePizza;
  return (
    <button onClick={orderOnePizza} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
