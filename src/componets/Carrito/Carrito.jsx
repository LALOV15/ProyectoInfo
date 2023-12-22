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
  ConteinerNADD,
  EnviarOrdenButton,
  BackIcon,
  ContainerHeader,
} from "./Carrito.style";
import NavBar from "../NavBar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const Carrito = ({ carrito, removeFromCart }) => {
  const enviarOrden = async () => {
    try {
      // Aquí debemos realizar la lógica para enviar la orden al servidor
      // Supongamos que tenemos el ID de mesa y el ID de línea de pedido
      const idMesa = 1; // Coloca el ID de la mesa aquí
      const idLineaPedido = carrito[0].id_linea_pedido
      ; 

      const response = await axios.post("http://localhost:3000/enviar_orden", {
        id_mesa: idMesa,
        id_linea_pedido: idLineaPedido,
      });

      console.log(response.data); // Debes manejar la respuesta del servidor según sea necesario
    } catch (error) {
      console.error("Error al enviar la orden:", error);
    }
    console.log({carrito})
  };

  return (
    <div>
      <NavBar />
      <Carrito_Container>
        <ContainerHeader>
          <Link to="/">
            <BackIcon />
          </Link>
          <label>Orden</label>
        </ContainerHeader>

        {carrito && carrito.length > 0 ? (
          carrito.map((item) => (
            <Carrito_Item key={item.id}>
              {/* Asegúrate de que los datos se muestren correctamente */}
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
      {/* Botón para enviar la orden */}
      {carrito && carrito.length > 0 && (
        <EnviarOrdenButton onClick={enviarOrden}>
          Enviar Orden
        </EnviarOrdenButton>
      )}
    </div>
  );
};

export default Carrito;
