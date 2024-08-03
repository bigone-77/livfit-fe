import RowCard from "@components/challenge/RowCard";

const ChallengeSection = () => {
  return (
    <section className="px-8 my-10">
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg text-text500">진행중인 챌린지 확인하기</p>
        <p className="mr-4 text-sm cursor-pointer text-text150 hover:opacity-50">
          전체 보기
        </p>
      </div>
      <div className="flex overflow-x-auto scroll-smooth">
        <RowCard />
      </div>
    </section>
  );
};

export default ChallengeSection;
