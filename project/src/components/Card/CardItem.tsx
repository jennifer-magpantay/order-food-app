import { useContext, useRef } from "react";
import { OrdersContext } from "../../store/ordersContext";

import { Form } from "../Form/Form";

interface CardItemProps {
  id: string;
  description: string;
  price: string;
}

export const CardItem = ({ id, description, price }: CardItemProps) => {
  const context = useContext(OrdersContext);
  const { menu, addItem } = context;

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitItem = (id: string) => {
    // find item by id
    const item = menu?.find((order) => order.idMeal === id);
    // get its amount value - in case has changed
    const itemAmount = formRef?.current?.elements[1].getAttribute("value");
    // save it on new item
    if (item) {
      const newItem = {
        id: item.idMeal,
        name: item.strMeal,
        price: item.price,
        amount: Number(itemAmount),
      };
      // pass it to context function
      addItem(newItem);
    }
  };

  return (
    <div className="card" id={id}>
      <div className="card--main">
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <div className="card--aside">
        <Form id={id} onSubmitItem={handleSubmitItem} ref={formRef} />
      </div>
    </div>
  );
};
