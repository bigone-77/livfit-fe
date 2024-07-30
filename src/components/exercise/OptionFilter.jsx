import { useState } from "react";
import { useDispatch } from "react-redux";

import { setPlay } from "@redux/slices/playSlice";

import SelectOption from "./SelectOption";

import TabBar from "@svgs/exercise/tab-bar.svg";
import { useNavigate } from "react-router-dom";

const countsArr = Array.from({ length: 12 }, (_, i) => (i + 1) * 5 + "개");
const minutesArr = Array.from({ length: 60 }, (_, i) => i + "분");
const secondsArr = Array.from({ length: 60 }, (_, i) => i + "초");

const OptionFilter = ({ exercise }) => {
  const navigate = useNavigate();
  const [goalCount, setGoalCount] = useState(0);
  const [playMinutes, setPlayMinutes] = useState("0분");
  const [playSeconds, setPlaySeconds] = useState("0초");
  const [restSeconds, setRestSeconds] = useState("0초");

  const dispatch = useDispatch();

  const handleStartClick = () => {
    const playTime = `${playMinutes} ${playSeconds}`;
    const restTime = `${restSeconds}`;
    dispatch(setPlay({ goalCount, playTime, restTime }));
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        navigate(`/play/${exercise}`);
      })
      .catch((error) => {
        console.error("Error accessing webcam: ", error);
      });
  };

  return (
    <div className="w-full h-full overflow-y-scroll">
      <div className="flex items-center justify-center">
        <img src={TabBar} alt="tab-bar" className="mt-6" />
      </div>
      <div className="flex flex-col justify-start px-10 mt-6">
        <p className="text-2xl font-semibold">옵션</p>
        <hr className="my-5" />
        <section className="flex flex-col gap-5">
          <SelectOption
            title="목표 개수"
            values={countsArr}
            onChange={(e) => setGoalCount(e.target.value)}
          />
          <SelectOption
            title="쉬는 시간"
            values={secondsArr}
            onChange={(e) => setRestSeconds(e.target.value)}
          />
          <SelectOption
            title="제한 시간"
            values={[minutesArr, secondsArr]}
            step={3}
            onMinutesChange={(e) => setPlayMinutes(e.target.value)}
            onSecondsChange={(e) => setPlaySeconds(e.target.value)}
          />

          <p className="px-6 py-3 mt-4 border rounded-lg text-end border-orange2 text-text400 w-fit">
            이전 기록 보러가기
          </p>

          <button
            onClick={handleStartClick}
            className="text-text50 text-xl bg-orange2 rounded-[74px] w-full py-4 mt-10 font-semibold"
          >
            운동 시작하기
          </button>
        </section>
      </div>
    </div>
  );
};

export default OptionFilter;
