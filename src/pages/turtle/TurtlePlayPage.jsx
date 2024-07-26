import { useEffect, useState } from "react";

import CountTime from "@components/play/CountTime";
import WebCam from "@components/turtle/WebCam";
import Navbar from "@layouts/Navbar";

const TurtlePlayPage = () => {
  const [timeLeft, setTimeLeft] = useState(3); // 카운트다운을 위해 3초로 설정
  const [showStart, setShowStart] = useState(false); // START 문구 보여주기용

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowStart(true);
      setTimeout(() => {
        setShowStart(false);
      }, 1000); // 1초 후에 "START" 텍스트를 숨김
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);
  return (
    <div className="relative">
      {timeLeft > 0 && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70">
          <CountTime time={timeLeft} />
        </div>
      )}
      <main className="relative flex flex-col items-center justify-center w-full h-screen">
        <div className="absolute top-[2%] w-full z-10">
          <Navbar closed />
        </div>
        {showStart && (
          <p className="absolute flex justify-center text-center top-[20%] text-text500 text-8xl font-Score">
            START
          </p>
        )}
        <WebCam start={timeLeft === 0} />
      </main>
    </div>
  );
};

export default TurtlePlayPage;
