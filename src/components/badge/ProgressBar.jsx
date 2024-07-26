import BallonText from "./BallonText";

const ProgressBar = ({ step }) => {
  const totalSteps = 7;
  const progressWidth = (step / totalSteps) * 100;

  return (
    <div className="relative w-full my-16">
      <div
        className="absolute -top-10"
        style={{
          left: `calc(${progressWidth}% - 50px)`,
        }}
      >
        <BallonText>챌린지 4회 달성</BallonText>
      </div>
      <div className="w-full h-4 rounded-[51px] bg-[#FFF0C9] overflow-hidden">
        <section
          className="h-4 p-0 rounded-[51px] bg-orange2 transition-all duration-500 ease-in-out"
          style={{
            width: `${progressWidth}%`,
          }}
        />
      </div>
      <section className="relative flex items-center justify-between mt-4">
        <p className="text-sm font-semibold">호랑이 기운</p>
        <p className="text-xs text-text150">
          다음 단계로 이동하려면 3회 남았어요!
        </p>
        <p className="text-sm font-semibold">???</p>
      </section>
    </div>
  );
};

export default ProgressBar;
