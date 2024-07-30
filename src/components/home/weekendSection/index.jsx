import DayCard from "./DayCard";

const DUMMY_DATA = [
  {
    id: 0,
    day: "일",
    rate: 100,
  },
  {
    id: 1,
    day: "월",
    rate: 100,
  },
  {
    id: 2,
    day: "화",
    rate: 60,
  },
  {
    id: 3,
    day: "수",
    rate: 0,
  },
  {
    id: 4,
    day: "목",
    rate: 0,
  },
  {
    id: 5,
    day: "금",
    rate: 0,
  },
  {
    id: 6,
    day: "토",
    rate: 0,
  },
];

const WeekendSection = () => {
  return (
    <section className="px-6 mt-10">
      <div className="flex flex-col p-6 rounded-2xl bg-text50">
        <div className="flex justify-between itesm-center">
          <p className="text-lg text-text500">이번주 운동 달성률</p>
          <p className="text-sm text-text150">자세히 보기</p>
        </div>
        <div className="grid w-full grid-cols-7 gap-2 my-4 place-items-center">
          {DUMMY_DATA.map((data, index) => (
            <DayCard key={index} day={data.day} rate={data.rate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeekendSection;
