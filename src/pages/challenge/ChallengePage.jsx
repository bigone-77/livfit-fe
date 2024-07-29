import Contents from "@components/challenge/Contents";
import Navbar from "@layouts/Navbar";

import chalText from "@images/challenge/chal.png";
import challengeText from "@images/challenge/challenge.png";
import lengeText from "@images/challenge/lenge.png";

import dots from "@svgs/challenge/dots.svg";

const ChallengePage = () => {
  return (
    <div className="w-full h-screen overflow-y-hidden">
      <header className="relative flex flex-col w-full gap-2 bg-no-repeat bg-contain bg-challenge">
        <Navbar isWhite closed />
        <img src={challengeText} className="h-20" />
        <img src={chalText} className="h-20 mr-60" />
        <img src={lengeText} className="h-20 ml-52" />
        <section className="absolute z-10 top-60 left-10 text-text50">
          <p className="text-3xl">챌린지</p>
          <h1 className="text-sm">
            사람들과 다같이 챌린지를 달성하여 습관을 만들어보세요!
          </h1>
        </section>
      </header>
      <div className="flex-1 h-full p-6 overflow-y-auto border -translate-y-6 rounded-tl-[32px] rounded-tr-[32px] shadow-lg bg-text50 pb-20">
        <div className="h-full overflow-y-scroll pb-60">
          <section className="flex items-center justify-between px-4 mb-4">
            <img src={dots} alt="dots" />
            <p className="px-6 py-2 font-semibold rounded-lg cursor-pointer bg-orange2 text-text50">
              내 챌린지 {">"}
            </p>
          </section>
          <Contents />
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
