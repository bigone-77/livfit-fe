import Wrapper from "@commons/Wrapper";

import Header from "@components/home/Header";
import Banner from "@components/home/banner";
import Exercises from "@components/home/exercises";
import TurtleRank from "@components/home/turtleRank";

export default function HomePage() {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <Exercises />
      <TurtleRank />
    </Wrapper>
  );
}
