
import React, { useState } from "react";
import { MdDashboard, MdHome, MdSettings, MdStore } from "react-icons/md";
import { CgMenuRight, CgCloseR  } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

export default function Hamburger() {
const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const Menus = [
    { title: "Home", icon: <MdHome className="text-[20px]" />, href: "/" },
    {
      title: "Dashboard",
      icon: <MdDashboard className="text-[20px]" />,
      href: "/dashboard",
    },
    {
      title: "Store",
      icon: <MdStore className="text-[20px]" />,
      href: "/store",
    },
    {
      title: "Settings",
      icon: <MdSettings className="text-[20px]" />,
      href: "/settings",
    },
  ];
  return (
    <div className="">
      <button
        className="text-gray-500 focus:outline-none focus:text-gray-600"
        onClick={toggleMenu}
      >
        <CgMenuRight className="text-3xl font-semibold" />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 z-10 bg-opacity-90 w-screen h-screen bg-black/80 text-white font-semibold text-[22px] shadow-lg">
          <button onClick={toggleMenu} className="absolute top-5 right-5">
            <CgCloseR className="text-2xl text-white/70" />
          </button>

          <div className="flex flex-col gap-16 items-start h-screen p-4 pt-[4em]">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <a href="">Home</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
