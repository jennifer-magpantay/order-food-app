import { createContext, useEffect, useState } from "react";
import { DataProps, MenuProps, OrdersProps } from "../interface/interface";

// set Context
interface OrdersContextProps {
  menu: MenuProps[] | undefined;
  orders: OrdersProps[];
  subtotal: number;
  total: number;
  isModalDisplayed: boolean;
  addItem: (item: OrdersProps) => void;
  removeItem: (id: string) => void;
  manageAmount: (id: string, itemId: string) => void;
  setAmount: (amount: number, itemId: string) => void;
  loadMenu: (data: MenuProps[]) => void;
  modalDisplay: () => void;
}

const defaultValues: OrdersContextProps = {
  menu: [],
  orders: [],
  subtotal: 0,
  total: 0,
  isModalDisplayed: false,
  addItem: (item) => [],
  removeItem: (id) => [],
  loadMenu: (data) => [],
  manageAmount: (id, itemId) => [],
  setAmount: (amount, itemId) => [],
  modalDisplay: () => "",
};

export const OrdersContext = createContext(defaultValues);

// Set Provider
interface OrdersProviderProps {
  children: React.ReactNode;
}

// create a Provider
export const OrdersProvider = ({ children }: OrdersProviderProps) => {
  const [menu, setMenu] = useState<MenuProps[]>([]);
  const [orders, setOrders] = useState<OrdersProps[]>([]);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  // set functions before declare it as provoder values
  const loadMenu = (data: MenuProps[]) => {
    setMenu(data);
  };

  const modalDisplay = () => {
    setIsModalDisplayed(!isModalDisplayed);
  };

  const addItemToCart = (item: OrdersProps) => {
    setOrders((prevState) => [...prevState, item]);
  };

  const removeItemFromCart = (id: string) => {
    const filteredOrders = orders.filter((order) => order.id !== id);
    setOrders(filteredOrders);
  };

  const manageItemAmount = (id: string, itemId: string) => {
    const updatedMenu = menu.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          amount:
            id === "increase"
              ? item.amount + 1
              : item.amount === 0
              ? 0
              : item.amount - 1,
        };
      }
      return item;
    });
    setMenu(updatedMenu);
  };

  const setAmount = (amount: number, itemId: string) => {
    const updatedMenu = menu.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          amount: amount,
        };
      }
      return item;
    });
    setMenu(updatedMenu);
  };

  // set the values as obj to be shared amoung the app components
  const ordersContext = {
    menu: menu,
    orders: orders,
    subtotal: 0,
    total: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    loadMenu: loadMenu,
    manageAmount: manageItemAmount,
    setAmount: setAmount,
    isModalDisplayed: isModalDisplayed,
    modalDisplay: modalDisplay,
  };
  return (
    <OrdersContext.Provider value={ordersContext}>
      {children}
    </OrdersContext.Provider>
  );
};
