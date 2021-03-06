import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Selects = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const useMoneda = (label, inicialState, opciones) => {
  // State del custom hook
  const [state, setState] = useState(inicialState);

  const Select = () => (
    <Fragment>
      <Label>{label}</Label>

      <Selects onChange={(e) => setState(e.target.value)} value={state}>
        <option value=""> --- Selecione Moneda --- </option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Selects>
    </Fragment>
  );

  //retornar state, interfaz y fn que modifica el state
  return [state, Select, setState];
};

export default useMoneda;
