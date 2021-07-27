import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  text-align: center;
  background: #00000066;
  padding: 1rem;
  border-radius: 10px;
  font-family: "Bebas Neue", cursive;
`;

const Info = styled.p`
  font-size: 25px;
  span {
  }
`;
const Precio = styled.p`
  font-size: 35px;
  span {
    font-family: "Bebas Neue", cursive;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span> {resultado.PRICE}</span>
      </Precio>
      <Info>
        Precio más alto del día: <span> {resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio más bajo del día: <span> {resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variación ultimas 24 horas: <span> {resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última actualización: <span> {resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
