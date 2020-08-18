import React, { useState, useEffect } from "react";

const Display = ({ gameStart, timeValue, count }) => {
  const [seconds, setSeconds] = useState(null);
  const [minutes, setMinutes] = useState(null);

  useEffect(() => {
    if (gameStart) {
      const updatedTime = new Date().getTime();
      const nowTime = updatedTime - timeValue;

      const sec = ("0" + (Math.floor(nowTime / 1000) % 60)).slice(-2);
      const min = ("0" + (Math.floor(nowTime / 60000) % 60)).slice(-2);

      const clock = setInterval(() => {
        setSeconds(sec);
        setMinutes(min);
      }, 1000);

      return () => clearInterval(clock);
    }
  }, [seconds, gameStart, timeValue]);

  return (
    <>
      <div>
        <div>Play Time</div>
        <div>
          {minutes}:{seconds}
        </div>
      </div>
      <div>
        <div>Count</div>
        <div>{count}</div>
      </div>
    </>
  );
};

export default Display;
