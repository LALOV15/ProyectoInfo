import React from "react";
import { Link } from "react-router-dom";
import { Navbar_Container, Carrito, LabelTitle } from "./Navbar.style";

const NavBar = () => {
  return (
    <Navbar_Container>
      <Link to="/">
        <LabelTitle> Soft-Food Demo</LabelTitle>
      </Link>
      <Carrito />
    </Navbar_Container>
  );
};

export default NavBar;
