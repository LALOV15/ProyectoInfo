import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OptionsMenu from "../src/componets/OptionsMenu/OptionsMenu";
import MenuComida from "./Pages/MenuComida/menucomida";
import MenuDesayunos from "./Pages/MenuComida/menuDesayunos";
import MenuCenas from "./Pages/MenuComida/menuCenas";
import MenuPostres from "./Pages/MenuComida/menuPostres";
import MenuBebidas from "./Pages/MenuComida/menuBebidas";
import Carrito from "../src/componets/Carrito/Carrito";
import axios from "axios";

const RoutesComponent = () => {
  const [carrito, setCarrito] = useState([]);

  const addToCart = async (item, cantidad, observaciones) => {
    try {
      const newCart = {
        ...item,
        nombre_platillo: item.nombre_platillo,
        descripcion_platillo: item.descripcion_platillo,
        cantidad: cantidad,
        observaciones: observaciones,
      };
      const newCartItem = {
        id_platillo: item.id_platillo,
        cantidad,
        monto: item.precio * cantidad,
        observaciones,
      };

      const response = await axios.post(
        "http://localhost:3000/agregar_al_carrito",
        newCartItem
      );

      const combinedCartItem = {
        ...response.data.linea_pedido[0],
        ...newCart,
      };

      // Aquí, accedemos directamente a la línea de pedido recibida del servidor
      setCarrito((prevState) => [...prevState, combinedCartItem]);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  console.log({ carrito });

  const removeFromCart = (itemToRemove) => {
    const updatedCart = carrito.filter((item) => item.id !== itemToRemove.id);
    setCarrito(updatedCart);
  };

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
