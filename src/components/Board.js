import React, { useState } from "react";
import Display from "./Display";
import { cardsArray } from "./App";
import ReactAudioPlayer from "react-audio-player";
import useGame from "./useGame";
import { Game, GameBoard, Card, GameBar, CardImage, Player } from "./styled";

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
                  <CardImage src={card.img} alt="card"></CardImage>
                )}
              </Card>
            ))}
          </GameBoard>
          <Player>
            <ReactAudioPlayer
              style={{ width: "180px", height: "20px" }}
              src="https://raw.githubusercontent.com/oskarwoj/memory/master/src/music/super_mario.mp3"
              autoPlay
              controls
              loop
            />
          </Player>
        </Game>
      ) : (
        <div>
          <h1>You win!</h1>
          <hr />
          <h3> It took you {count} moves</h3>
        </div>
      )}
    </>
  );
};

export default Board;
