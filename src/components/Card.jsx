import React from "react";
import toy1 from "../assets/toys-1.png";
import gbr1 from "../assets/gbr1.png";
const CardEditor = (props) => {
  return (
    <div className="w-full ">
      <div className=" flex ">
        <div className="relative left-[1%] top-[10%] z-10">
          <img src={toy1} alt="profile" className="h-10 w-10 rounded-full " />
        </div>
        <div className="pl-5 mb-2">
          <h3 className="font-medium">{props.name}</h3>
          <p className="text-gray-400 text-xs">{props.role}</p>
        </div>
      </div>
      <div className="h-[20rem] w-[11rem] p-4 bg-white border-gray-300 border rounded-lg">
        <div className="flex items-center justify-center ">
          <img
            src={props.img}
            alt="product"
            className="h-[8rem] w-[8rem] flex justify-center "
          />
        </div>
        <div className="flex mt-2 text-sm text-gray-800 font-medium mb-2">
          <p>4.7</p>
          <p>(7)</p>
        </div>
        <h2 className="text-base font-bold text-gray-800 uppercase">
          {props.nameProduct}
        </h2>
        <p className="text-base text-gray-800">{props.desc}</p>
        <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
      </div>
    </div>
  );
};
const CardProduct = () => {
  return (
    <div className="h-[20rem] w-[11rem] p-4 bg-white border-gray-300 border rounded-lg">
      <div className="flex items-center justify-center ">
        <img
          src={gbr1}
          alt="product"
          className="h-[8rem] w-[8rem] flex justify-center "
        />
      </div>
      <div className="flex mt-2 text-sm text-gray-800 font-medium mb-2">
        <p>4.7</p>
        <p>(7)</p>
      </div>
      <h2 className="text-base font-bold text-gray-800 uppercase">
        Juice Beauty
      </h2>
      <p className="text-base text-gray-800">heelas hshdus</p>
      <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
    </div>
  );
};
export { CardEditor, CardProduct };
