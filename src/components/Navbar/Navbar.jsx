import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="py-5 px-4 md:px-10 lg:px-14 bg-[#111827]">
        <nav className="flex  justify-between items-center">
          <h2 className="text-3xl hover:scale-[0.98] md:px-0 sm:px-5 py-3 transition-all delay-[.1s] ease-linear">
            Aniket Sharma
          </h2>
          <ul className="hidden md:flex">
            <li className="navlink relative mx-2 text-xl px-5 py-2 inline-block ">
              {" "}
              <Link className="relative z-10" to="/">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li className="navlink relative mx-2 text-xl px-5 py-2 inline-block ">
              {" "}
              <Link className="relative z-10" to="/about">
                {" "}
                About{" "}
              </Link>
            </li>
            <li className="navlink relative mx-2 text-xl px-5 py-2 inline-block ">
              {" "}
              <Link className="relative z-10" to="/contact">
                {" "}
                Contact{" "}
              </Link>
            </li>
            <li className="navlink relative mx-2 text-xl px-5 py-2 inline-block ">
              {" "}
              <Link className="relative z-10" to={"/product"}>
                {" "}
                Product{" "}
              </Link>
            </li>
            <li className="login   px-5 py-2 inline-block">
            

              <Link className="text-xl" to={"/login"}>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
