import { useState, useEffect } from "react";
import { cardsArray } from "../components/App";
import { CARDSNUMBER } from "../constants";

const visible = [null];
const visibleId = [null, null];

const useGame = () => {
  const winNumbers = Math.floor(CARDSNUMBER / 2);
  // const winNumbers = 0;

  const [count, setCount] = useState(0);
  const [checkFirst, setCheckFirst] = useState(null);
  const [checkSecond, setCheckSecond] = useState(null);
  const [verifyCards, setVerifyCardTrue] = useState(false);
  const [noClick, setNoClick] = useState(false);
  const [firstClick, setFirstClick] = useState(true);
  const [winningCount, setWinningCount] = useState(0);
  const [win, setWin] = useState(true);

  const handleCardClick = ({ target }) => {
    const idNumber = cardsArray[target.id].id;
    visible[idNumber] = true;

    if (firstClick) {
      setCheckFirst(cardsArray[target.id].key);
      visibleId[0] = idNumber;
      setFirstClick(false);
    } else {
      setCheckSecond(cardsArray[target.id].key);
      visibleId[1] = idNumber;
      setNoClick(true);
      setCount(count + 1);
      setVerifyCardTrue(true);
    }
  };

  useEffect(() => {
    if (verifyCards) {
      if (checkFirst === checkSecond) {
        setNoClick(false);
        setVerifyCardTrue(false);
        setFirstClick(true);
        setCheckFirst(null);
        setCheckSecond(null);
        setWinningCount(winningCount + 1);
      }

      if (checkFirst !== checkSecond) {
        setTimeout(() => {
          setNoClick(false);
          setVerifyCardTrue(false);
          visible[visibleId[0]] = false;
          visible[visibleId[1]] = false;
          setFirstClick(true);
          setCheckFirst(null);
          setCheckSecond(null);
        }, 1000);
      }
    }
  }, [checkFirst, checkSecond, verifyCards, winningCount]);

  useEffect(() => {
    winningCount === winNumbers ? setWin(false) : setWin(true);
  }, [winningCount, winNumbers]);

  return {
    win,
    visible,
    noClick,
    count,
    handleCardClick,
  };
};

export default useGame;
