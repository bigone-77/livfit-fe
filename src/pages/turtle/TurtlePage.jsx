import fistImage from "@images/challenge/fist.png";
import { useNavigate } from "react-router-dom";

const TurtlePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <section className="bg-[#F6F6F6] px-6 pt-6">
        <p className="text-3xl">거북목 측정하기</p>
        <h1 className="mt-2 text-xs text-text200">
          챌린지를 달성할수록 업그레이드 된 배지를 획득할 수 있어요
        </h1>
        <button
          className="w-full h-[58px] rounded-[74px] bg-text200 mt-[60%] mb-10"
          onClick={() => navigate("/turtle/play")}
        >
          더미 측정 버튼
        </button>
      </section>

      <section className="px-6 my-2 bg-text50">
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
