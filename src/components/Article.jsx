import React from "react";
import gbr2 from "../assets/gbr2.jpg";
const Article = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-[20rem] ">
      <div className="rounded-xl bg-white hover:shadow-lg pb-2 ">
        <img
          className="rounded-xl w-full h-[11rem] object-cover"
          src={props.image}
          alt="Logo FDN"
        />
        <h2 className="font-bold text-xl mb-2 tracking-wide mt-2">
          {props.title}
        </h2>
        <div className="flex flex-row text-base">
          <p className="text-gray-700 capitalize">{props.author}</p>
          &nbsp;
          <p className="text-gray-400">| {props.published}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
