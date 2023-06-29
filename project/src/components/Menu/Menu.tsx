import React, { useContext } from "react";
import { OrdersContext } from "../../store/ordersContext";

import { Section } from "../UI/Section";
import { Button } from "../UI/Button";
import { CardItem } from "../Card/CardItem";
import { List } from "../List/List";
import { ListItem } from "../List/ListItem";

import { generateRandomPrice } from "../../helpers/randomPrice";
import { DataPropsList, MenuProps } from "../../interface/interface";

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
  const context = useContext(OrdersContext);
  const { menu, loadMenu } = context;

  const handleMenuTab = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    fetchData(target.id);
  };

  const fetchData = async (id: string) => {
    // https://www.themealdb.com/api.php
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
    const result: DataPropsList = await fetch(URL).then((response) =>
      response.json()
    );
    const data = result.meals;

    const resultWithPrice: MenuProps[] = data.map((meal) => {
      const newList = {
        id: meal.idMeal,
        description: meal.strMeal,
        price: generateRandomPrice(1, 20),
        amount: 1,
        thumb: meal.strMealThumb,
      };
      return newList;
    });

    const sliceMenuList = (list: MenuProps[]) => {
      const shuffled = [...list].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 10);
    };

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
            <ListItem key={item.id} id={item.id} customClass="list--menu-item">
              <CardItem
                id={item.id}
                description={item.description}
                price={item.price}
                amount={item.amount}
              />
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
};
