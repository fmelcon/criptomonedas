import React, { useState, useEffect, Fragment } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const ContResultado = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
  background: #00000066;
  border-radius: 10px;
`;
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 35%;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [moneda, setMoneda] = useState("");
  const [cripto, setCripto] = useState("");
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      // evitamos la ejecucion la primera vez
      if (moneda === "") return;

      // Consultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

      const resultado = await axios.get(url);
      // mostrar el spinner

      setLoading(true);
      setTimeout(() => {
        // cambiar el estado de cargando a false
        setLoading(false);
        //guardar cotizacion
        setResultado(resultado.data.DISPLAY[cripto][moneda]);
      }, 2000);
    };
    cotizarCriptomoneda();
  }, [moneda, cripto]);

  // Mostrar spinner o resultado
  const componente = loading ? (
    <Spinner />
  ) : (
    <ContResultado>
      {" "}
      <Cotizacion resultado={resultado} />
    </ContResultado>
  );

  return (
    <Fragment>
      <Contenedor>
        <div>
          <Imagen src={imagen} alt="imagen cripto" />
        </div>
        <div>
          <Heading>Consulta Criptomonedas</Heading>
          <Formulario setCripto={setCripto} setMoneda={setMoneda} />
        </div>
      </Contenedor>
      {componente}
    </Fragment>
  );
}

export default App;
