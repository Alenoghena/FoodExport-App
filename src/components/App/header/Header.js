import React from "react";
import "./Header.css";
const Header = ({ isChooseFoodPage }) => {
  return (
    <div className="headerContainer">
      <h3 className="title">Online African Food Shop</h3>
      <h4 className="subTitle">
        {isChooseFoodPage ? "Menu Availability" : "Menu List Availability"}
      </h4>
    </div>
  );
};

export default Header;
