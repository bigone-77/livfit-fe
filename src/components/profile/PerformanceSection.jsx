import medalSrc from "@svgs/profile/medal.svg";
import pointSrc from "@svgs/profile/point.svg";
import arrow from "@svgs/small-right-arrow.svg";

const PerformanceSection = ({ point, badgeSum }) => {
  return (
    <section className="p-6 rounded-xl bg-text50">
      <p>나의 실적</p>
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={pointSrc} alt="point" />
            <p>보유 포인트</p>
          </div>
          <div className="flex items-center gap-2">
            <p>{point}P</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <hr className="my-3 text-text400 opacity-90" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={medalSrc} alt="medal" />
            <p>보유한 뱃지 개수</p>
          </div>
          <div className="flex items-center gap-2">
            <p>{badgeSum}개</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
