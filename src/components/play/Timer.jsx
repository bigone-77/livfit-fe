/* eslint-disable react/display-name */
import { memo, useEffect, useState } from 'react';

const Timer = memo(() => {
  const MINUTES_IN_MS = 1 * 60 * 1000; // 시간은 1분일 때
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    '0'
  );
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      console.log('응답시간이 초과되었습니다');
    }
  }, [timeLeft]);

  return (
    <div className='flex items-center justify-center mb-4 text-7xl font-GameNumber'>
      {minutes} : {seconds}
    </div>
  );
});

export default Timer;
