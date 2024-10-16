import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <header className="py-5 px-14 bg-[#111827]">
        <nav className="flex  justify-between items-center">
          <h2 className="text-3xl hover:scale-[0.98] transition-all delay-[.1s] ease-linear">Aniket Sharma</h2>
          <ul className="flex">
            <li className="navlink relative mx-2 text-xl px-5 py-3 inline-block " >Home</li>
            <li className="navlink relative mx-2 text-xl px-5 py-3 inline-block " >About</li>
            <li className="navlink relative mx-2 text-xl px-5 py-3 inline-block " >Contact</li>
            <li className="navlink relative mx-2 text-xl px-5 py-3 inline-block " >Portfolio</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
