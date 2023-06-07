import React from "react";
import { SlCalender } from "react-icons/sl";
import { BsStopwatch } from "react-icons/bs";
const DateTime = () => {
  const getDate = () => {
    const date = new Date();
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };
  return (
    <div>
      <div className="bg-black w-full h-12"></div>
      <div className="flex justify-center -translate-y-1/2">
        <div className="w-10/12 md:w-9/12 lg:w-8/12 bg-white border border-gray-300 rounded-md flex items-center justify-between p-4  ">
          <div className="flex items-center">
            <SlCalender />
            <span className="font-bold ml-2 sm:ml-4 text-sm sm:text-lg">
              {getDate()}
            </span>
          </div>
          <div className="flex items-center">
            <BsStopwatch />
            <span className="font-bold ml-2 sm:ml-4 text-sm sm:text-lg">
              10:30 Pm-12:30 Pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
