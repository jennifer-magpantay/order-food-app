import React, { useState } from "react";
import { Section } from "../UI/Section";
import { Button } from "../UI/Button";
import { OrdersProps } from "../../App";
import { generateRandomPrice } from "../../helpers/randomPrice";

interface DataProps {
  strMeal: string;
  strMealThumb?: string;
  idMeal: string;
  price: string;
}

interface DataPropsList {
  meals: DataProps[];
}

interface MenuProps {
  onListItemClick: (value: OrdersProps) => void;
}

export const Menu = ({ onListItemClick }: MenuProps) => {
  const [menu, setMenu] = useState<DataProps[]>();

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
      setMenu(menuSliced);
    } else {
      setMenu(resultWithPrice);
    }
  };

  const handleListItemClick = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLUListElement;
    const item = {
      id: target.id,
      name: String(target.children[0].textContent),
      price: String(target.children[1].textContent),
    };
    onListItemClick(item);
  };

  return (
    <>
      <Section
        title="Our Menu"
        subtitle="Food that always make you fall in love"
        description="Options available"
      >
        <div className="menu--tab">
          <ul className="tab--list">
            <li className="tab--list-item">
              <Button
                customClasses="tab"
                id="Breakfast"
                type="button"
                text="Breakfast"
                onClick={(e) => handleMenuTab(e)}
              />
            </li>
            <li className="tab--list-item">
              <Button
                customClasses="tab"
                id="Miscellaneous"
                type="button"
                text="Lunch"
                onClick={(e) => handleMenuTab(e)}
              />
            </li>
            <li className="tab--list-item">
              <Button
                customClasses="tab"
                id="Vegan"
                type="button"
                text="Vegan"
                onClick={(e) => handleMenuTab(e)}
              />
            </li>
            <li className="tab--list-item">
              <Button
                customClasses="tab"
                id="Dessert"
                type="button"
                text="desserts"
                onClick={(e) => handleMenuTab(e)}
              />
            </li>
          </ul>
        </div>

        {menu && (
          <div className="menu">
            <ul className="menu--list">
              {menu.map((item) => (
                <li
                  key={item.idMeal}
                  className="menu--list-item"
                  id={item.idMeal}
                  onClick={(e) => handleListItemClick(e)}
                >
                  <span>{item.strMeal}</span> <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>
    </>
  );
};
