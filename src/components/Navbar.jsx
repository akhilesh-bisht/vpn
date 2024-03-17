import { RiMenuLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveMenuItem(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const closeNavbar = () => {
    setToggle(false);
  };

  return (
    <div className="bg-white p-4 sticky top-0 z-50">
      <div className="max-w-[1240px] flex justify-between items-center mx-auto py-[15px] ">
        <img src={logo} alt="" />

        {/* Toggle Button */}
        <ul>
          {toggle ? (
            <IoCloseSharp
              onClick={() => setToggle(!toggle)}
              className="text-2xl lg:hidden block cursor-pointer transition-opacity duration-300 ease-in-out"
            />
          ) : (
            <RiMenuLine
              onClick={() => setToggle(!toggle)}
              className="text-2xl lg:hidden block cursor-pointer transition-opacity duration-300 ease-in-out"
            />
          )}
        </ul>
        <ul className="hidden lg:flex text-black gap-10 font-normal">
          <li>
            <a
              href="#about"
              className={`hover:text-orange-400 ${
                activeMenuItem === "#about" ? "text-red-500" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#features"
              className={`hover:text-orange-400 ${
                activeMenuItem === "#features" ? "text-red-500" : ""
              }`}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className={`hover:text-orange-400 ${
                activeMenuItem === "#pricing" ? "text-red-500" : ""
              }`}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className={`hover:text-orange-400 ${
                activeMenuItem === "#testimonials" ? "text-red-500" : ""
              }`}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#help"
              className={`hover:text-orange-400 ${
                activeMenuItem === "#help" ? "text-red-500" : ""
              }`}
            >
              Help
            </a>
          </li>
        </ul>

        <ul className="hidden lg:flex items-center gap-5">
          <li>
            <a href="#" className="font-semibold hover:text-red-500">
              Sign In
            </a>
          </li>
          <li>
            <button className="border border-red-500 text-red-600 font-bold px-5 py-1 rounded-3xl hover:bg-black hover:text-white hover:border-none transition-all duration-300">
              Sign Up
            </button>
          </li>
        </ul>

        {/* Responsive Menu */}
        <ul
          className={`duration-500 lg:hidden w-full h-screen flex flex-col  text-white fixed top-24 bg-black ${
            toggle ? "left-0" : "left-[-100%]"
          } transition-all duration-300`}
        >
          <a
            href="#about"
            className="p-5 hover:text-orange-400"
            onClick={closeNavbar}
          >
            About
          </a>
          <a
            href="#features"
            className="p-5 hover:text-orange-400"
            onClick={closeNavbar}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="p-5 hover:text-orange-400"
            onClick={closeNavbar}
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="p-5 hover:text-orange-400"
            onClick={closeNavbar}
          >
            Testimonials
          </a>
          <a
            href="#help"
            className="p-5 hover:text-orange-400"
            onClick={closeNavbar}
          >
            Help
          </a>
          <div>
            <li className="list-none m-4">
              <a
                href="#"
                className="font-semibold hover:text-orange-400"
                onClick={closeNavbar}
              >
                Sign In
              </a>
            </li>
            <button
              className="border hover:text-white mx-2 mt-2 border-orange-600 text-orange-400 font-bold py-1 px-4 rounded-3xl transition-all duration-300"
              onClick={closeNavbar}
            >
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
