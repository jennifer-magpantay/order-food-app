import { useContext } from "react";
import { OrdersContext } from "./store/ordersContext";

import { Header } from "./components/UI/Header";
import { Hero } from "./components/UI/Hero";
import { Main } from "./components/UI/Main";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/UI/Footer";
import { Modal } from "./components/UI/Modal";

import { calculateTotalPriceByItemAmount } from "./helpers/totalAmount";
import { Table } from "./components/Table/Table";
import { TableBodyRow } from "./components/Table/TableBodyRow";

/**
 * TODO:
 * - find a way to not fetch the menu all the time
 * - maybe save it into storage?
 * - set table component
 * - add to modal list a delete icon from the orders list
 * - also on modal, is a user set a item to 0, remove it from the orders list
 * - if a user clicks twice or more on add button of the same item, increase its amount
 * - add a animation to cart button
 * - on orders list, add to each item a subtotal prop
 * - set a function to calcutate the the total of the orders list, reducing the subtotal prop of orders list
 */

export const App = () => {
  const context = useContext(OrdersContext);
  const { orders, isModalDisplayed } = context;

  return (
    <>
      <Header />
      <Hero />
      <Main>
        <Menu />
      </Main>
      <Footer />

      <Modal isModalDisplayed={isModalDisplayed} title="Orders list">
        {orders.length === 0 ? (
          <p>There are no orders to be displayed</p>
        ) : (
          <Table total={orders}>
            {orders.map((order) => (
              <TableBodyRow
                key={order.id}
                id={order.id}
                name={order.description}
                price={order.price}
                amount={order.amount}
                subtotal={order.subtotal}
              />
            ))}
          </Table>
        )}
      </Modal>
    </>
  );
};
