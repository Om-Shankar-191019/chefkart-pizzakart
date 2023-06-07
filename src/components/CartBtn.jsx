import React from "react";
import { LuCupSoda } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
const CartBtn = ({ numItems }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center">
      <button className="flex items-center justify-between capitalize  text-sm sm:text-lg  px-4  sm:px-6 py-2 rounded-lg  text-white bg-gray-800 duration-300">
        <div className="flex items-center mr-4">
          <LuCupSoda className="text-white" />
          <p className="text-white ml-2">{`${numItems} food items selected`}</p>
        </div>
        <BsArrowRight className="text-white" />
      </button>
    </div>
  );
};

export default CartBtn;
