import { calculateTotal } from "../../helpers/ordersTotal";
import { OrdersProps } from "../../interface/interface";

interface TableProps {
  children: React.ReactNode;
  total: OrdersProps[];
}

export const Table = ({ children, total }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Food</th>
          <th className="align-end">Price</th>
          <th className="align-center">Qty</th>
          <th className="align-end">Subtotal</th>
          <th className="align-center">Remove</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
      <tfoot>
        <tr>
          <td className="bold">Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bold align-center">{calculateTotal(total)}</td>
        </tr>
      </tfoot>
    </table>
  );
};
