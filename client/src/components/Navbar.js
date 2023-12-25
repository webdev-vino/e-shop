import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropDownOpen] = useState(false);


  const toggleDropDown = () => {
    setDropDownOpen(!isDropdownOpen);
  };

  const link ={
    textDecoration: "none",
    color: "white"
  }

  const linked = {
    color: "black",
    textDecoration: "none",
  }

  return (
    <div>
      <nav>
        <ul>
          <li>Shopy</li>
          <li>Home</li>
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>About Us</li>
          <li><Link to= "/login" style={link}>Login</Link></li>
          <li><Link to= "/signup" style={link}>SignUp</Link></li>
          <li>
            <i class="fa-brands fa-shopify icon"></i>
            <span className="cart">0</span>
          </li>
          
          <li className="toggle_btn" onClick={toggleDropDown}>
            <i
              class={isDropdownOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </li>
          
        </ul>
      </nav>
      <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>About Us</li>
        <li><Link to= "/login" style={linked}>Login</Link></li>
          <li><Link to= "/signup" style={linked}>SignUp</Link></li>
      </div>
    </div>
  );
};

export default Navbar;
