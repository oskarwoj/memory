import React, { useState, useEffect } from "react";
import Board from "./Board";
import { cards } from "./data";
import { Main, Header, Button, GlobalStyle } from "./styled";

export const cardsArray = [];
export const cardsNumbers = 16;

const imgs = [
  "https://github.com/oskarwoj/memory/blob/master/src/images/blue.png?raw=true",
  "https://github.com/oskarwoj/memory/blob/master/src/images/bullet.png?raw=true",
  "https://github.com/oskarwoj/memory/blob/master/src/images/coin.png?raw=true",
  "https://github.com/oskarwoj/memory/blob/master/src/images/fish.png?raw=true",
  "https://github.com/oskarwoj/memory/blob/master/src/images/flower.png?raw=true",
  "https://github.com/oskarwoj/memory/blob/master/src/images/monster.png?raw=true",
  "https://github.com/oskarwoj/memory/blob/master/src/images/owl.png?raw=true",
];

const App = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    cacheImages(imgs);
  }, []);

  const cacheImages = (srcArray) => {
    srcArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    console.log("dziala");
  };

  const gameSetup = () => {
    const newCards = cards.slice(0, cardsNumbers);

    for (let i = 0; i < cardsNumbers; i++) {
      let random = Math.floor(Math.random() * newCards.length);

      cardsArray.push(newCards[random]);
      newCards.splice(random, 1);
      cardsArray[i].id = i;
    }
    setStart(true);
    console.log(newCards, cardsArray);
  };

  return (
    <Main>
      <GlobalStyle />
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
