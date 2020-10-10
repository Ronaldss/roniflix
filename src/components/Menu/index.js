import React from "react";
import Logo from "../../assets/img/rdflix.png";
import Button from "../Button";
// import ButtonLink from "./components/ButtonLink";
import "./Menu.css";
function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Roniflix logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Outro Filho
      </Button>
    </nav>
  );
}
export default Menu;
