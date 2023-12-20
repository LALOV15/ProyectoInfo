import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OptionsMenu from "../src/componets/OptionsMenu/OptionsMenu";
import MenuComida from "./Pages/MenuComida/menucomida";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OptionsMenu />} />
        <Route path="/Desayunos" element={<MenuComida />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
