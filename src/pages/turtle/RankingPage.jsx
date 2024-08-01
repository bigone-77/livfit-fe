import { publicApi } from "@api/axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";

import Navbar from "@layouts/Navbar";

import RankTower from "@components/turtle/RankTower";
import RowRank from "@components/turtle/RowRank";
import rankingText from "@images/turtle/ranking.png";

const RankingPage = () => {
  const [clickAll, setClickAll] = useState(true);
  const currentDateFormat = format(new Date(), "yyyy-MM-dd");
  const { data: records } = useQuery({
    queryKey: ["turtle"],
    queryFn: () =>
      publicApi("/turtle/all-records").then((response) => {
        return response.data;
      }),
  });

  // const { data } = useQuery({
  //   queryKey: ["myTurtle"],
  //   queryFn: () => privateApi.get("/turtle/my-records"),
  // });

  // console.log(data);

  if (records.length > 3) {
    return (
      <div className="w-full h-full overflow-y-auto">
        <header className="relative flex flex-col w-full gap-2 bg-[#FFCA68] bg-opacity-20">
          <Navbar />
          <img src={rankingText} alt="rank-text" className="h-28" />
          <img src={rankingText} alt="rank-text" className="mr-20 h-28" />
          <img src={rankingText} alt="rank-text" className="ml-20 h-28" />
          <section className="absolute z-10 w-full px-8 top-20">
            <p className="text-2xl text-text400">랭킹</p>
            <h1 className="text-xs text-text200">랭킹을 확인해보세요!</h1>
            <RankTower data={records.sort((a, b) => b.score - a.score)} />
          </section>
        </header>
        <main className="w-full h-full">
          <section className="grid grid-cols-2 shadow-lg place-items-center bg-text50">
            <p
              className={`w-full py-4 text-center border-b-4 cursor-pointer ${
                clickAll && "border-b-orange2"
              }`}
              onClick={() => setClickAll(true)}
            >
              오늘
            </p>
            <p
              className={`w-full py-4 text-center border-b-4 cursor-pointer ${
                !clickAll && "border-b-orange2"
              }`}
              onClick={() => setClickAll(false)}
            >
              전체
            </p>
          </section>

          <section className="flex flex-col pb-20 overflow-scroll bg-text75 h-96">
            {(clickAll
              ? records.filter(
                  (record) => record.localDate === currentDateFormat
                )
              : records
            )
              .slice(3)
              .map((record, index) => (
                <RowRank key={index} data={record} seq={index + 4} />
              ))}
          </section>
        </main>
      </div>
    );
  }
};

export default RankingPage;
