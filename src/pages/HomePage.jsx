import Wrapper from '@commons/Wrapper';

import Header from '@components/home/Header';
import Banner from '@components/home/banner';
import Exercises from '@components/home/exercises';

export default function HomePage() {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <Exercises />
    </Wrapper>
  );
}
