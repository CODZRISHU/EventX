import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-black text-white p-5 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-cinzel">Cinematic Events</h1>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-2xl">☰</button>
        </div>
        <ul
          className={`md:flex space-x-6 absolute md:relative top-16 right-0 p-4 bg-black md:bg-transparent transition-all duration-300 ${isOpen ? "block" : "hidden"}`}
        >
          <li>
            <Link to="/" className="text-lg hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-lg hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/events" className="text-lg hover:text-gray-400">Events</Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
