import React from "react";
import Logo from "../../assets/img/rdflix.png";
import ButtonLink from "./components/ButtonLink";
import "./Menu.css";
function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Roniflix logo" />
      </a>
      <ButtonLink className="ButtonLink" href="/">
        Prop ok ok
      </ButtonLink>
    </nav>
  );
}
export default Menu;
