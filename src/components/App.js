import React, { useState, useEffect } from "react";
import { Main, Header, Button, GlobalStyle } from "../assets/styled";
import Board from "./Board";
import { IMGS } from "../utils/constants";
import { preload } from "../utils/preload";
import { setCards } from "../utils/setCards";

export const cardsArray = [];

const App = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    preload(IMGS);
  }, []);

  const gameStart = () => {
    setCards();
    setStart(true);
  };

  return (
    <Main>
      <GlobalStyle />
      {!start ? (
        <>
          <Header>Mario Memory</Header>
          <Button onClick={() => gameStart()}>START</Button>
        </>
      ) : (
        <Board></Board>
      )}
    </Main>
  );
};

export default App;
