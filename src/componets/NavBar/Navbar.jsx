import React from "react";
import { Navbar_Container, Carrito, LabelTitle } from "./Navbar.style";

const NavBar = () => {
  return (
    <Navbar_Container>
      <LabelTitle> Soft-Food Demo</LabelTitle>
      <Carrito />
    </Navbar_Container>
  );
};

export default NavBar;
