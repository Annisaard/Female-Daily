import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsChatRightDots } from "react-icons/bs";
import { SlUserFemale } from "react-icons/sl";
const CardEditor = (props) => {
  return (
    <div className="w-[11rem]  ">
      <div className=" relative">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="profile"
          className="h-12 w-12 top-2 rounded-full absolute left-3 object-cover "
        />

        <div className="pl-5 mb-2 top-1 left-12 relative">
          <h3 className="font-medium capitalize text-slate-700">
            {props.name}
          </h3>
          <p className="text-gray-400 text-xs">{props.role}</p>
        </div>
      </div>
      <div className=" p-4 bg-white border-gray-300 border rounded-lg">
        <div className="flex items-center justify-center ">
          <img
            src={props.img}
            alt="product"
            className="h-[8rem] w-[8rem] flex justify-center "
          />
        </div>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-800 font-medium mb-2">
          <p className="text-sm font-bold mr-1">{props.rating}</p>
          <div className="rating  ">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-Pinky w-4"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-Pinky w-4"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-Pinky w-4"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-Pinky w-4"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star w-4"
            />
          </div>
          <p>(7)</p>
        </div>
        <h2 className="text-base font-bold text-gray-800 uppercase">
          {props.nameProduct}
        </h2>
        <p className="text-sm text-gray-800">{props.desc}</p>
        <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
      </div>
    </div>
  );
};
const CardProduct = (props) => {
  return (
    <div className="h-[20rem] w-[11rem] p-4 bg-white border-gray-300 border rounded-lg">
      <div className="flex items-center justify-center ">
        <img
          src={props.img}
          alt="product"
          className="h-[8rem] w-[8rem] flex justify-center "
        />
      </div>
      <div className="flex items-center justify-between mt-2 text-sm text-gray-800 font-medium mb-2">
        <p className="text-sm font-bold mr-1">{props.rating}</p>
        <div className="rating  ">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-Pinky w-4"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-Pinky w-4"
            checked
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-Pinky w-4"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-Pinky w-4"
          />
          <input type="radio" name="rating-1" className="mask mask-star w-4" />
        </div>
        <p>(7)</p>
      </div>
      <h2 className="text-base font-bold text-gray-800 uppercase">
        {props.nameProduct}
      </h2>
      <p className="text-base text-gray-800">{props.desc}</p>
      <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
    </div>
  );
};

const Article = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-[20rem] ">
      <div className="rounded-xl bg-white hover:shadow-lg pb-2 ">
        <img
          className="rounded-xl w-full h-[11rem] object-cover"
          src={props.image}
          alt="Logo FDN"
        />
        <h2 className="font-bold text-lg mb-2  mt-2 text-gray-800">
          {props.title}
        </h2>
        <div className="flex flex-row text-sm">
          <p className="text-gray-700 capitalize ">{props.author}</p>
          &nbsp;
          <p className="text-gray-400">| {props.published}</p>
        </div>
      </div>
    </div>
  );
};

const CardPopular = () => {
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
        <div className=" text-xl font-bold pt-4 text-center text-gray-800">
          Embrace the Curl
        </div>
        <div className="flex justify-between gap-x-[2rem] py-6 items-center text-gray-800 ">
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
        <div className="text-sm text-center font-normal text-gray-800  pb-9">
          May our curls pop and never stop!
        </div>
      </div>
    </div>
  );
};

export { CardEditor, CardProduct, Article, CardPopular };
