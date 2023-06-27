import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./store/cartContext";
import { App } from "./App";
import "./styles/app.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
