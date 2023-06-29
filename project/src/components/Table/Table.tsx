interface TableProps {
  children: React.ReactNode;
  total: string;
}

export const Table = ({ children, total }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Food</th>
          <th>Price</th>
          <th>Qt</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
      <tfoot>
        <tr>
          <td className="bold">Total</td>
          <td></td>
          <td></td>
          <td className="bold">{total}</td>
        </tr>
      </tfoot>
    </table>
  );
};
