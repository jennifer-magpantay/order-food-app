import React, { useContext } from "react";
import { CartContext } from "../../store/cartContext";

import { Section } from "../UI/Section";
import { Button } from "../UI/Button";
import { List } from "../List/List";
import { CardItem } from "../Card/CardItem";
import { ListItem } from "../List/ListItem";

import { generateRandomPrice } from "../../helpers/randomPrice";

export interface DataProps {
  strMeal: string;
  strMealThumb?: string;
  idMeal: string;
  price: string;
}

interface DataPropsList {
  meals: DataProps[];
}

// interface MenuProps {
//   onListItemClick: (value: OrdersProps) => void;
// }

const menuCategories = [
  {
    id: "Breakfast",
    text: "Breakfast",
  },
  {
    id: "Miscellaneous",
    text: "Lunch",
  },
  {
    id: "Vegan",
    text: "Vegan",
  },
  {
    id: "Dessert",
    text: "Desserts",
  },
];

export const Menu = () => {
  const context = useContext(CartContext);
  const { menu, loadMenu } = context;

  const handleMenuTab = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    fetchData(target.id);
  };

  const sliceMenuList = (menu: DataProps[]) => {
    const shuffled = [...menu].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  const fetchData = async (id: string) => {
    // https://www.themealdb.com/api.php
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
    const result: DataPropsList = await fetch(URL).then((response) =>
      response.json()
    );
    const data = result.meals;

    const resultWithPrice = data.map((meal) => {
      const newList = {
        idMeal: meal.idMeal,
        strMeal: meal.strMeal,
        strMealThumb: meal.strMealThumb,
        price: generateRandomPrice(1, 20),
      };
      return newList;
    });

    if (resultWithPrice.length > 10) {
      const menuSliced = sliceMenuList(resultWithPrice);
      loadMenu(menuSliced);
    } else {
      loadMenu(resultWithPrice);
    }
  };

  return (
    <>
      <Section
        title="Our Menu"
        subtitle="Meals that always make you fall in love"
        description="What we serve"
      >
        <List
          list={menuCategories}
          error="No menu available. Please, try to load the paga again"
          customClass="list--tab"
        >
          {menuCategories?.map((item) => (
            <ListItem key={item.id} id={item.id} customClass="list--tab-item">
              <Button
                customClasses="tab"
                id={item.id}
                type="button"
                text={item.text}
                onClick={(e) => handleMenuTab(e)}
              />
            </ListItem>
          ))}
        </List>

        <List list={menu} customClass="list--menu">
          {menu?.map((item) => (
            <ListItem
              key={item.idMeal}
              id={item.idMeal}
              customClass="list--menu-item"
            >
              <CardItem
                id={item.idMeal}
                description={item.strMeal}
                price={item.price}
              />
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
};
