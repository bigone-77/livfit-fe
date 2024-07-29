import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { publicApi } from "@api/axios";

import Loader from "@components/commons/Loader";
import fistImage from "@images/challenge/fist.png";
import one from "@svgs/home/one.svg";
import three from "@svgs/home/three.svg";
import two from "@svgs/home/two.svg";

const TurtlePage = () => {
  const navigate = useNavigate();
  const {
    data: turtleRecords,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["turtle"],
    queryFn: () => publicApi("/api/turtle/all-records"),
  });

  let content;

  if (isLoading) {
    content = <Loader />;
  }

  if (isError) {
    content = <p>Network Error...</p>;
  }

  if (turtleRecords) {
    const sortedRecords = turtleRecords.data.sort((a, b) => b.score - a.score);
    content = (
      <div className="flex flex-col items-center gap-2 mt-4">
        <div className="flex items-center justify-between rounded-[46px] bg-[#FFE487] w-full px-8 py-3">
          <div className="flex items-center gap-4">
            <img src={one} alt="one" />
            <p>{sortedRecords[0].nickname}</p>
          </div>
          <p>{sortedRecords[0].score}</p>
        </div>
        <div className="flex items-center justify-between rounded-[46px] bg-[#FFECAD] w-full px-8 py-3">
          <div className="flex items-center gap-4">
            <img src={two} alt="two" />
            <p>{sortedRecords[1].nickname}</p>
          </div>
          <p>{sortedRecords[1].score}</p>
        </div>
        <div className="flex items-center justify-between rounded-[46px] bg-[#FFF2C6] w-full px-8 py-3">
          <div className="flex items-center gap-4">
            <img src={three} alt="three" />
            <p>{sortedRecords[2].nickname}</p>
          </div>
          <p>{sortedRecords[2].score}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full pb-24">
      <section className="px-6 pt-6 bg-text50">
        <p className="text-3xl">거북목 측정하기</p>
        <h1 className="mt-2 text-xs text-text200">
          거북목 정도를 측정해보고 친구랑 비교해보세요! 바른 자세 습관 기르는데
          도움이 되요
        </h1>
        <div className="flex items-center justify-center my-10">
          <div className="rounded-full w-80 h-80 bg-turtle" />
        </div>
        <button
          className="w-full h-[58px] rounded-[74px] bg-orange2 mb-10 text-text50 font-semibold"
          onClick={() => navigate("/turtle/play")}
        >
          측정하러가기
        </button>
      </section>

      <section className="px-6 py-2 bg-text90">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={fistImage} alt="fist-image" />
            <p className="text-xl">랭킹</p>
          </div>
          <p className="text-sm text-text200">전체 랭킹 확인하기</p>
        </div>
        {content}
      </section>
    </div>
  );
};

export default TurtlePage;
