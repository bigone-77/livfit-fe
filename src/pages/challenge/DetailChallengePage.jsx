import GroupButton from "@components/challenge/GroupButton";

const DetailChallengePage = () => {
  return (
    <div className="px-6 pt-6 bg-[#F6F6F6] h-full">
      <p className="text-3xl">하체 운동의 근본</p>
      <h1 className="mt-2 text-xs text-text200">
        챌린지를 달성할수록 업그레이드 된 배지를 획득할 수 있어요
      </h1>
      <section className="mt-10 border bg-text400 rounded-xl h-72" />

      <section className="flex items-start gap-10 mt-10 text-sm font-semibold">
        <p>기간</p>
        <div className="flex flex-col gap-2">
          <p>2024.08.01 - 2024.10.01</p>
          <p>주 2회</p>
        </div>
      </section>

      <section className="mt-20">
        <p className="text-sm font-semibold">모집중</p>
        <div className="mt-2 border bg-text150 rounded-xl h-60" />
      </section>

      <section className="mt-16">
        <GroupButton />
      </section>
    </div>
  );
};

export default DetailChallengePage;
