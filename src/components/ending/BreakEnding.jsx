import EffectText from "./EffectText";
import RatingCard from "./RatingCard";
import RecordTable from "./RecordTable";

const BreakEnding = ({ scoreArr }) => {
  // 기록 갱신했을 경우와 그렇지 못한 경우 boolean값을 변수로 받습니다.
  // 여기선 일단 임의의 변수로 프로세스 처리
  // isRank가 true라면 기록 갱신 처리
  // let isRank = true;

  // let content;

  // if (isRank) {
  //   content =
  // } else {
  //   content =
  // }

  return (
    <section className="relative text-center pb-96 text-text50">
      {/* 부수적인 css요소 들어갈 자리입니다. */}
      {/* <div className="absolute w-full h-32 bg-center bg-no-repeat bg-contain top-10 bg-opacity-10 bg-break_effect" /> */}
      <div className="absolute w-full h-32 bg-center bg-no-repeat bg-contain top-10 bg-opacity-10 bg-break_effect" />
      <EffectText text={scoreArr.length} isBreak={true} />
      <p className="absolute text-3xl right-10 top-32 font-GameNumber">1:00</p>
      <RatingCard scoreArr={scoreArr} />
      <div className="mt-8">
        <p className="font-semibold">축하합니다!</p>
        <p className="font-semibold">새로운 기록을 달성하셨군요!</p>
      </div>
      <div className="w-full px-10 mt-10 place-items-center text-text150">
        <RecordTable />
      </div>
    </section>
  );
};

export default BreakEnding;
