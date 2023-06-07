import React from "react";

const Filters = () => {
  const allFilters = [
    { id: 1, filter: "Italian" },
    { id: 2, filter: "Indian" },
    { id: 3, filter: "Indian" },
    { id: 4, filter: "Italina" },
  ];
  return (
    <div className="flex justify-center">
      <div className="w-10/12 md:w-9/12 lg:w-8/12 flex flex-wrap items-center justify-between cursor-pointer space-x-3">
        {allFilters.map(({ id, filter, active }) => (
          <button
            key={id}
            className={
              !active
                ? "capitalize  text-sm sm:text-lg  px-2 sm:px-6 py-2 text-[#f7b614] border border-[#f7b614] rounded-2xl font-bold hover:text-white hover:bg-gray-800 duration-300"
                : "capitalize  text-sm sm:text-lg  px-2 sm:px-6 py-2 rounded-md  font-bold text-white bg-gray-800 duration-300"
            }
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
