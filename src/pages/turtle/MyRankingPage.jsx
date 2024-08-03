import { privateApi, publicApi } from "@api/axios";
import { useQueries } from "@tanstack/react-query";

import Navbar from "@layouts/Navbar";
import RecordsTable from "../../components/turtle/RecordsTable";

const MyRankingPage = () => {
  const results = useQueries({
    // TODO: 전체 거북목 기록과 접속한 회원의 닉네임을 얻자 queries로
    queries: [
      {
        queryKey: ["turtle", "records"],
        queryFn: () =>
          publicApi
            .get("/turtle/all-records")
            .then((response) => response.data),
      },
      {
        queryKey: ["nickname"],
        queryFn: () =>
          privateApi.get("/mainpage/getname").then((response) => response.data),
      },
    ],
  });

  const [allRecords, nickname] = results;

  return (
    <div className="relative w-full h-full pb-20 bg-text90">
      <Navbar closed />
      <section className="p-6">
        <p className="text-3xl">내 거북목 기록</p>
        <h1 className="mt-2 text-xs text-text200">
          현재까지 달성한 챌린지 모두를 확인할 수 있어요
        </h1>
      </section>
      <section className="overflow-y-scroll scroll-smooth h-80">
        {nickname.data && allRecords.data && allRecords.data.length > 0 && (
          <RecordsTable
            records={allRecords.data.filter(
              (record) => record.nickname === nickname.data
            )}
          />
        )}
      </section>
    </div>
  );
};

export default MyRankingPage;
