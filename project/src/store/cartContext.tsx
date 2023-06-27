import { createContext, useState } from "react";
import { DataProps } from "../components/Menu/Menu";
import { OrdersProps } from "../App";

// set Context
interface CartContextProps {
  menu: DataProps[] | undefined;
  orders: OrdersProps[];
  subtotal: number;
  total: number;
  isModalDisplayed: boolean;
  addItem: (item: OrdersProps) => void;
  removeItem: (id: string) => void;
  loadMenu: (data: DataProps[]) => void;
  modalDisplay: () => void;
}

const defaultValues: CartContextProps = {
  menu: [],
  orders: [],
  subtotal: 0,
  total: 0,
  isModalDisplayed: false,
  addItem: (item) => [],
  removeItem: (id) => [],
  loadMenu: (data) => [],
  modalDisplay: () => "",
};

export const CartContext = createContext(defaultValues);

// Set Provider
interface CartProviderProps {
  children: React.ReactNode;
}

// create a Provider
export const CartProvider = ({ children }: CartProviderProps) => {
  const [menu, setMenu] = useState<DataProps[]>();
  const [orders, setOrders] = useState<OrdersProps[]>([]);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  // set functions before declare it as provoder values
  const addItemToCart = (item: OrdersProps) => {
    setOrders((prevState) => [...prevState, item]);
  };

  const removeItemFromCart = (id: string) => {
    return id;
  };

  const loadMenu = (data: DataProps[]) => {
    setMenu(data);
  };

  const modalDisplay = () => {
    setIsModalDisplayed(!isModalDisplayed);
  };

  // set the values as obj to be shared amoung the app components
  const cartContext = {
    menu: menu,
    orders: orders,
    subtotal: 0,
    total: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    loadMenu: loadMenu,
    isModalDisplayed: isModalDisplayed,
    modalDisplay: modalDisplay,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
