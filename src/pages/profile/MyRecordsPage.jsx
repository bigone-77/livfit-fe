import { useState } from "react";

import FilterModal from "@components/profile/FilterModal";
import SelectEx from "@components/profile/SelectEx";
import ShowAllRecords from "@components/profile/ShowAllRecords";
import ShowGraphRecords from "@components/profile/ShowGraphRecords";

import Navbar from "@layouts/Navbar";

import dots from "@svgs/profile/color-dots.svg";

const MyRecordsPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showGraph, setShowGraph] = useState(false);

  const [selectedExercise, setSelectedExercise] = useState("squat");
  const [selectedSort, setSelectedSort] = useState("최신순");
  const [selectedTerm, setSelectedTerm] = useState("");

  return (
    <div className="relative w-full h-full pb-20 bg-text90">
      <Navbar closed />
      <section className="p-6">
        <p className="text-3xl">내 기록</p>
        <h1 className="mt-2 text-xs text-text200">
          현재까지 달성한 챌린지 모두를 확인할 수 있어요
        </h1>
      </section>
      <section className="grid w-full grid-cols-2 place-items-center">
        <p
          className={`w-full py-4 text-center border-b-4 cursor-pointer ${
            !showGraph ? "border-b-orange2" : "border-b-[#DFDFDF]"
          }`}
          onClick={() => setShowGraph(false)}
        >
          모두
        </p>
        <p
          className={`w-full py-4 text-center border-b-4 cursor-pointer ${
            showGraph ? "border-b-orange2" : "border-b-[#DFDFDF]"
          } text-text200`}
          onClick={() => setShowGraph(true)}
        >
          변화 그래프
        </p>
      </section>

      <section className="grid grid-cols-3 px-2 pt-6 place-items-center">
        <SelectEx
          name="squat"
          selected={selectedExercise === "squat"}
          setSelected={setSelectedExercise}
        />
        <SelectEx
          name="lunge"
          selected={selectedExercise === "lunge"}
          setSelected={setSelectedExercise}
        />
        <SelectEx
          name="pushup"
          selected={selectedExercise === "pushup"}
          setSelected={setSelectedExercise}
        />
      </section>
      <div
        className="flex items-center justify-end w-full py-6 pr-6 cursor-pointer"
        onClick={() => setShowFilter(true)}
      >
        <img src={dots} alt="dots" />
      </div>
      {!showGraph ? (
        <ShowAllRecords
          exercise={selectedExercise}
          sort={selectedSort}
          term={selectedTerm}
        />
      ) : (
        <ShowGraphRecords exercise={selectedExercise} />
      )}
      {showFilter && (
        <FilterModal
          modalOpen={showFilter}
          setModalOpen={setShowFilter}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          selectedTerm={selectedTerm}
          setSelectedTerm={setSelectedTerm}
        />
      )}
    </div>
  );
};

export default MyRecordsPage;
