import React from "react";
import ReactDOM from "react-dom/client";
import { OrdersProvider } from "./store/ordersContext";
import { App } from "./App";
import "./styles/app.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <OrdersProvider>
      <App />
    </OrdersProvider>
  </React.StrictMode>
);
