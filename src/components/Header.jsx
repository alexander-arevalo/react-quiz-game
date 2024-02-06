import React from "react";
import LogoImg from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={LogoImg} alt="Logo Quiz" />
      <h1>React Quiz</h1>
    </header>
  );
};

export default Header;
