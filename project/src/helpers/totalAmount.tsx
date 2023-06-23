import { formatPrice } from "./randomPrice";
export const calculateTotalPriceByItemAmount = (
  price: string,
  amount: number
) => {
  const currPrice = Number(price.replace("€", "").replace(",", ".").trim());
  const total = currPrice * amount;
  const totalFormated = formatPrice(total);
  return totalFormated;
};
