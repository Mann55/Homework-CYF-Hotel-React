import React from "react";
import RestaurantButton from "./RestaurantButton";

import { useState } from "react";

const Order = (props) => {
  const [orders, setOrders] = useState(0);
  //const pizzas = 0;

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton orderOnePizza={orderOne} />
    </li>
  );
};

export default Order;
