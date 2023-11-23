import React from "react";
import { MainHome, Teste, ShoppingCart, CartBottom, CartTop } from "./styles";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Home = () => {
  return (
    <MainHome>
      <Teste>Testando.</Teste>
      <ShoppingCart>
        <CartTop></CartTop>
        <CartBottom>
          <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons className="paypal" style={{ layout: "vertical" }} />
          </PayPalScriptProvider>
        </CartBottom>
      </ShoppingCart>
    </MainHome>
  );
};

export default Home;
