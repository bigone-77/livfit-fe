import { useEffect, useState } from "react";

import bulb from "@images/rest/bulb.png";
import CountTime from "./CountTime";

const RestScreen = ({ setRest }) => {
  const [timeLeft, setTimeLeft] = useState(3);

  // 본 화면에 들어오면 바로 3, 2, 1 타이머 작동
  useEffect(() => {
    if (timeLeft <= 0) {
      setRest(false); // 본래 화면으로 돌아가기
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="absolute inset-0 z-10 flex justify-center w-full h-full bg-black">
      <section className="relative flex flex-col items-center gap-2 mt-28">
        <p className="absolute text-6xl top-12 text-lightblue2 font-Score">
          REST
        </p>
        <CountTime restTime={timeLeft} />
        <div className="absolute flex items-center justify-center gap-2 top-96">
          <img src={bulb} alt={bulb} />
          <div className="text-[10px] text-text50">
            <p className="mb-2 whitespace-nowrap">
              발가락을 오므리고 마치 바닥을 움켜잡는 느낌적인 느낌으로 스쿼트를
              해보세요!
            </p>
            <p className="whitespace-nowrap">
              자세도 안정적이고 중반부에도 계속해서 하체를 이용해 일어날 수 있게
              됩니다!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestScreen;
