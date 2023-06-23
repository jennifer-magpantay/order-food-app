import React, { useState, useEffect } from "react";

import { Header } from "./components/UI/Header";
import { Button } from "./components/UI/Button";
import { Main } from "./components/UI/Main";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/UI/Footer";
import { Modal } from "./components/UI/Modal";

import { ShoppingCartSimple, X } from "@phosphor-icons/react";

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
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  const saveItemsList = (orderList: OrdersProps): void => {
    setOrders((prevState) => [...prevState, orderList]);
  };

  const handleModalDisplay = () => {
    setIsModalDisplayed(!isModalDisplayed);
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
          onClick={handleModalDisplay}
        />
      </Header>

      <Main>
        <Menu onListItemClick={saveItemsList} />
      </Main>
      <Footer />

      <Modal isModalDisplayed={isModalDisplayed}>
        <Button
          id="close-modal"
          type="button"
          text="Close modal"
          customClasses="icon"
          icon={<X size={32} />}
          onClick={handleModalDisplay}
        />
        <h3>Orders List</h3>

        {orders.length === 0 ? (
          <p>There are no orders to be displayed</p>
        ) : (
          <>
            <ul className="orders--list">
              {orders.map((order) => (
                <li key={order.id} className="orders--list-item">
                  {order.name}
                </li>
              ))}
            </ul>
          </>
        )}

        <Button
          id="checkout"
          type="button"
          text="Proceed to checkout"
          customClasses="cta center"
          onClick={handleModalDisplay}
        />
      </Modal>
    </>
  );
};
