import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { privateApi } from "@api/axios";

import FilterModal from "@components/profile/FilterModal";
import RecordsTable from "@components/profile/RecordsTable";
import SelectEx from "@components/profile/SelectEx";

import Navbar from "@layouts/Navbar";

import dots from "@svgs/profile/color-dots.svg";
import { getFilteredRecordsData } from "@utils/getFilteredRecordsData";

const MyRecordsPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState("squat");
  const [selectedSort, setSelectedSort] = useState("최신순");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [recordsData, setRecordsData] = useState([]);

  const results = useQueries({
    queries: [
      {
        queryKey: ["exercise", "profile", selectedExercise],
        queryFn: () =>
          privateApi
            .get(`/${selectedExercise}/get_my_record`)
            .then((res) => res.data),
      },
      {
        queryKey: ["exercise", "profile", "graph", selectedExercise],
        queryFn: () =>
          privateApi.get(`/${selectedExercise}/graph`).then((res) => res.data),
      },
    ],
  });

  const [records, graphs] = results;

  console.log(graphs.data);

  useEffect(() => {
    if (records.data && !showGraph) {
      const filteredData = getFilteredRecordsData(
        records.data,
        selectedSort,
        selectedTerm
      );
      setRecordsData(filteredData);
    }
  }, [records.data, showGraph, selectedSort, selectedTerm]);

  let content;

  if (recordsData.length === 0) {
    content = <p>측정된 운동 기록이 없습니다.</p>;
  } else {
    content = (
      <section className="overflow-y-scroll scroll-smooth h-80">
        <RecordsTable records={recordsData} />
      </section>
    );
  }

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
      {content}
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
