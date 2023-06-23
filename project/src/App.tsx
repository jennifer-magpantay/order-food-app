import React, { useState, useEffect } from "react";

import { Header } from "./components/UI/Header";
import { Button } from "./components/UI/Button";
import { Main } from "./components/UI/Main";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/UI/Footer";

import { ShoppingCartSimple } from "@phosphor-icons/react";

/**
 * TODO:
 * - find a way to not fetch the menu all the time
 * - maybe save it into storage?
 * - set event to cart button on header
 * - create Modal to open order list
 * - set counting items on cart header
 */

export interface OrdersProps {
  id: string;
  name: string;
}

export interface OrdersListProps {
  orders: OrdersProps[];
}

export const App = () => {
  const [orders, setOrders] = useState<OrdersProps[]>([]);

  const saveItemsList = (orderList: OrdersProps): void => {
    setOrders((prevState) => [...prevState, orderList]);
  };
  return (
    <>
      <Header>
        <Button
          customClasses="cta cart"
          id="cart"
          type="button"
          text="Cart"
          icon={<ShoppingCartSimple size={18} weight="bold" />}
          dataCount={orders.length}
        />
      </Header>

      <Main>
        <Menu onListItemClick={saveItemsList} />
      </Main>
      <Footer />
    </>
  );
};
