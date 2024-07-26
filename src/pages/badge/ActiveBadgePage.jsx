import { useNavigate } from "react-router-dom";

import BadgeStep from "@components/badge/BadgeStep";
import ProgressBar from "@components/badge/ProgressBar";
import RowCard from "@components/challenge/RowCard";

import fistImage from "@images/challenge/fist.png";

const ActiveBadgePage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 pt-6 bg-[#F6F6F6] h-full">
      <p className="text-3xl">활동 배지</p>
      <h1 className="mt-2 text-xs text-text200">
        챌린지를 달성할수록 업그레이드 된 배지를 획득할 수 있어요
      </h1>
      <BadgeStep />
      <ProgressBar step={4} />
      <button className="w-full py-3 font-semibold border-2 text-orange2 border-orange2 bg-text50 rounded-xl">
        배지 획득하러 가기
      </button>

      <article className="flex-1 py-4 mt-10 overscroll-y-auto scroll-smooth">
        <section
          className="flex items-center gap-2 mb-2"
          onClick={() => navigate("/challenge")}
        >
          <img src={fistImage} alt="fist-image" />
          <p className="text-xl">진행중인 챌린지 내역</p>
        </section>
        <section className="flex flex-col gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <RowCard key={index} />
          ))}
        </section>
      </article>
    </div>
  );
};

export default ActiveBadgePage;
