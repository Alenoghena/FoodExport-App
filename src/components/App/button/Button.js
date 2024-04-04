import React from "react";
import "./Button.css";

const Button = ({ isChooseFoodPage, isShow, len, handleSelectPage }) => {
  return (
    <ul className="ulBtn">
      <li className="liBtn">
        {!isChooseFoodPage && isShow && len ? (
          ""
        ) : isChooseFoodPage && isShow && len ? (
          <button className="toggleButton" onClick={handleSelectPage}>
            Go To MenuItem
          </button>
        ) : isChooseFoodPage && !isShow && !len ? (
          <button className="toggleButton" onClick={handleSelectPage}>
            Availability check
          </button>
        ) : (
          <button className="toggleButton" onClick={handleSelectPage}>
            Order Food
          </button>
        )}
      </li>
    </ul>
  );
};

export default Button;
