import React, { useState } from "react";
import { cards } from "./data";
import Board from "./Board";
import "./App.css";

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
    <div className="main">
      {!start ? (
        <div className="main__startScreen">
          <h1> Mario Memory</h1>
          <button className="main__button" onClick={() => gameSetup()}>
            START
          </button>
        </div>
      ) : (
        <>
          <Board></Board>
        </>
      )}
    </div>
  );
};

export default App;
