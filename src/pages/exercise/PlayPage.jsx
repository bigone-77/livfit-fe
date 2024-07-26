import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PlayNavbar from "@layouts/PlayNavbar";

import CountTime from "@components/play/CountTime";
import GroupButton from "@components/play/GroupButton";
import RestScreen from "@components/play/RestScreen";
import Score from "@components/play/Score";
import Timer from "@components/play/Timer";
import WebCam from "@components/play/WebCam";

import { parsedPlay } from "@constants/parsedPlay";

const PlayPage = () => {
  const [getStart, setGetStart] = useState(false); // 시작 타이머 용도
  const [timeLeft, setTimeLeft] = useState(3); // 카운트다운을 위해 3초로 설정
  const [showStart, setShowStart] = useState(false); // START 문구 보여주기용
  const [rest, setRest] = useState(false); // 잠시 쉬는화면 보여주기
  const [timeUp, setTimeUp] = useState(false); // 타이머 종료 용도

  const exercise = useParams().exercise; // 어떤 운동인지 ? parameter값 가져오기 용도
  const navigate = useNavigate();

  // 본 화면에 들어오면 바로 3, 2, 1 타이머 작동
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

  // TODO: 타이머가 끝났을시 ResultPage로 리다이렉팅
  useEffect(() => {
    if (timeUp) {
      navigate(`/${exercise}/result`);
    }
  }, [timeUp]);

  return (
    <div className="relative">
      {timeLeft > 0 && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70">
          <CountTime time={timeLeft} />
        </div>
      )}
      {rest && <RestScreen setRest={setRest} />}

      <PlayNavbar title={parsedPlay(exercise)} closed styles rest={rest} />
      <WebCam
        start={timeLeft === 0}
        end={timeUp}
        setTimerStart={setGetStart}
        exercise={exercise}
      />
      <main className="relative flex flex-col items-center justify-center w-full h-screen">
        <section className="absolute top-0">
          <Score />
        </section>
        {showStart && (
          <p className="absolute flex justify-center text-center top-[20%] text-text500 text-8xl font-Score">
            START
          </p>
        )}
        <section className="absolute flex flex-col justify-center w-full bottom-40">
          <Timer
            start={getStart && !showStart}
            paused={rest}
            setTimeUp={setTimeUp}
          />
          <GroupButton rest={rest} setRest={setRest} />
        </section>
      </main>
    </div>
  );
};

export default PlayPage;
