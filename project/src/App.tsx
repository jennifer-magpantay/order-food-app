import { useContext } from "react";
import { CartContext } from "./store/cartContext";

import { Header } from "./components/UI/Header";
import { Hero } from "./components/UI/Hero";
import { Main } from "./components/UI/Main";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/UI/Footer";
import { Modal } from "./components/UI/Modal";

import { calculateTotalPriceByItemAmount } from "./helpers/totalAmount";

/**
 * TODO:
 * - find a way to not fetch the menu all the time
 * - maybe save it into storage?
 * - set function to remoce item from list
 */

export interface OrdersProps {
  id: string;
  name: string;
  price: string;
  amount: number;
}

export const App = () => {
  const context = useContext(CartContext);
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
          <>
            <table>
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Price</th>
                  <th>Qt</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.name}>
                    <td>{order.name}</td>
                    <td>{order.price}</td>
                    <td>{order.amount}</td>
                    <td>
                      {calculateTotalPriceByItemAmount(
                        order.price,
                        order.amount
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </Modal>
    </>
  );
};
