import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../constants/config";
{
  /* <FaAngleDown /> */
}
const Navbar = () => {
  const location = useLocation();
  const isProductPage =
    location.pathname.startsWith("/product") ||
    location.pathname.startsWith("/build-your-vision") ||
    location.pathname.startsWith("/industry") ||
    location.pathname.startsWith("/");
  const isHomePage = location.pathname === "/";

  const isAbout = location.pathname === "/about";
  const isindustry = location.pathname === "/industry";
  const [toggle, settoggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(null);
  const menuItems = [
    {
      icon: "",
      title: "OmniRoad 2.0",
      path: "/omniRoad",
    },
    {
      icon: "",
      title: "CrowdIQ",
      path: "/crowdiq",
    },
    {
      icon: "",
      title: "Attendify",
      path: "/attendify",
    },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsHovered(false); // Close the menu
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="relative">
      <nav
        className={`w-full justify-between items-center flex p-8  ${
          isProductPage ? "bg-[#fffff]" : "bg-[#031223]"
        } border-2 border-gray-100 border-solid`}
      >
        <div className="logo">
          <Link to="/">
            <img src="/logo-10.png" className="h-8 w-22" alt="Logo" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:text-lg gap-x-8 xl:text-xl font-semibold text-white ml-24">
          <div className="flex flex-col items-center">
            <Link
              to="/"
              className={`px-4 py-2 ${
                isProductPage ? "text-gray-800" : "text-gray-300"
              } hover:text-gray-500  rounded transition duration-300 relative group`}
            >
              Home
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#2596be] transform origin-left transition-transform duration-300 ${
                  isHomePage ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              />
            </Link>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={menuRef}
          >
            <div className="flex items-center gap-1">
              <div
                className={`px-4 py-2  ${
                  isProductPage ? "text-gray-800" : "text-gray-300"
                } hover:text-white hover:bg-gray-700 rounded transition duration-300`}
              >
                Products
              </div>
              <ChevronDown
                className={`w-4 h-4 ${
                  isProductPage ? "text-gray-800" : "text-gray-300"
                } transition-transform duration-300 ${
                  isHovered ? "rotate-180" : ""
                }`}
              />
            </div>

            {isHovered && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-gray-800 rounded-md shadow-lg z-50">
                <div className="py-2">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className={`flex items-center px-4 py-3 text-gray-300  hover:bg-gray-700 hover:text-white transition duration-200`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <Link
              to="/industry"
              className={`px-4 py-2 ${
                isProductPage ? "text-gray-800" : "text-gray-300"
              } hover:text-gray-500  rounded transition duration-300 relative group`}
            >
              Industries
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#2596be] transform origin-left transition-transform duration-300 ${
                  isindustry ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              />
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link
              to="/about"
              className={`px-4 py-2 ${
                isProductPage ? "text-gray-800" : "text-gray-300"
              } hover:text-gray-500  rounded transition duration-300 relative group`}
            >
              About us
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#2596be] transform origin-left transition-transform duration-300 ${
                  isAbout ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              />
            </Link>
          </div>
          <div className="flex justify-center items-center"></div>
        </div>

        <div className="hidden lg:block text-white  font-bold mb-2">
          <button
            className={`${COLORS.titel_bg} rounded-l-full rounded-r-full px-6 py-2 lg:text-sm xl:text-base `}
          >
            <Link
              to="/build-your-vision"
              className="px-4 py-2 text-gray-100 rounded transition duration-300"
              activeClassName="text-blue-400"
            >
              Contact Us
            </Link>
          </button>
        </div>

        {/* //hamburger menu */}

        <div onClick={() => settoggle(!toggle)} className="block lg:hidden ">
          <img
            src="https://landing.ai/wp-content/uploads/2023/03/menu-hamburger-mobile-tablet.svg"
            alt=""
          />
        </div>

        {/* sidebar */}
        <div
          className={`block lg:hidden w-full p-6 transition-all bg-black text-white absolute top-0 z-30 ${
            toggle
              ? "right-0 duration-500 opacity-100 ease-in"
              : "right-[-100%] opacity-50 duration-300 ease-in-out"
          }`}
        >
          <div className="w-full flex justify-between items-center mb-6">
            <div className="logo"></div>
            <RxCross2
              onClick={() => settoggle(!toggle)}
              size={30}
              className="text-white cursor-pointer"
            />
          </div>

          <hr className="border-[1px] border-white w-full mb-6" />

          <div>
            {/* Products Section */}

            <div className="flex items-center mb-4">
              <img
                className="mr-3 w-5"
                src="https://landing.ai/wp-content/uploads/2023/12/Validation.svg"
                alt=""
              />
              <Link
                to="/"
                className="text-white hover:text-gray-400 transition-all"
              >
                Home
              </Link>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Products</h3>
              {["crowdiq", "omniroad", "attendify"].map((link, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    className="mr-3 w-5"
                    src="https://landing.ai/wp-content/uploads/2023/12/Validation.svg"
                    alt=""
                  />
                  <Link
                    to={`/${link}`}
                    className="text-white hover:text-gray-400 transition-all"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </div>
              ))}
            </div>

            {/* Industries Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Industries</h3>
              <div className="flex items-center mb-4">
                <img
                  className="mr-3 w-5"
                  src="https://landing.ai/wp-content/uploads/2023/12/Validation.svg"
                  alt=""
                />
                <Link
                  to="/industry"
                  className="text-white hover:text-gray-400 transition-all"
                >
                  Industry
                </Link>
              </div>
            </div>

            {/* Other Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Other Links</h3>
              {["about", "build-your-vision"].map((link, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    className="mr-3 w-5"
                    src="https://landing.ai/wp-content/uploads/2023/12/Validation.svg"
                    alt=""
                  />
                  <Link
                    to={`/${link}`}
                    className="text-white hover:text-gray-400 transition-all"
                  >
                    {link === "build-your-vision"
                      ? "Contact Us"
                      : link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
