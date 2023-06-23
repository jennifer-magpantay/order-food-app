export const generateRandomPrice = (min: number, max: number) => {
  const price = (Math.random() * (max - min) + min).toFixed(2);

  return formatPrice(Number(price));
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(price);
};
