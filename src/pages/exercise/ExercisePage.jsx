import ExerciseCard from "@components/exercise/ExerciseCard";

const ExercisePage = () => {
  return (
    <div className="px-6 pt-6 bg-[#F6F6F6] h-full">
      <p className="text-3xl">운동 측정하기</p>
      <h1 className="mt-2 text-xs text-text200">
        챌린지를 달성할수록 업그레이드 된 배지를 획득할 수 있어요
      </h1>
      <section className="flex flex-col w-full gap-4 mt-6 overflow-y-auto scroll-smooth">
        <ExerciseCard exercise="squat" />
        <ExerciseCard exercise="lunge" />
        <ExerciseCard exercise="pushup" />
      </section>
    </div>
  );
};

export default ExercisePage;
