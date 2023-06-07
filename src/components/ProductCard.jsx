import React from "react";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { AiOutlineRight } from "react-icons/ai";

const ProductCard = ({ addItems }) => {
  return (
    <div className="flex justify-between items-center mt-8 mb-2">
      <div className="flex flex-col space-y-2 sm:space-y-4 ">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <h2 className="text-xl font-semibold">Masala Muglai</h2>
          <img
            className="h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
            alt=""
          />
          <div className="bg-green-600 rounded-sm flex items-center px-1">
            <span className="text-white pr-1">4.2</span>
            <img
              className=" h-2 sm:h-4"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex flex-col items-center">
            <CgSmartHomeRefrigerator />
            <p className="text-xs sm:text-sm">Refrigerator</p>
          </div>
          <div className="flex flex-col items-center">
            <CgSmartHomeRefrigerator />
            <p className="text-xs sm:text-sm">Refrigerator</p>
          </div>

          <div className="border-2 border-gray-200 border-l h-8"></div>
          <div>
            <p className="font-bold text-xs sm:text-sm">Ingredients</p>
            <div className="  flex items-center ">
              <h2 className="text-xs  sm:font-semibold text-[#f7b614]">
                Select Dishes
              </h2>
              <AiOutlineRight size={8} className="ml-2 text-[#f7b614]" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-xs sm:text-sm w-3/4">
            Chicken fried in deep tomato sauce with delicious spices
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="h-28 sm:h-36  w-32 sm:w-40 rounded-xl"
          src="https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
          alt=""
        />
        <button
          onClick={addItems}
          className="-translate-y-1/2 bg-white capitalize  text-sm sm:text-lg  px-2 sm:px-6  text-[#f7b614] border-2 border-[#f7b614] rounded-md font-bold hover:text-white hover:bg-gray-800 duration-300"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
