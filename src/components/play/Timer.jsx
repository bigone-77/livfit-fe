/* eslint-disable react/display-name */
import { memo, useEffect, useState } from "react";

const Timer = memo(({ start, paused, setTimeUp }) => {
  const MINUTES_IN_MS = 1 * 60 * 1000; // 1분
  const INTERVAL = 1000; // 1초
  const [timeLeft, setTimeLeft] = useState(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  useEffect(() => {
    let timer;

    if (start && !paused) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - INTERVAL;
          return newTime >= 0 ? newTime : 0;
        });
      }, INTERVAL);
    }

    if (paused || !start) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [start, paused]);

  useEffect(() => {
    if (!start) {
      setTimeLeft(MINUTES_IN_MS);
    }
  }, [start, paused]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeUp(true);
    }
  }, [timeLeft]);

  return (
    <div className="flex items-center justify-center mb-4 text-7xl font-GameNumber">
      {minutes} : {seconds}
    </div>
  );
});

export default Timer;
