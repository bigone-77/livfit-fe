import Wrapper from "@commons/Wrapper";

import Header from "@components/home/Header";
import Banner from "@components/home/banner";
import Exercises from "@components/home/exercises";
import TurtleRank from "@components/home/turtleRank";

export default function HomePage() {
  return (
    <Wrapper>
      <div className="pb-20">
        <Header />
        <Banner />
        <Exercises />
        <TurtleRank />
      </div>
    </Wrapper>
  );
}
