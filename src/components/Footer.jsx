import React from "react";
import logo from "../assets/FD-Logo-Pink.png";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FrameTop } from "./Banner";
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 ">
      <div className="container px-20 mt-9 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex flex-col flex-wrap pt-5">
          <div className="justify-between w-full lg:flex">
            <div className="w-full lg:w-1/3 md:w-1/2">
              <ul className="mb-8 space-y-2 text-sm list-none font-bold tracking-wider hover:text-gray-800 ">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#about">Feedback</a>
                </li>
                <li>
                  <a href="#about">Contact</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <ul className="mb-8 space-y-2 text-sm list-none font-bold tracking-wider">
                <li>
                  <a href="#about">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#about">Privacy Policy</a>
                </li>
                <li>
                  <a href="#about">Help</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <ul className="mb-8 space-y-2 text-sm list-none font-bold tracking-wider">
                <li>
                  <a href="#about">Awards</a>
                </li>
                <li>
                  <a href="#about">Newsletter</a>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-80 mx-auto text-center md:mx-0 md:text-left">
              <p className="flex items-center justify-center text-sm font-bold tracking-wider md:justify-start">
                Download Our Mobile App
              </p>
              <div className="flex justify-between py-2 -mx-2">
                <div className="flex w-1/2 px-2">
                  <img src={logo} alt="Ios Badges" />
                </div>
                <div className="flex w-1/2 px-2">
                  <img src={logo} alt="Android Badges" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-14">
          <div className="flex flex-col">
            <div>
              <img src={logo} alt="Logo FDN" width={150} height={35} />
            </div>
            <p className="text-base text-gray-700">
              Copyright © 2015-2017 Female Daily Network • All rights reserved
            </p>
          </div>
          <div className="flex w-80 py-4">
            <div className="mr-6">
              <BsFacebook />
            </div>
            <div className="mr-6">
              <BsTwitter />
            </div>
            <div className="mr-6">
              <BsInstagram />
            </div>
            <div className="mr-6">
              <BsYoutube />
            </div>
          </div>
        </div>
      </div>
      <FrameTop />
    </footer>
  );
};

export default Footer;
