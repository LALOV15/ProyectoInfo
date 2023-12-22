import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OptionsMenu from "../src/componets/OptionsMenu/OptionsMenu";
import MenuComida from "./Pages/MenuComida/menucomida";
import MenuDesayunos from "./Pages/MenuComida/menuDesayunos";
import MenuCenas from "./Pages/MenuComida/menuCenas";
import MenuPostres from "./Pages/MenuComida/menuPostres";
import MenuBebidas from "./Pages/MenuComida/menuBebidas";
import NavBar from "../src/componets/NavBar/Navbar";
import Carrito from "../src/componets/Carrito/Carrito";

const RoutesComponent = () => {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (item, cantidadSeleccionada, observaciones) => {
    const newItem = { ...item, cantidad: cantidadSeleccionada, observaciones };
    setCarrito([...carrito, newItem]);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = carrito.filter((item) => item.id !== itemToRemove.id);
    setCarrito(updatedCart);
  };

  console.log({carrito})

  return (
    <Router>
      <Routes>
        <Route path="/" element={<OptionsMenu />} />
        <Route
          path="/Desayunos"
          element={<MenuDesayunos addToCart={addToCart} />}
        />
        <Route path="/Comidas" element={<MenuComida addToCart={addToCart} />} />
        <Route path="/Cenas" element={<MenuCenas addToCart={addToCart} />} />
        <Route
          path="/Postres"
          element={<MenuPostres addToCart={addToCart} />}
        />
        <Route
          path="/Bebidas"
          element={<MenuBebidas addToCart={addToCart} />}
        />
        <Route
          path="/Carrito"
          element={
            <Carrito carrito={carrito} removeFromCart={removeFromCart} />
          } 
        />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
