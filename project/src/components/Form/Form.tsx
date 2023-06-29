import React, { useContext } from "react";
import { OrdersContext } from "../../store/ordersContext";
import { Button } from "../UI/Button";
import { formatPrice } from "../../helpers/randomPrice";

interface FormProps {
  dataId: string;
  children: React.ReactNode;
}

export const Form = ({ dataId, children }: FormProps) => {
  const { menu, addItem } = useContext(OrdersContext);

  const calculateSubtotal = (amount: number, price: string) => {
    const _price = price.replace("€", "").replace(",", ".").trim();
    const subtotal = amount * Number(_price);
    return formatPrice(subtotal);
  };
  const handleSubmitItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;
    const filteredItem = menu?.find((item) => item.id === target.dataset.id);
    if (filteredItem) {
      const newItem = {
        ...filteredItem,
        subtotal: calculateSubtotal(filteredItem?.amount, filteredItem.price),
      };
      addItem(newItem);
    }
  };

  return (
    <form onSubmit={handleSubmitItem} data-id={dataId}>
      {children}
      <Button id="submit" type="submit" text="Add" customClasses="cta add" />
    </form>
  );
};
