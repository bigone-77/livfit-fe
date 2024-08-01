import EffectText from "@components/commons/EffectText";
import Navbar from "@layouts/Navbar";

const ResultPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen overflow-auto bg-black">
      <Navbar closed turtle="2024.08.01" />
      <section className="relative w-full mt-10 text-center text-text50">
        <div className="absolute z-10 w-full h-40 bg-center bg-no-repeat bg-cover top-10 bg-turtle_effect" />
        <EffectText text={53} turtle />
        <p className="absolute text-5xl left-[43%] bottom-20 font-GameNumber">
          40˚
        </p>

        <div className="my-8">
          <p className="mb-2 font-semibold">오늘의 거북목 측정결과입니다!</p>
          <p className="font-semibold">
            수시로 측정하여 바른 자세를 유지해보세요!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResultPage;
