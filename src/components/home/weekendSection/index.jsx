import guestWeekend from "@images/blur-weekend.png";
import { parsedDay } from "../../../constants/parsedDay";
import DayCard from "./DayCard";

const WeekendSection = ({ exercises }) => {
  return (
    <section className="px-6 mt-10">
      {!exercises ? (
        <img src={guestWeekend} alt="guestWeekend" className="blur-sm" />
      ) : (
        <div className="flex flex-col p-6 rounded-2xl bg-text50">
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
