// MenuComida.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Contador from "../../componets/Counter/counter";
import NavBar from "../../componets/NavBar/Navbar";
import {
  Menu_Container,
  ContainerCard,
  ContainerMenu,
  Container_Nombre_Precio,
  Label_Nombre,
  Label_Precio,
  Label_Desc,
  ButtonAdd,
  ObtText,
  Label_Title,
} from "./menucomida.style";

const MenuComida = ({ addToCart }) => {
  const [platillo, setPlatillo] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
  const [observaciones, setObservaciones] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:3000/platillos");
        const filteredPlatillos = result.data.filter(
          (item) => item.id_tipo_menu === 2
        );
        setPlatillo(filteredPlatillos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

 

  return (
    <Menu_Container>
      <NavBar />
      <Label_Title>Comidas</Label_Title>
      {platillo.map((item) => (
        <ContainerCard key={item.id}>
          <ContainerMenu>
            <Container_Nombre_Precio>
              <Label_Nombre>{item.nombre_platillo}</Label_Nombre>
              <Label_Precio>{item.precio}</Label_Precio>
            </Container_Nombre_Precio>
            <Label_Desc>{item.descripcion_platillo}</Label_Desc>
          </ContainerMenu>
          <Contador
            onCountChange={(cantidad) => {
              setCantidadSeleccionada(cantidad);
            }}
          />
          <ObtText
            type="text"
            placeholder="Observaciones"
            onChange={(e) => {
              // Capturar las observaciones y almacenarlas en el estado
              setObservaciones(e.target.value);
            }}
          />
          <ButtonAdd
            onClick={() =>
              addToCart(
                item,
                cantidadSeleccionada,
                observaciones
              )
            }
          >
            Agregar
          </ButtonAdd>
        </ContainerCard>
      ))}
    </Menu_Container>
  );
};

export default MenuComida;
