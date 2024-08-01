import { useState } from "react";
import { useParams } from "react-router-dom";

import TipSection from "@commons/TipSection";
import NameSection from "@components/exercise/NameSection";
import OptionFilter from "@components/exercise/OptionFilter";
import Navbar from "@layouts/Navbar";

const DetailExercisePage = () => {
  const { name: exercise } = useParams();
  const [showOption, setShowOption] = useState(false);

  const bgClasses = {
    squat: "bg-squat_detail",
    lunge: "bg-lunge_detail",
    pushup: "bg-pushup_detail",
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 w-full bg-black/60" />
      <div
        className={`absolute inset-0 w-full h-full bg-no-repeat bg-cover ${bgClasses[exercise]} z-0`}
      />
      <div className="relative z-20 flex flex-col h-full">
        <Navbar isWhite closed />
        <main className="flex flex-col justify-between flex-grow px-10 mt-10 mb-12">
          <TipSection desc="스쿼트는 자세 정확도에 따라 효과가 달라져요!" />
          <NameSection
            name={exercise}
            showOption={showOption}
            setShowOption={setShowOption}
          />
        </main>
        <div
          className={`border pb-10 absolute bottom-0 left-0 right-0 h-[65%] w-full rounded-t-xl bg-text50 ${
            showOption ? "block slide-up" : "hidden"
          }`}
        >
          <OptionFilter exercise={exercise} />
        </div>
      </div>
    </div>
  );
};

export default DetailExercisePage;
