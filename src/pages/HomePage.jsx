import { privateApi } from "@api/axios";
import { useQueries } from "@tanstack/react-query";

import Wrapper from "@commons/Wrapper";
import Banner from "@components/home/banner";
import ChallengeSection from "@components/home/challengeSection";
import Exercises from "@components/home/exercises";
import Header from "@components/home/Header";
import HotSection from "@components/home/HotSection";
import TodayMission from "@components/home/TodayMission";
import TurtleRank from "@components/home/turtleRank";
import WeekendSection from "@components/home/weekendSection";

export default function HomePage() {
  const results = useQueries({
    queries: [
      {
        queryKey: ["weekend"],
        queryFn: () =>
          privateApi
            .get("/mainpage/week-status")
            .then((response) => response.data),
      },
      {
        queryKey: ["nickname"],
        queryFn: () =>
          privateApi.get("/mainpage/getname").then((response) => response.data),
      },
    ],
  });

  const [weekendData, nicknameData] = results;

  return (
    <Wrapper>
      <div className="pb-20">
        <Header isCurrentUser={nicknameData?.data} />
        <Banner nickname={nicknameData?.data} />
        <Exercises />
        <div className="grid grid-cols-2 gap-6 px-6 mt-8">
          <HotSection />
          <TurtleRank />
        </div>

        <div className="pt-10 mx-8">
          <TodayMission />
        </div>

        <WeekendSection exercises={weekendData?.data} />
        <ChallengeSection />
      </div>
    </Wrapper>
  );
}
