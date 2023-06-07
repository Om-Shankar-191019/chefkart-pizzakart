import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
const SelectDishesBtn = () => {
  return (
    <div className="px-4 py-4 flex items-center ">
      <AiOutlineLeft size={24} className="mr-4 " />
      <h2 className="font-bold text-2xl">Select Dishes</h2>
    </div>
  );
};

export default SelectDishesBtn;
