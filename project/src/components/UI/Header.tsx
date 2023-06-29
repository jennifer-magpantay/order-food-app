import { useContext } from "react";
import { OrdersContext } from "../../store/ordersContext";

import { Logo } from "./Logo";
import { Button } from "./Button";

import { ShoppingCartSimple } from "@phosphor-icons/react";

export const Header = () => {
  const context = useContext(OrdersContext);
  const { orders, modalDisplay } = context;

  const handleModalDisplay = () => {
    modalDisplay();
  };

  return (
    <header>
      <Logo color="#f2410d" />
      <Button
        customClasses="cta cart"
        id="cart"
        type="button"
        text="Cart"
        icon={<ShoppingCartSimple size={18} weight="bold" />}
        dataCount={orders ? orders.length : 0}
        onClick={handleModalDisplay}
      />
    </header>
  );
};
