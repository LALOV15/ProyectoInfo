import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OptionsMenu from "../src/componets/OptionsMenu/OptionsMenu";
import MenuComida from "./Pages/MenuComida/menucomida";
import MenuDesayunos from "./Pages/MenuComida/menuDesayunos";
import MenuCenas from "./Pages/MenuComida/menuCenas";
import MenuPostres from "./Pages/MenuComida/menuPostres";
import MenuBebidas from "./Pages/MenuComida/menuBebidas";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OptionsMenu />} />
        <Route path="/Desayunos" element={<MenuDesayunos />} />
        <Route path="/Comidas" element={<MenuComida />} />
        <Route path="/Cenas" element={<MenuCenas />} />
        <Route path="/Postres" element={<MenuPostres />} />
        <Route path="/Bebidas" element={<MenuBebidas />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
