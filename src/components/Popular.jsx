import React from "react";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsChatRightDots } from "react-icons/bs";
import { SlUserFemale } from "react-icons/sl";
const Popular = () => {
  return (
    <div className="w-60  rounded-lg p-4 border-2 border-gray-100 mx-2 shadow-md ">
      <div className="flex justify-center">
        <img
          alt="profile"
          className="w-40 h-40 object-cover rounded-full border-2"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className=" text-2xl font-bold pt-4 text-center">
          Embrace the Curl
        </div>
        <div className="flex justify-between gap-x-[2rem] py-6 items-center ">
          <span className="w-full h-full object-cover " width={20} height={20}>
            <SlUserFemale className="" />
          </span>
          <span className="w-full h-full object-cover" width={20} height={20}>
            <AiOutlineMenuUnfold />
          </span>
          <span className="w-full h-full object-cover" width={20} height={20}>
            <BsChatRightDots />
          </span>
        </div>
        <div className="text-sm text-center font-normal  pb-9">
          May our curls pop and never stop!
        </div>
      </div>
    </div>
  );
};

export default Popular;
