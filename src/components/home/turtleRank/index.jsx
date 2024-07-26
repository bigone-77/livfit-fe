import { format } from "date-fns/format";
import { ko } from "date-fns/locale/ko";

import nextArrow from "@svgs/next-arrow.svg";
import Rankings from "./Rankings";

const TurtleRank = () => {
  return (
    <section className="px-8 mt-10">
      <div className="p-4 border rounded-xl bg-text50">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-text150">
              {format(new Date(), "yyyy.MM.dd", { locale: ko })}
            </p>
            <h1 className="text-lg">오늘의 거북목 랭킹</h1>
          </div>
          <img src={nextArrow} alt="next-arrow" />
        </div>

        <Rankings />
      </div>
    </section>
  );
};

export default TurtleRank;
