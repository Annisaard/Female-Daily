import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import logo from "../assets/FD-Logo-Pink.png";
import user from "../assets/user.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="border-b-[1.5px]  flex items-center w-full ">
        <div className="container flex justify-between">
          <div className=" flex items-center ">
            <span className="px-3 text-gray-500 ">
              <AiOutlineMenu size={20} />
            </span>
            <img src={logo} alt="Logo" width={150} height={35} />
          </div>
          <div className=" sm:hidden md:hidden lg:flex justify-center  py-2 ">
            <button className="relative left-6 ml-3 text-gray-400 ">
              <FiSearch />
            </button>
            <input
              placeholder="Search product, articles, topics, brands, etc"
              className=" rounded w-[53rem] px-8  py-2 text-black text-sm focus:outline-none focus:border-gray-300 border border-gray-300 bg-white"
            />
          </div>
          <div className="bg-[#d01257] hover:bg-[#C61C40] py-2 px-5 flex items-center  ml-2">
            <img src={user} alt="icon" height={20} width={20} />
            <button className=" text-white text-xs tracking-wider ml-2">
              LOGIN/SIGNUP
            </button>
          </div>

          {/* mobile */}
          {/* <div
            className="block lg:hidden pt-3 text-TitleText"
            onClick={handleNav}
          >
            {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
          </div> */}
        </div>

        {/* <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] z-20 bg-white h-full ease-in-out duration-200"
              : "fixed left-[-100%]"
          }
        >
          <div className="px-6 md:px-10 ">
            <div className="py-5">
              <img src={logo} alt="Logo" className="mr-8 h-12 w-12" />
            </div>

            <div className="mt-7">
              <input
                placeholder="Cari Program"
                className="rounded-3xl h-[2rem] w-[10rem] px-3 text-black text-xs focus:outline-none focus:border-white bg-[#EDEEF4]"
              />
            </div>
          </div>
        </div> */}
      </nav>
      <div className=" border-b-[1.5px] py-3">
        <ul className="flex justify-center gap-x-5 uppercase text-gray-800 font-medium">
          <li>Skincare</li>
          <li>Make Up</li>
          <li>Body</li>
          <li>Hair</li>
          <li>Fragnance</li>
          <li>Nails</li>
          <li>Tools</li>
          <li>Brands</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
