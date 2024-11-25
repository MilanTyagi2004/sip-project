import React from "react";
import "../Style/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>SIP Calculator</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#calculator">Calculator</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
