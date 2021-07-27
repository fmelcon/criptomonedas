import React from "react";
import styled from "@emotion/styled";

const MensajeError = styled.p`
  background-color: #b7322c;
  padding: 0.6rem;
  color: #fff;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  font-family: "Bebas Neue", cursive;
`;

const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

export default Error;
