import React, { useState } from "react";
import Display from "./Display";
import { cardsArray } from "./App";
import ReactAudioPlayer from "react-audio-player";
import useGame from "../hooks/useGame";
import { URL } from "../utils/constants";
import {
  Game,
  GameBoard,
  Card,
  GameBar,
  CardImage,
  Player,
  WinBoard,
} from "../assets/styled";

const Board = () => {
  const [gameStart, setGameStart] = useState(false);
  const [time, setTime] = useState(null);
  const { win, visible, noClick, count, handleCardClick } = useGame();

  const gamePlay = (event) => {
    if (!gameStart) {
      setTime(new Date().getTime());
    }
    setGameStart(true);
    handleCardClick(event);
  };

  return (
    <>
      {win ? (
        <Game>
          <GameBar>
            <Display
              timeValue={time}
              gameStart={gameStart}
              count={count}
            ></Display>
          </GameBar>
          <GameBoard>
            {cardsArray.map((card, keys) => (
              <Card
                visible={visible[keys]}
                id={card.id}
                key={card.id}
                onClick={
                  !visible[keys] && !noClick ? (event) => gamePlay(event) : null
                }
              >
                {visible[keys] && (
                  <CardImage
                    src={require(`./images/${card.url}.png`)}
                    alt="card"
                  ></CardImage>
                )}
              </Card>
            ))}
          </GameBoard>
          <Player>
            <ReactAudioPlayer
              style={{ width: "180px", height: "20px" }}
              src={URL}
              autoPlay
              controls
              loop
            />
          </Player>
        </Game>
      ) : (
        <WinBoard>
          <h1>You win!</h1>
          <hr />
          <h3> It took you {count} moves</h3>
        </WinBoard>
      )}
    </>
  );
};

export default Board;
