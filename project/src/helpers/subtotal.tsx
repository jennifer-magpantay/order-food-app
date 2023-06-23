import { OrdersProps } from "../App";
import { formatPrice } from "./randomPrice";

export const calculateSubtotal = (orders: OrdersProps[]) => {
  const initialValue = 0;
  const subtotal = orders.reduce((acc, order) => {
    // remove currency sinal, spaces and replace , by . to convert into number and proceed wth the calculation
    const currPrice = Number(
      order.price.replace("€", "").replace(",", ".").trim()
    );
    return acc + currPrice;
  }, initialValue);
  // format subtotal
  const subtotalFormated = formatPrice(subtotal);
  return String(subtotalFormated);
};
