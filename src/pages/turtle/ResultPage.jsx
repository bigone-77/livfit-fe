import { format } from "date-fns";
import { useSelector } from "react-redux";

import TipSection from "@commons/TipSection";
import EffectText from "@components/commons/EffectText";
import GroupButton from "@components/turtle/GroupButton";
import Navbar from "@layouts/Navbar";

const ResultPage = () => {
  const score = useSelector((state) => state.turtle.angle);

  return (
    <div className="flex flex-col items-center w-full h-full overflow-auto bg-black">
      <Navbar closed turtle={format(new Date(), "yyyy-MM-dd")} />
      <section className="relative w-full mt-10 text-center text-text50">
        <div className="absolute z-10 w-full h-40 bg-center bg-no-repeat bg-cover top-10 bg-turtle_effect" />
        <EffectText text={score} turtle />
        <div className="px-8 mb-10">
          <p className="mb-2 font-semibold">오늘의 거북목 측정결과입니다!</p>
          <p className="mb-12 font-semibold">
            수시로 측정하여 바른 자세를 유지해보세요!
          </p>
          <TipSection
            tipColor="#00D26A"
            bgColor="#FFFFFF"
            desc="거북목 측정할때는 사진을 찍어야 해요!"
          />
        </div>
        <div className="w-full pb-10 mt-20">
          <GroupButton />
        </div>
      </section>
    </div>
  );
};

export default ResultPage;
