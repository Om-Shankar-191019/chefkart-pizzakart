import React from "react";
import DateTime from "./DateTime";
import SelectDishesBtn from "./SelectDishesBtn";
import Filters from "./Filters";
import PopularDishes from "./PopularDishes";
import Products from "./Products";

const SelectDishes = () => {
  return (
    <div>
      <SelectDishesBtn />
      <DateTime />
      <Filters />
      <PopularDishes />
      <Products />
    </div>
  );
};

export default SelectDishes;
