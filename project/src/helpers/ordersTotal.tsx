import { OrdersProps } from "../interface/interface";
import { formatPrice } from "./randomPrice";

export const calculateTotal = (orders: OrdersProps[]) => {
  const initialValue = 0;
  const subtotal = orders.reduce((acc, order) => {
    // remove currency sinal, spaces and replace , by . to convert into number and proceed wth the calculation
    const currSubtotal = Number(
      order.subtotal.replace("€", "").replace(",", ".").trim()
    );
    return acc + currSubtotal;
  }, initialValue);
  // format subtotal
  const totalFormated = formatPrice(subtotal);
  return String(totalFormated);
};
