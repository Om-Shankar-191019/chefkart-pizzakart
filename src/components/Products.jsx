import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import ProductCard from "./ProductCard";
import CartBtn from "./CartBtn";

const MenuBar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center ">
        <h2 className="font-bold text-2xl">Recommended</h2>
        <AiFillCaretDown size={24} className="ml-4 cursor-pointer " />
      </div>
      <button className="capitalize  text-sm sm:text-lg  px-2 sm:px-6 py-2 rounded-lg  text-white bg-gray-800 duration-300">
        Menu
      </button>
    </div>
  );
};

const Products = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [numItems, setNumItems] = useState(0);

  const addItems = () => {
    setNumItems((prev) => prev + 1);
  };

  const endpoint =
    "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/";
  const getProducts = () => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div
        className="flex justify-center overflow-y-scroll "
        style={{
          height: 500,
        }}
      >
        <div className="w-10/12 md:w-9/12 lg:w-8/12  py-6 ">
          <MenuBar />
          <ProductCard addItems={addItems} />
          <hr />
          <ProductCard addItems={addItems} />
          <hr />
          <ProductCard addItems={addItems} />
          <hr />
          <ProductCard addItems={addItems} />
        </div>
      </div>
      {numItems !== 0 && <CartBtn numItems={numItems} />}
    </>
  );
};

export default Products;
