import { current } from "@reduxjs/toolkit";
import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-grey-400">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl text-white ">
              eBaarzr
              <span className="absolute bottom-1 left-0 w-full"></span>
            </span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:just">
            {["About", "Privacy Policy", "Licensing", "Contact"].map((_, item) => 
            (
            <li key={item}>
            <Link to="#" className="hover:text-white">
            {item}
            </Link>
            </li>
            ))}
            </ul>
          </nav>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
        © {currentYear} eBazaar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;