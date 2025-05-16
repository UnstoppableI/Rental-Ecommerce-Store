import React from "react";
import { Nav } from "react-bootstrap";

const Header = () => {
  return <div>
    <Nav className="nav">
        <ul className="flex d-flex p-3 m-5 gap-5 text-align-center">
            <li><a href="/">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Categories</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
    </Nav>
  </div>;
};
export default Header;