import lockIcon from "@svgs/badge/lock.svg";
import nextArrow from "@svgs/right-arrow.svg";

const BadgeStep = () => {
  return (
    <div className="flex items-center justify-center gap-2 my-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-20 h-20 border rounded-full mini:w-24 mini:h-24 bg-text125" />
        <p className="text-text200">고양이 기운</p>
      </div>

      <img src={nextArrow} alt="next-arrow" />

      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-32 h-32 border-[6px] rounded-full mini:w-36 mini:h-36 border-orange2" />
        <p className="text-xl text-orange2">호랑이 기운</p>
      </div>

      <img src={nextArrow} alt="next-arrow" />

      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center w-20 h-20 border rounded-full mini:w-24 mini:h-24 bg-text125">
          <img src={lockIcon} alt={lockIcon} />
        </div>
        <p className="text-text200">잠금</p>
      </div>
    </div>
  );
};

export default BadgeStep;
