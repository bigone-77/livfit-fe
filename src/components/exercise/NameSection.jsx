import { parsedPlay } from "@constants/parsedPlay";

const NameSection = ({ name, showOption, setShowOption }) => {
  return (
    <div className="relative flex flex-col gap-2">
      <h1 className="text-2xl font-semibold text-text50">{parsedPlay(name)}</h1>
      <h2 className="uppercase text-8xl font-English text-orange2">{name}</h2>
      <h3 className="text-text100">
        허벅지 근육과 엉덩이 근육을 탄탄하게 만들어 주며 전반적인 체형 개선
      </h3>
      <button
        className={`${
          showOption ? "text-text50" : "text-[#313131]"
        } text-xl bg-text50 rounded-[74px] w-full py-4 mt-10 font-semibold`}
        onClick={() => setShowOption(!showOption)}
      >
        옵션 선택하기
      </button>
    </div>
  );
};

export default NameSection;
