import React, { Fragment, useState } from "react";

const useMoneda = (label, inicialState, opciones) => {
  // State del custom hook
  const [state, setState] = useState(inicialState);

  const Select = () => (
    <Fragment>
      <label>{label}</label>

      <select onChange={(e) => setState(e.target.value)} value={state}>
        <option value=""> -- Selecione Moneda -- </option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </Fragment>
  );

  //retornar state, interfaz y fn que modifica el state
  return [state, Select, setState];
};

export default useMoneda;
