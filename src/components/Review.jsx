import React, { useState } from "react";
import Slider from "react-slick";
import gbr1 from "../assets/gbr1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const NextArrowHorizontal = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        left: "56%",
        fontSize: "18px",
        zIndex: "1",
        top: "100%",
        color: "red",
      }}
    >
      <FaChevronRight color={"#dc2850"} />
    </div>
  );
};

const PrevArrowHorizontal = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        left: "42%",
        fontSize: "18px",
        zIndex: "1",
        top: "100%",
        color: "red",
      }}
    >
      <FaChevronLeft color={"#dc2850"} />
    </div>
  );
};
const Review = (props) => {
  const [isDetail, setDetail] = useState(true);
  const { className, onClick } = props;
  const toggleBtn = () => {
    setDetail((prevState) => !prevState);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrowHorizontal className={className} onClick={onClick} />,
    nextArrow: <NextArrowHorizontal className={className} onClick={onClick} />,
  };

  return (
    <Slider {...settings}>
      <div className="w-[19rem] ">
        <div className="w-[19rem] bg-white p-4 rounded-md border border-gray-300  ">
          <div className="flex  justify-between border-b-2 border-stone-200">
            <img src={gbr1} alt="gbr1" className="w-12 h-12 " />
            <div className="pb-3">
              <h2 className="uppercase text-lg font-bold">
                val by valarie thomas
              </h2>
              <p className="text-base font-medium">C E Ferulic</p>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <p>star</p>
            <p className="text-xs text-gray-400">2 hours ago</p>
          </div>
          <div className="text-base py-2">
            {isDetail ? (
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
                <span>...</span>
                <span
                  className="cursor-pointer pl-1 text-Pinky"
                  onClick={toggleBtn}
                >
                  Read More
                </span>
              </p>
            ) : (
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
                <span>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </span>
                <span
                  className="cursor-pointer pl-1 text-Pinky"
                  onClick={toggleBtn}
                >
                  Less
                </span>
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center -mt-5 ">
          <div className="flex justify-center">
            <img
              alt="profile"
              className="w-14 h-14 object-cover rounded-full border-2"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          <div className="text-base font-medium text-gray-500 capitalize">
            Deviani
          </div>
          <div className="text-xs text-gray-400">
            {/* {`${review.profile.slice(0, review.profile.length - 1).join(" ")}, ${
            review.profile[review.profile.length - 1]
          }`} */}
            Combination Skin 25.34
          </div>
        </div>
      </div>
      {/* oooo */}
      <div className="w-[19rem] ">
        <div className="w-[19rem] bg-white p-4 rounded-md border border-gray-300  ">
          <div className="flex  justify-between border-b-2 border-stone-200">
            <img src={gbr1} alt="gbr1" className="w-12 h-12 " />
            <div className="pb-3">
              <h2 className="uppercase text-lg font-bold">
                val by valarie thomas
              </h2>
              <p className="text-base font-medium">C E Ferulic</p>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <p>star</p>
            <p className="text-xs text-gray-400">2 hours ago</p>
          </div>
          <div className="text-base py-2">
            {isDetail ? (
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
                <span>...</span>
                <span
                  className="cursor-pointer pl-1 text-Pinky"
                  onClick={toggleBtn}
                >
                  Read More
                </span>
              </p>
            ) : (
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
                <span>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </span>
                <span
                  className="cursor-pointer pl-1 text-Pinky"
                  onClick={toggleBtn}
                >
                  Less
                </span>
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center -mt-5 ">
          <div className="flex justify-center">
            <img
              alt="profile"
              className="w-14 h-14 object-cover rounded-full border-2"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          <div className="text-base font-medium text-gray-500 capitalize">
            Deviani
          </div>
          <div className="text-xs text-gray-400">
            {/* {/* {`${review.profile.slice(0, review.profile.length - 1).join(" ")}, ${
            review.profile[review.profile.length - 1]
          }`}  */}
            Combination Skin 25.34
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Review;
