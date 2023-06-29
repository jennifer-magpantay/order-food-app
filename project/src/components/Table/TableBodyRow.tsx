import { useContext } from "react";
import { OrdersContext } from "../../store/ordersContext";
import { calculateTotalPriceByItemAmount } from "../../helpers/totalAmount";
import { Button } from "../UI/Button";

import { Trash } from "@phosphor-icons/react";
import { InputCounter } from "../Form/InputCounter";

interface TableBodyRowProps {
  id: string;
  name: string;
  price: string;
  amount: number;
  subtotal: string;
}
export const TableBodyRow = ({
  id,
  name,
  price,
  amount,
  subtotal,
}: TableBodyRowProps) => {
  const { removeItem } = useContext(OrdersContext);

  const handleRemoveItemFromList = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    removeItem(target.id);
  };

  return (
    <tr>
      <td>{name}</td>
      <td className="align-end">{price}</td>
      <td className="align-end">
        <InputCounter itemId={id} itemAmount={amount} />
      </td>
      <td className="align-end">{subtotal}</td>
      <td className="align-center">
        <Button
          id={id}
          type="button"
          customClasses="icon center"
          icon={<Trash size={22} />}
          text="Remove item from orders list"
          onClick={(e) => handleRemoveItemFromList(e)}
        />
      </td>
    </tr>
  );
};
