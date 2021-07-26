import React from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "BRL", nombre: "Real" },
    { codigo: "PEN", nombre: "Sol" },
    { codigo: "ARS", nombre: "Peso Argentino" },
    { codigo: "COP", nombre: "Peso Colombiano" },
    { codigo: "VES", nombre: "Bolívar Soberano" },
    { codigo: "CLE", nombre: "Escudo Chileno" },
    { codigo: "UYU", nombre: "Peso Uruguayo" },
  ];
  //Utilizar useMoneda
  const [moneda, SelectMoneda] = useMoneda("Elige tu moneda", "", MONEDAS);

  return (
    <form>
      <SelectMoneda />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
