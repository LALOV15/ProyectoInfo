import styled from "styled-components";

export const Menu_Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Quicksand", sans-serif;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Quicksand", sans-serif;
  align-items: center;
  width: 80%;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 10px;
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Quicksand", sans-serif;
  align-items: center;
  width: 100%;
  margin-bottom:10px;
`;

export const Container_Nombre_Precio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Quicksand", sans-serif;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Label_Nombre = styled.label`
  font-family: "Quicksand", sans-serif;
  text-align: center;
  font-size: 14px;
`;

export const Label_Precio = styled.label`
  font-family: "Quicksand", sans-serif;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

export const Label_Desc = styled.label`
  font-family: "Quicksand", sans-serif;
  text-align: center;
  font-size: 14px;
`;

