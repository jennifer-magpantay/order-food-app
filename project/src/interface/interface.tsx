export interface DataProps {
  strMeal: string;
  strMealThumb?: string;
  idMeal: string;
}

export interface DataPropsList {
  meals: DataProps[];
}

export interface MenuProps {
  id: string;
  description: string;
  price: string;
  amount: number;
  thumb?: string;
}

export interface OrdersProps {
  id: string;
  description: string;
  price: string;
  amount: number;
  thumb?: string;
}
