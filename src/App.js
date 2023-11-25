import React from "react";
import Header from "./Header/header";
import Home from "./Page/home";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  const initialOptions = {
    clientId:
      "AczCbE3RXjlf2UY7CKsGiWlGtCx2H8YI9q7QCfN34ysNU6TKGZTsbR5m2U9shOKSlRHVCGF-S-palk1Z",
    currency: "USD",
    intent: "capture",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <GlobalStyle />
      <Header />
      <Home />
    </PayPalScriptProvider>
  );
}

export default App;
