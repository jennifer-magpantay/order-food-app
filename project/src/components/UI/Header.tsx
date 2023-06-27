import { useContext } from "react";
import { CartContext } from "../../store/cartContext";

import { Logo } from "./Logo";
import { Button } from "./Button";

import { ShoppingCartSimple } from "@phosphor-icons/react";

export const Header = () => {
  const context = useContext(CartContext);
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
