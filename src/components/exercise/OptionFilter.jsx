import TabBar from "@svgs/exercise/tab-bar.svg";
import SelectOption from "./SelectOption";

const OptionFilter = ({ goPlayHandler, exercise }) => {
  const counts = Array.from({ length: 12 }, (_, i) => (i + 1) * 5 + "개");
  const minutes = Array.from({ length: 60 }, (_, i) => i + "분");
  const seconds = Array.from({ length: 60 }, (_, i) => i + "초");

  return (
    <div className="w-full h-full overflow-y-scroll">
      <div className="flex items-center justify-center">
        <img src={TabBar} alt="tab-bar" className="mt-6" />
      </div>
      <div className="flex flex-col justify-start px-10 mt-6">
        <p className="text-2xl font-semibold">옵션</p>
        <hr className="my-5" />
        <section className="flex flex-col gap-5">
          <SelectOption title="목표 개수" values={counts} />
          <SelectOption
            title="제한 시간"
            values={[minutes, seconds]}
            step={2}
          />
          <SelectOption
            title="쉬는 시간"
            values={[minutes, seconds]}
            step={3}
          />

          <p className="px-6 py-3 mt-4 border rounded-lg text-end border-orange2 text-text400 w-fit">
            이전 기록 보러가기
          </p>

          <button
            onClick={goPlayHandler(exercise)}
            className="text-text50 text-xl bg-orange2 rounded-[74px] w-full py-4 mt-10 font-semibold"
          >
            운동 시작하기
          </button>
        </section>
      </div>
    </div>
  );
};

export default OptionFilter;
