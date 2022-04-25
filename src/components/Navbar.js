import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="p-4 bg-black mb-3 ">
      <Link to="/home">
        <h2
          className="font-medium 
     text-3xl   
     text-white   
     cursor-pointer

     inline-block 
     mr-4
     "
        >
          IMDB
        </h2>
      </Link>
      <Link to="/login">
        <span
          className=" font-medium 
     text-blue-500 cursor-pointer
      text-xl hover:text-blue-400"
        >
          Login
        </span>
      </Link>
    </nav>
  );
}

export default NavBar;
