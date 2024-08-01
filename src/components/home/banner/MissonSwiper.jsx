import { publicApi } from "@api/axios";
import { useQuery } from "@tanstack/react-query";

import progress from "@images/progress.png";
import fire from "@svgs/fire.svg";
import rightArrow from "@svgs/right-arrow.svg";

const MissonSwiper = () => {
  const { data: mission } = useQuery({
    queryKey: ["mission"],
    queryFn: () =>
      publicApi
        .get("/mainpage/getTodayexercise")
        .then((response) => response.data),
  });

  let content;

  if (mission) {
    content = (
      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="mb-2 text-xs font-light text-text150">오늘의 미션</h1>
          <span className="flex items-center gap-1 text-2xl font-semibold text-text500">
            <img src={fire} alt="fire" />
            <p className="">{mission.exerciseName}</p>
          </span>
        </div>
        <img src={rightArrow} alt="right-arrow" />
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-2 px-6 pt-6 shadow-xl rounded-2xl">
      {content}
      <img src={progress} alt="dummy-progress" className="mb-8" />
      <div className="flex items-center justify-center w-full gap-1 text-3xl font-bold mini:text-4xl tablet:text-5xl font-English">
        <p className="text-outline-black">TODAY</p>
        <p className="text-text500">MISSION</p>
      </div>
    </section>
  );
};

export default MissonSwiper;
