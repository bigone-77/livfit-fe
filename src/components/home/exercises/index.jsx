import topSection from '@svgs/top-section.svg';
import bottomSection from '@svgs/bottom-section.svg';
import fire from '@svgs/fire.svg';

import SelectEx from './SelectEx';

const Exercises = () => {
  return (
    <section className="relative w-full border shadow-2xl h-80">
      <img
        src={topSection}
        alt="top-section"
        className="absolute top-0 left-0"
      />
      <img
        src={bottomSection}
        alt="bottom-section"
        className="absolute bottom-0 right-0"
      />
      <div className="px-8 mt-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img src={fire} alt="fire" />
            <p className="text-2xl text-text500">추천운동</p>
          </div>
          <p className="p-2 rounded-xl bg-yellow text-text300">
            전체 운동 보기
          </p>
        </div>
        <SelectEx />
      </div>
    </section>
  );
};

export default Exercises;
