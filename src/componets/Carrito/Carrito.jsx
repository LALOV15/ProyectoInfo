import React from "react";
import {
  Carrito_Container,
  Carrito_Item,
  Carrito_Img,
  Carrito_Text,
  Carrito_Nombre,
  Carrito_Precio,
  Carrito_Desc,
  Carrito_Button,
  Carrito_Icon,
  ConteinerNADD
} from "./Carrito.style";
import NavBar from "../NavBar/Navbar";

const Carrito = ({ carrito, removeFromCart }) => {
  return (
    <div>
      <NavBar />
      <Carrito_Container>
        {carrito && carrito.length > 0 ? (
          carrito.map((item) => (
            <Carrito_Item key={item.id}>
              <Carrito_Img
                src={item.imagen_platillo}
                alt={item.nombre_platillo}
              />
              <Carrito_Text>
                <Carrito_Nombre>{item.nombre_platillo}</Carrito_Nombre>
                <Carrito_Precio>{item.precio}</Carrito_Precio>
                <Carrito_Desc>{item.descripcion_platillo}</Carrito_Desc>
                <p>Cantidad: {item.cantidad}</p>
                <p>Observaciones: {item.observaciones}</p>
              </Carrito_Text>
              <Carrito_Button onClick={() => removeFromCart(item)}>
                Eliminar
              </Carrito_Button>
            </Carrito_Item>
          ))
        ) : (
          <ConteinerNADD>
            <p>No hay elementos en el carrito</p>
            <Carrito_Icon />
          </ConteinerNADD>
        )}
      </Carrito_Container>
    </div>
  );
};

export default Carrito;
