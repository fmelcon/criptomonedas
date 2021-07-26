import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptoMoneda from "../hooks/useCriptoMoneda";

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
  // State del listado de Criptomonedas
  const [listcripto, setListCripto] = useState([]);

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

  // utilizar useCriptoMoneda
  const [criptomoneda, SelectCripto] = useCriptoMoneda(
    "Elige tu criptomoneda",
    "",
    listcripto
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      setListCripto(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  return (
    <form>
      <SelectMoneda />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
