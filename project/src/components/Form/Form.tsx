import React, { useContext } from "react";
import { OrdersContext } from "../../store/ordersContext";
import { Button } from "../UI/Button";

interface FormProps {
  dataId: string;
  children: React.ReactNode;
}

//     const handleSubmitItem = (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       const target = e.currentTarget as HTMLFormElement;
//       onSubmitItem(target.id);
//     };

//     return (
//       <form onSubmit={handleSubmitItem} id={id} ref={ref}>
//         <InputCounter itemAmount={} itemId={id} />
//         <Button id="submit" type="submit" text="Add" customClasses="cta add" />
//       </form>
//     );
//   }
// );

export const Form = ({ dataId, children }: FormProps) => {
  const { menu, addItem } = useContext(OrdersContext);
  const handleSubmitItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;
    const filteredItem = menu?.find((item) => item.id === target.dataset.id);
    filteredItem && addItem(filteredItem);
  };

  return (
    <form onSubmit={handleSubmitItem} data-id={dataId}>
      {children}
      <Button id="submit" type="submit" text="Add" customClasses="cta add" />
    </form>
  );
};
