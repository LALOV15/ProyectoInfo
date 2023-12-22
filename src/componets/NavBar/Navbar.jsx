import React from "react";
import { Link } from "react-router-dom";
import { Navbar_Container, Carrito, LabelTitle } from "./Navbar.style";

const NavBar = () => {
  return (
    <Navbar_Container>
      <Link to="/">
        <LabelTitle> Soft-Food Demo</LabelTitle>
      </Link>
      <Link to="/Carrito">
        <Carrito />
      </Link>
    </Navbar_Container>
  );
};

export default NavBar;
