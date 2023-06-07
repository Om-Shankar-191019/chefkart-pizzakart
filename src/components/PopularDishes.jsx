import React, { useState, useEffect } from "react";

const Dish = () => {
  return (
    <div className="border border-red-500 rounded-full p-1  cursor-pointer">
      <div className="relative  ">
        <div
          className="absolute inset-0 bg-black opacity-40 rounded-full  h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
          style={{
            content: "''",
          }}
        ></div>
        <div
          className="flex justify-center items-center border border-red-500 rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60")',
          }}
        >
          <span className="text-white" style={{ zIndex: 99 }}>
            Biryani
          </span>
        </div>
      </div>
    </div>
  );
};

const PopularDishes = () => {
  const [numDishes, setNumDishes] = useState(4);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setNumDishes(6);
      } else if (screenWidth >= 768) {
        setNumDishes(5);
      } else {
        setNumDishes(4);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-10/12 md:w-9/12 lg:w-8/12  py-6">
        <h2 className="font-bold pb-3 text-sm sm:text-lg md:text-xl ">
          Popular Dishes
        </h2>
        <div className="flex items-center justify-between">
          {Array.from({ length: numDishes }).map((_, index) => (
            <Dish key={index} />
          ))}
        </div>
        <div className="border-gray-200 border-b-4 mt-8"></div>
      </div>
    </div>
  );
};

export default PopularDishes;

// <div className="flex justify-center items-center border border-red-500 opacity-90 rounded-full h-16 w-16 bg-center bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60)]">
//             <span className="text-white">Biryani</span>
//           </div>
