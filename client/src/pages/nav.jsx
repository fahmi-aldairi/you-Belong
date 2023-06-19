/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/U-Belong.png";
import jwtDecode from "jwt-decode";

const Navbar = (props) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const token = localStorage.getItem("token");
  let role = "";
  let fullName = "";
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      role = decodedToken.role;
      fullName = decodedToken.fullName;
      // Use the extracted username and role variables as needed
    } catch (error) {
      console.error("Error decoding token:", error);
      // Handle the error (e.g., show an error message, redirect the user, etc.)
    }
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {" "}
      <nav className="bg-[#8dbbd0]  fixed w-full z-20 top-0 left-0 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <Link to="/" className="flex items-center">
            <img src={logo} className="w-20" />
          </Link>
          <div className="flex md:order-2">
            {token && role == "donor" ? (
              <Link to="/ProfilePage">
                <p className=" ml-5 mt-1">{fullName.split(" ")[0]}</p>
              </Link>
            ) : (
              <Link to="/ProfileBen" className=" ml-5 mt-1">
                {fullName.split(" ")[0]}
              </Link>
            )}
            {!token ? (
              <Link to={"/login"}>
                <button
                  type="button"
                  className="text-white bg-[#5aa1c2] hover:bg-[#4e94b5] focus:ring-4 focus:outline-none focus:ring-[#5aa1c2]-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#5aa1c2]-600 dark:hover:bg-[#5aa1c2]-700 dark:focus:ring-[#5aa1c2]-800"
                >
                  تسجيل الدخول
                </button>
              </Link>
            ) : (
              <Link
                className="w-full"
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                <button
                  type="button"
                  className="text-white bg-[#5aa1c2] hover:bg-[#4e94b5] focus:ring-4 focus:outline-none focus:ring-[#5aa1c2]-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#5aa1c2]-600 dark:hover:bg-[#5aa1c2]-700 dark:focus:ring-[#5aa1c2]-800"
                >
                  تسجيل خروج
                </button>
              </Link>
            )}{" "}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbarMenu"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            id="navbarMenu"
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center justify-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:justify-between md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="px-4">
                <Link to="/">الصفحة الرئيسة</Link>
              </li>

              <li className="px-4">
                <Link to="/Campings">ساهم في انقاذ حياه</Link>
              </li>

              <li className="px-4">
                <Link to="/about">قصتنا</Link>
              </li>

              <li className="px-4">
                <Link to="/contact">تواصل معنا</Link>
              </li>

              {token && role === "beneficer" && (
                <li className="px-4">
                  <Link to="/form">دعنا نساعدك</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
