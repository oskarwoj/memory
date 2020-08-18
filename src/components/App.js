import React, { useState } from "react";
import Board from "./Board";
import { cards } from "./data";
import { Main, Header, Button } from "./styled";

export const cardsArray = [];
export const cardsNumbers = 16;

const App = () => {
  const [start, setStart] = useState(false);

  const gameSetup = () => {
    const newCards = cards.slice(0, cardsNumbers);

    for (let i = 0; i < cardsNumbers; i++) {
      let random = Math.floor(Math.random() * newCards.length);

      cardsArray.push(newCards[random]);
      newCards.splice(random, 1);
      cardsArray[i].id = i;
    }
    setStart(true);
  };

  return (
    <Main>
      {!start ? (
        <>
          <Header> Mario Memory</Header>
          <Button onClick={() => gameSetup()}>START</Button>
        </>
      ) : (
        <Board></Board>
      )}
    </Main>
  );
};

export default App;
