import { calculateTotalPriceByItemAmount } from "../../helpers/totalAmount";

interface TableBodyRowProps {
  name: string;
  price: string;
  amount: number;
}
export const TableBodyRow = ({ name, price, amount }: TableBodyRowProps) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{amount}</td>
      <td>{calculateTotalPriceByItemAmount(price, amount)}</td>
    </tr>
  );
};
