import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const logoText = "Jh@psWeb",
    logo = <h1 className="text-3l font-bold ml-4 primary-color">{logoText}</h1>,
    iconMenuSize = 20,
    [nav, setNav] = useState(false),
    handleNav = () => {
      setNav(!nav);
    };

  return (
    <>
      <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
        {logo}
        <ul className="hidden md:flex">
          <li className="p-5">
            <a href="#about">About</a>
          </li>
          <li className="p-5">
            <a href="#work">Work</a>
          </li>
          <li className="p-5">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div
          onClick={handleNav}
          className="block md:hidden mr-6 hover:cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={iconMenuSize} />
          ) : (
            <AiOutlineMenu size={iconMenuSize} />
          )}
        </div>
        <div
          className={
            nav
              ? "z-10 fixed h-full left-0 top-0 w-[50%] bg-[#202121] ease-in-out duration-500"
              : "fixed left-[-100%] ease-in-out"
          }
        >
          {logo}
          <ul className="p-8 text-2xl">
            <li className="p-2">
              <a href="#about">About</a>
            </li>
            <li className="p-2">
              <a href="#work">Work</a>
            </li>
            <li className="p-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
