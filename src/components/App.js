import React, { useState } from "react";
import { Main, Header, Button, GlobalStyle } from "../assets/styled";
import Board from "./Board";
import { setCards } from "../utils/setCards";
import useFetchImages from "../hooks/useFetchImages";

export const cardsArray = [];

const App = () => {
  const [start, setStart] = useState(false);
  const { cards } = useFetchImages();

  const gameStart = () => {
    setCards(cards);
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
