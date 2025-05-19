import React from "react";
import { href, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">
          Skill Extractor
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;