import React from "react";
import gbr1 from "../assets/gbr1.png";
import Slider from "react-slick";
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
const Trending = (props) => {
  const { className, onClick } = props;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    prevArrow: <PrevArrowHorizontal className={className} onClick={onClick} />,
    nextArrow: <NextArrowHorizontal className={className} onClick={onClick} />,
  };
  return (
    <Slider {...settings}>
      <div className="h-[17rem] w-[13rem] p-4 bg-white rounded-lg">
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
        <p className="text-base text-gray-800">Counceler Wardah</p>
        <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
      </div>
      <div className="h-[17rem] w-[13rem] p-4 bg-white rounded-lg">
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
        <p className="text-base text-gray-800">Counceler Wardah</p>
        <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
      </div>
      <div className="h-[17rem] w-[13rem] p-4 bg-white rounded-lg">
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
        <p className="text-base text-gray-800">Counceler Wardah</p>
        <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
      </div>
      <div className="h-[17rem] w-[13rem] p-4 bg-white rounded-lg">
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
        <p className="text-base text-gray-800">Counceler Wardah</p>
        <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
      </div>
      <div className="h-[17rem] w-[13rem] p-4 bg-white rounded-lg">
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
        <p className="text-base text-gray-800">Counceler Wardah</p>
        <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
      </div>
      <div className="h-[17rem] w-[13rem] p-4 bg-white rounded-lg">
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
        <p className="text-base text-gray-800">Counceler Wardah</p>
        <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
      </div>
      <div className="h-[17rem] w-[13rem] p-4 bg-white rounded-lg">
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
        <p className="text-base text-gray-800">Counceler Wardah</p>
        <p className="text-sm text-gray-400 mt-1">Rossy badge</p>
      </div>
    </Slider>
  );
};

export default Trending;
