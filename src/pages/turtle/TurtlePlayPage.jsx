import WebCam from "@components/turtle/WebCam";
import Navbar from "@layouts/Navbar";
import { useEffect, useState } from "react";
import TrackingBar from "../../components/turtle/TrackingBar";

const TurtlePlayPage = () => {
  const [timeLeft, setTimeLeft] = useState(3); // 카운트다운을 위해 3초로 설정
  const [showStart, setShowStart] = useState(false); // START 문구 보여주기용
  const [trackingLeft, setTrackingLeft] = useState(5); // 측정하는 시간을 3초로 설정
  const [timesUp, setTimesUp] = useState(false); // 측정 완료 상태

  useEffect(() => {
    if (timeLeft > 0) {
      const startTimer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(startTimer);
    } else {
      setShowStart(true);
      setTimeout(() => {
        setShowStart(false);
      }, 1000);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && trackingLeft > 0) {
      const trackingTimer = setInterval(() => {
        setTrackingLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(trackingTimer);
    } else if (trackingLeft === 0) {
      setTimesUp(true);
    }
  }, [timeLeft, trackingLeft]);

  return (
    <div className="relative">
      {timeLeft > 0 && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70">
          <p className="">
            거북목 측정을 시작합니다! 직사각형에 양쪽 두 어깨와 얼굴이 정면으로
            놓이게끔 해주세요
          </p>
        </div>
      )}
      <main className="relative flex flex-col items-center justify-center w-full h-screen">
        <div className="absolute top-[2%] w-full z-10">
          <Navbar closed turtle="거북목 측정" />
        </div>
        {showStart && (
          <p className="absolute flex justify-center text-center top-[40%] text-text500 text-8xl font-Score">
            START
          </p>
        )}
        <WebCam start={timeLeft === 0} end={timesUp} />
      </main>
      <div className="absolute inset-0">
        <TrackingBar />
      </div>
    </div>
  );
};

export default TurtlePlayPage;
