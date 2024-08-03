import { useQueries } from "@tanstack/react-query";

import { privateApi } from "@api/axios";

import Contents from "@components/badge/Contents";
import Header from "@components/badge/Header";
import { useState } from "react";

const BadgePage = () => {
  const [selectedBadge, setSelectedBadge] = useState("성공 배지");
  const results = useQueries({
    queries: [
      {
        queryKey: ["profile", "badge"],
        queryFn: () =>
          privateApi
            .get("/mypage/badges/main")
            .then((response) => response.data),
      },
      {
        queryKey: ["profile", "myBadge"],
        queryFn: () =>
          privateApi
            .get("/userbadges/mybadge")
            .then((response) => response.data),
      },
    ],
  });

  const [mainBadge, allBadges] = results;

  let content;

  if (mainBadge.data && allBadges.data && allBadges.data.length > 0) {
    content = (
      <>
        <header className="w-full bg-badge bg-badge_color bg-opacity-[0.12] px-6">
          <Header
            mainBadge={mainBadge.data}
            badgeCount={allBadges.data.length || 0}
            hasBadges={allBadges.data.map((badge) => {
              return badge.badgeId;
            })}
          />
        </header>
        <div className="h-8 rounded-t-[32px] border-t w-full bg-[#F6F6F6] -translate-y-3" />
        <div className="w-full h-full p-6 overflow-y-hidden bg-[#F6F6F6]">
          <div className="h-full overflow-y-scroll">
            <Contents
              selected={selectedBadge}
              setSelected={setSelectedBadge}
              badges={allBadges.data.map((badge) => {
                return badge.badgeId;
              })}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="max-w-[500px] w-full h-screen overflow-y-hidden flex flex-col">
      {content}
    </div>
  );
};

export default BadgePage;
