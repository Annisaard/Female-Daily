import React from "react";
import gbr1 from "../assets/gbr1.png";

const Brands = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-4 mt-6 justify-between">
        <div className="mb-6 px-4 flex items-center ">
          <div className="flex items-center">
            <img src={gbr1} alt="Nivea Logo" width={100} height={100} />
          </div>
        </div>
        <div className=" mb-6 px-4 flex items-center">
          <div className="flex items-center">
            <img src={gbr1} alt="Nivea Logo" width={100} height={100} />
          </div>
        </div>
        <div className="mb-6 px-4 flex items-center">
          <div className="flex items-center">
            <img src={gbr1} alt="Nivea Logo" width={100} height={100} />
          </div>
        </div>
        <div className=" mb-6 px-4 flex items-center">
          <div className="flex items-center">
            <img src={gbr1} alt="Nivea Logo" width={100} height={100} />
          </div>
        </div>
        <div className=" mb-6 px-4 flex items-center">
          <div className="flex items-center py-4">
            <img src={gbr1} alt="Nivea Logo" width={100} height={100} />
          </div>
        </div>
        <div className="w-44 mb-6 px-4 flex items-center">
          <div className="flex items-center py-8  ">
            <img src={gbr1} alt="Nivea Logo" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl font-bold py-2">
          Female Daily - Find everything you want to know about beauty on Female
          Daily
        </p>
        <p className="text-lg">
          Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
          Tutorials, Discussions, Beauty Workshops, anything!
        </p>
        <p className="text-lg">
          We are here to be your friendly solution to all things beauty, inside
          and out!
        </p>
      </div>
    </>
  );
};

export default Brands;
