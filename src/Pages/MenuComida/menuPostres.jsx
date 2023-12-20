import React, { useState, useEffect } from "react";
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
  Label_Title
} from "./menucomida.style";
import axios from "axios";
import Contador from "../../componets/Counter/counter";

const MenuPostres = () => {
  const [platillo, setPlatillo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:3000/platillos");
        const filteredPlatillos = result.data.filter(
          (item) => item.id_tipo_menu === 4
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
      <Label_Title>Postres</Label_Title>
      {platillo.map((item) => (
        <ContainerCard>
          <ContainerMenu>
            <Container_Nombre_Precio>
              <Label_Nombre>{item.nombre_platillo}</Label_Nombre>
              <Label_Precio>{item.precio}</Label_Precio>
            </Container_Nombre_Precio>
            <Label_Desc>{item.descripcion_platillo}</Label_Desc>
          </ContainerMenu>
          <Contador />
            <ObtText type="text" placeholder="Observaciones" />{" "}
          <ButtonAdd>Agregar</ButtonAdd>
        </ContainerCard>
      ))}
    </Menu_Container>
  );
};

export default MenuPostres;