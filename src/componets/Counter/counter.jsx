import React, { useState } from "react";
import {
  ContainerCounter,
  ContainerButtons,
  AddIcon,
  LessIcon,
  Counter,
} from "./counter.style";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  return (
    <ContainerCounter>
      <ContainerButtons>
        <LessIcon onClick={decrementar} />
        <Counter>{contador}</Counter>
        <AddIcon onClick={incrementar} />
      </ContainerButtons>
    </ContainerCounter>
  );
};

export default Contador;
