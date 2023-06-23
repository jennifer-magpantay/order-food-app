import React, { useState } from "react";
import { Section } from "../UI/Section";
import { Button } from "../UI/Button";
import { render } from "react-dom";
import { OrdersProps } from "../../App";

interface DataProps {
  strMeal: string;
  strMealThumb?: string;
  idMeal: string;
}

interface DataPropsList {
  meals: DataProps[];
}

interface MenuProps {
  onListItemClick: (value: OrdersProps) => void;
}

export const Menu = ({ onListItemClick }: MenuProps) => {
  const [menu, setMenu] = useState<DataPropsList>();

  const handleMenuTab = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    fetchData(target.id);
  };

  const sliceMenuList = (menu: DataPropsList) => {
    const shuffled = [...menu.meals].sort(() => 0.5 - Math.random());
    return { meals: shuffled.slice(0, 10) };
  };

  const fetchData = async (id: string) => {
    // https://www.themealdb.com/api.php
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
    const result: DataPropsList = await fetch(URL).then((response) =>
      response.json()
    );

    if (result.meals.length > 10) {
      const menuSliced = sliceMenuList(result);
      setMenu(menuSliced);
    } else {
      setMenu(result);
    }
  };

  const handleListItemClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLUListElement;

    const item = {
      id: target.id,
      name: target.innerText,
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
          <ul>
            <li>
              <Button
                customClasses="tab"
                id="Breakfast"
                type="button"
                text="Breakfast"
                onClick={(e) => handleMenuTab(e)}
              />
            </li>
            <li>
              <Button
                customClasses="tab"
                id="Miscellaneous"
                type="button"
                text="Lunch"
                onClick={(e) => handleMenuTab(e)}
              />
            </li>
            <li>
              <Button
                customClasses="tab"
                id="Vegan"
                type="button"
                text="Vegan"
                onClick={(e) => handleMenuTab(e)}
              />
            </li>
            <li>
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
          <div className="menu--tab-content">
            <ul>
              {menu.meals.map((item) => (
                <li
                  key={item.idMeal}
                  id={item.idMeal}
                  onClick={(e) => handleListItemClick(e)}
                >
                  {item.strMeal}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>
    </>
  );
};
