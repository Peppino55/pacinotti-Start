/*import React, { useState } from "react";*/
import styled from "styled-components";

import Education from "./components/Education";

//Dichiarazione Styled Components:
const Header = styled.header`
  background: brown;
  height: auto;
  font-size: 60px;
  display: flex;
  align-content: center;
`;

const Contenitore = styled.div`
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Img = styled.img`
  max-width: -webkit-fill-available;
`;

const App = () => {
  return (
    <div>
      <Header>Questo è un header</Header>
      <Contenitore>
        <Div>
          <h1>sono nicola miragliotta</h1>
          <h2>puzzo meno di Marco</h2>
          <p>Non so cosa scrivere in questo spazio</p>
        </Div>
        <Div>
          <Img src="https://www.disegnifacili.com/wp-content/uploads/2022/11/Spada-da-disegno-passo8.jpg" />
          <p>Questa è una spada perché non sapevo che altra foto mettere</p>
        </Div>
      </Contenitore>
      <Contenitore>
        <p>
          Ora scrivo un testo lungo.
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
      </Contenitore>
      <Education />
    </div>
  );
};

export default App;
