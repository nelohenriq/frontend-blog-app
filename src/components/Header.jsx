import React, { useState } from "react";
import { images } from "../constants";
import { Link } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const navItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavItem = ({ item }) => {
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a className="px-4 py-2" href="/">
            {item.name}
          </a>
          <span className="text-[#1565D8] absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <>
          <a className="px-4 py-2 flex gap-x-1 items-center" href="/">
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </a>
          <div className="hidden transition-all pt-6 duration-500 absolute top-0 right-0 transform translate-y-xl group-hover:block w-max">
            <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <a
                  key={index}
                  href={"/"}
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((prev) => {
      return !prev;
    });
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 py-4 flex justify-between items-center">
        <div>
          <img src={images.Logo} alt="Logo" className="w-16" />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`
          transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center 
          ${navIsVisible ? "right-0" : "-right-full"}
          `}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className="border-2 border-[#1565D8] rounded-full px-6 py-1 text-blue-500 font-bold hover:bg-[#1565D8] hover:text-white transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
