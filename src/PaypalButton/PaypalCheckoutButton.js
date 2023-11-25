import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = () => {
  const url = "https://pay-pal-back-end.vercel.app/";
  
  const createOrder = async (data) => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    const response = await fetch(`${url}my-server/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
      }),
    });
    const order = await response.json();
    return order.id;
  };

  const onApprove = async (data) => {
    const response = await fetch(`${url}my-server/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    });

    alert(`Successful transaction, Thank you for your purchase!
     ID transaction: ${data.orderID}`);
    return await response.json();
  };

  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PaypalCheckoutButton;
