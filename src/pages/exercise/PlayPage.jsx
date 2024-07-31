import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { privateApi } from "@api/axios";

import PlayNavbar from "@layouts/PlayNavbar";

import CountTime from "@components/play/CountTime";
import GroupButton from "@components/play/GroupButton";
import RestScreen from "@components/play/RestScreen";
import Score from "@components/play/Score";
import Timer from "@components/play/Timer";
import WebCam from "@components/play/WebCam";

import { parsedPlay } from "@constants/parsedPlay";
import { timeStringToSeconds } from "@utils/timeFormat";

// 만약에 세트수가 2세트다 ?
// 3, 2, 1 -> start -> 설정한 playTime에 맞춰서 타이머 작동 그리고 playTime이 end가 되면
// restScreen 보여주기
// 그 후 다시 설정한 playTime에 맞춰서 타이머 작동 그리고 playTime이 end가 되면 결과페이지로 이동
// 즉슨, 제일 중요한 건 타이머는 세트 수에 맞게 그 수 만큼 동작

const PlayPage = () => {
  const mutation = useMutation({
    mutationFn: (body) => {
      privateApi.post(`/${exercise}/save_record`, body);
    },
  });
  const playConfig = useSelector((state) => state.play);

  const [getStart, setGetStart] = useState(false); // 시작 타이머 용도
  const [timeLeft, setTimeLeft] = useState(3); // 카운트다운을 위해 3초로 설정
  const [showStart, setShowStart] = useState(false); // START 문구 보여주기용

  const [rest, setRest] = useState(false); // 잠시 쉬는화면 보여주기
  const [timeUp, setTimeUp] = useState(false); // 타이머 종료 용도
  const [currentSet, setCurrentSet] = useState(1); // 현재 세트 수 추적
  const [timerKey, setTimerKey] = useState(0); // 타이머를 리셋하기 위한 키

  const [cameraEnd, setCameraEnd] = useState(false); // 웹캠 카메라 end 시키기 위한 값

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

  useEffect(() => {
    if (timeUp) {
      if (currentSet < parseInt(playConfig.goalSet.split("세트")[0], 10)) {
        setRest(true);
        setTimeout(() => {
          setRest(false);
          setCurrentSet((prevSet) => prevSet + 1);
          setTimeLeft(3);
          setTimeUp(false);
          setGetStart(false); // 리셋 후 타이머 재시작 방지
          setTimerKey((prevKey) => prevKey + 1); // 타이머 리셋을 위한 키 변경
        }, parseInt(playConfig.restTime.split("초")[0], 10) * 1000);
      } else {
        mutation.mutate({
          timer_sec: timeStringToSeconds(playConfig.playTime),
          set: Number(playConfig.goalSet.split("세트")[0]),
          count: playConfig.scoreArray.length,
          good: playConfig.scoreArray.filter((score) => score === "Good")
            .length,
          great: playConfig.scoreArray.filter((score) => score === "Great")
            .length,
          perfect: playConfig.scoreArray.filter((score) => score === "Perfect")
            .length,
        });
        setCameraEnd(true);
        navigate(`/${exercise}/result`);
      }
    }
  }, [timeUp]);

  return (
    <div className="relative">
      {timeLeft > 0 && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-70">
          <CountTime time={timeLeft} />
        </div>
      )}
      {rest && (
        <RestScreen
          restTime={playConfig.restTime.split("초")[0]}
          setRest={setRest}
        />
      )}

      <PlayNavbar title={parsedPlay(exercise)} closed styles rest={rest} />
      <WebCam
        start={timeLeft === 0}
        setTimerStart={setGetStart}
        exercise={exercise}
        end={cameraEnd}
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
            key={timerKey} // 타이머 리셋을 위해 키 설정
            start={getStart && !showStart}
            paused={rest}
            setTimeUp={setTimeUp}
            duration={playConfig.playTime}
          />
          <GroupButton rest={rest} setRest={setRest} />
        </section>
      </main>
    </div>
  );
};

export default PlayPage;
