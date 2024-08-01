import { privateApi } from "@api/axios";
import { useQueries } from "@tanstack/react-query";

import Wrapper from "@commons/Wrapper";
import Banner from "@components/home/banner";
import ChallengeSection from "@components/home/challengeSection";
import Exercises from "@components/home/exercises";
import Header from "@components/home/Header";
import HotSection from "@components/home/HotSection";
import TurtleRank from "@components/home/turtleRank";
import WeekendSection from "@components/home/weekendSection";

export default function HomePage() {
  const results = useQueries({
    queries: [
      {
        queryKey: ["main"],
        queryFn: () =>
          privateApi
            .get("/mainpage/get-achievement-rate")
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
        <Header />
        <Banner guest={nicknameData.isError} />
        <Exercises />
        <div className="grid grid-cols-2 gap-6 px-6 mt-8">
          <HotSection />
          <TurtleRank />
        </div>
        <WeekendSection
          guest={weekendData.isError}
          exercises={weekendData?.data?.exercises}
        />
        <ChallengeSection />
      </div>
    </Wrapper>
  );
}
