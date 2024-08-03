import guestWeekend from "@images/blur-weekend.png";
import { useNavigate } from "react-router-dom";
import { parsedDay } from "../../../constants/parsedDay";
import DayCard from "./DayCard";

const WeekendSection = ({ exercises }) => {
  const navigate = useNavigate();
  return (
    <section className="relative px-6 mt-10">
      {!exercises ? (
        <>
          <img src={guestWeekend} alt="guestWeekend" className="blur-sm" />
          <button
            className="absolute px-8 py-1 mt-2 transition-all border-2 top-1/3 left-1/3 border-orange2 text-text400 bg-text50 rounded-xl hover:opacity-50"
            onClick={() => navigate("/auth/login")}
          >
            로그인 하러가기
          </button>
        </>
      ) : (
        <div className="flex flex-col p-6 transition-all cursor-pointer rounded-2xl bg-text50 hover:scale-105">
          <div className="flex justify-between itesm-center">
            <p className="text-lg text-text500">이번주 운동 달성률</p>
            <p className="text-sm text-text150">자세히 보기</p>
          </div>
          <div className="grid w-full grid-cols-7 gap-2 my-4 place-items-center">
            {exercises.map((exercise, index) => (
              <DayCard
                key={index}
                day={parsedDay(exercise.dayOfWeek)}
                status={exercise.status}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default WeekendSection;
