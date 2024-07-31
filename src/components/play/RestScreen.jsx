import { useEffect, useState } from "react";

import bulb from "@images/rest/bulb.png";

const RestScreen = ({ restTime, setRest }) => {
  console.log("날 화면에 보여줭");
  const [timeLeft, setTimeLeft] = useState(restTime);

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
    <div className="absolute inset-0 z-30 flex justify-center w-full h-full bg-black">
      <section className="relative flex flex-col items-center gap-1 mt-28">
        <p className="absolute text-6xl top-12 text-lightblue2 font-Score">
          REST
        </p>
        <p
          className="text-[280px] font-GameNumber rest-effect"
          data-text={timeLeft}
        >
          {timeLeft}
        </p>
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
