import Wrapper from "@commons/Wrapper";

import Banner from "@components/home/banner";
import ChallengeSection from "@components/home/challengeSection";
// import Exercises from "@components/home/exercises";
import Header from "@components/home/Header";
import HotSection from "@components/home/HotSection";
// import TurtleRank from "@components/home/turtleRank";
import WeekendSection from "@components/home/weekendSection";

export default function HomePage() {
  return (
    <Wrapper>
      <div className="pb-20">
        <Header />
        <Banner />
        {/* <Exercises /> */}
        <div className="grid grid-cols-2 gap-6 px-6 mt-8">
          <HotSection />
          {/* <TurtleRank /> */}
        </div>
        <WeekendSection />
        <ChallengeSection />
      </div>
    </Wrapper>
  );
}
