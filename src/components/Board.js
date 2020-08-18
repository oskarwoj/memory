import React, { useState } from "react";
import Display from "./Display";
import { cardsArray } from "./App";
import "./App.css";
import ReactAudioPlayer from "react-audio-player";
import useGame from "./useGame";

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
        <div className="game">
          <div className="game__bar">
            <Display
              timeValue={time}
              gameStart={gameStart}
              count={count}
            ></Display>
          </div>
          <div className="game__board">
            {cardsArray.map((card, keys) => (
              <div key={card.id} className="game__cardBox">
                <div
                  // className="game__card "
                  className={`game__card ${visible[keys] ? "front" : ""}`}
                  id={card.id}
                  onClick={
                    !visible[keys] && !noClick
                      ? (event) => gamePlay(event)
                      : null
                  }
                >
                  {visible[keys] ? (
                    <img src={card.img} alt="card"></img>
                  ) : (
                    // <img src={require("../images/bullet.png")} alt=""></img>
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
          <ReactAudioPlayer
            className="musicPlayer"
            src="./super_mario.mp3"
            autoPlay
            controls
          />
        </div>
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
