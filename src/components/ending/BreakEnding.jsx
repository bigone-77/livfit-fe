import { privateApi } from "@api/axios";
import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import EffectText from "./EffectText";
import RatingCard from "./RatingCard";
import RecordTable from "./RecordTable";

const BreakEnding = ({ scoreArr, subject, currentCount }) => {
  const [isBreak, setIsBreak] = useState(false);
  const {
    data: recordsRes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["exercise", subject],
    queryFn: () => privateApi("/records"),
  });

  let content;

  useEffect(() => {
    if (recordsRes) {
      let highestCount = recordsRes.data.reduce((max, record) => {
        return Math.max(max, record.count);
      }, 0);

      if (currentCount > highestCount) setIsBreak(true);
      else setIsBreak(false);
    }
  }, [recordsRes, currentCount]);

  if (isLoading) {
    content = <p>data loading...</p>;
  } else if (isError) {
    content = <p>data fetching error...</p>;
  } else if (recordsRes) {
    content = (
      <div className="w-full px-10 mt-10 place-items-center text-text150">
        <RecordTable records={recordsRes.data} />
      </div>
    );
  }

  return (
    <section className="relative w-full text-center text-text50">
      <div
        className={`absolute w-full h-32 bg-center bg-no-repeat bg-contain top-10 bg-opacity-10 ${
          isBreak ? "bg-break_effect" : "bg-no_break_effect"
        } `}
      />
      <EffectText text={scoreArr.length} isBreak={isBreak} />
      <p className="absolute text-3xl right-16 top-32 font-GameNumber">1:00</p>
      <RatingCard scoreArr={scoreArr} />
      <div className="mt-8">
        <p className="font-semibold">축하합니다!</p>
        <p className="font-semibold">새로운 기록을 달성하셨군요!</p>
      </div>
      {content}
    </section>
  );
};

export default BreakEnding;
