import camera from "@svgs/camera.svg";

import SelectEx from "./SelectEx";

const Exercises = () => {
  return (
    <div className="px-8 mt-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img src={camera} alt="camera" className="mb-2" />
          <p className="text-lg text-text500">
            혼자서도 정확하게! AI로 운동하기
          </p>
        </div>
        <p className="mr-4 text-sm text-text150">전체 보기</p>
      </div>
      <SelectEx />
    </div>
  );
};

export default Exercises;
