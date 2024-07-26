import fire from "@svgs/fire.svg";

import SelectEx from "./SelectEx";

const Exercises = () => {
  return (
    <div className="px-8 mt-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img src={fire} alt="fire" />
          <p className="text-xl text-text500">LIVFIT에서 지금 뜨는 운동</p>
        </div>
        <p className="mr-4 text-sm text-text150">전체 보기</p>
      </div>
      <SelectEx />
    </div>
  );
};

export default Exercises;
