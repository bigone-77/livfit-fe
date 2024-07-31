import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { privateApi } from "@api/axios";

import Header from "@components/profile/Header";
import PerformanceSection from "@components/profile/PerformanceSection";
import RecordSection from "@components/profile/RecordSection";

import RowCard from "@components/challenge/RowCard";

import chartSrc from "@svgs/profile/chart.svg";
import memoSrc from "@svgs/profile/memo.svg";
import turtleSrc from "@svgs/profile/turtle.svg";
import vSrc from "@svgs/profile/v-hand.svg";
import arrow from "@svgs/small-right-arrow.svg";

const ProfilePage = () => {
  const navigate = useNavigate();

  const { data: main } = useQuery({
    queryKey: ["main"],
    queryFn: async () => {
      try {
        await privateApi.get("/mypage").then((res) => res.data);
      } catch (error) {
        navigate("/");
      }
    },
  });

  let content;

  if (main) {
    content = (
      <>
        <div className="px-8 pb-10">
          <Header nickname={main.nickname} />
          <section className="grid grid-cols-3 gap-2 mt-6 mb-4">
            <RecordSection itemSrc={memoSrc} name="운동 기록" />
            <RecordSection itemSrc={turtleSrc} name="거북목 측정 기록" />
            <RecordSection itemSrc={chartSrc} name="미션 연속 달성 기록" />
          </section>
          <PerformanceSection
            point={main.totalPoints}
            badgeSum={main.badgeCount}
          />
        </div>
        <section className="w-full h-full px-8 pb-20 bg-text50">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <img src={vSrc} alt="v-hand" />
              <p>참여중인 챌린지</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-text150">전체보기</p>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="flex flex-col gap-4 overflow-scroll h-60 scroll-smooth">
            {main.challengeEntities.map((challenge, index) => (
              <RowCard key={index} />
            ))}
          </div>
        </section>
      </>
    );
  }

  return <div className="relative w-full h-full bg-text90">{content}</div>;
};

export default ProfilePage;
