import { useNavigate } from "react-router-dom";

import RowCard from "@components/challenge/RowCard";

const ChallengeSection = ({ challenges }) => {
  const navigate = useNavigate();
  return (
    <section className="px-8 my-10">
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg text-text500">진행중인 챌린지 확인하기</p>
        <p
          className="mr-4 text-sm cursor-pointer text-text150 hover:opacity-50"
          onClick={() => navigate("/challenge")}
        >
          전체 보기
        </p>
      </div>
      <div className="flex w-full gap-4 overflow-x-auto scroll-smooth">
        {challenges &&
          challenges.map((challenge, index) => (
            <RowCard
              key={index}
              id={challenge.id}
              title={challenge.title}
              desc={challenge.description}
              start={challenge.startDate}
              end={challenge.endDate}
            />
          ))}
      </div>
    </section>
  );
};

export default ChallengeSection;
