import { useNavigate } from "react-router-dom";

import fistImage from "@images/challenge/fist.png";

const TurtlePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center h-full pb-20">
      <section className="px-6 pt-6 bg-text50">
        <p className="text-3xl">거북목 측정하기</p>
        <h1 className="mt-2 text-xs text-text200">
          거북목 정도를 측정해보고 친구랑 비교해보세요! 바른 자세 습관 기르는데
          도움이 되요
        </h1>
        <div className="rounded-full w-80 h-80 bg-turtle" />
        <button
          className="w-full h-[58px] rounded-[74px] bg-text200 mb-10"
          onClick={() => navigate("/turtle/play")}
        >
          더미 측정 버튼
        </button>
      </section>

      <section className="px-6 py-2 bg-text50">
        <div className="flex items-center gap-2">
          <img src={fistImage} alt="fist-image" />
          <p className="text-xl">랭킹</p>
        </div>
        <div className="flex flex-col items-center gap-2 mt-4">
          <button className="w-full h-[58px] rounded-[74px] bg-text200"></button>
          <button className="w-full h-[58px] rounded-[74px] bg-text200"></button>
          <button className="w-full h-[58px] rounded-[74px] bg-text200"></button>
        </div>
      </section>
    </div>
  );
};

export default TurtlePage;
