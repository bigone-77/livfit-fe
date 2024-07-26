import { useNavigate } from "react-router-dom";
import JoinPeopleCard from "./JoinPeopleCard";

const ColCard = () => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col w-full gap-2"
      onClick={() => navigate("3")}
    >
      <div className="w-full rounded-[10px] h-36 border relative">
        <div className="absolute top-2 left-2">
          <JoinPeopleCard />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between w-full font-semibold">
          <p className="text-lg">하체 운동의 근본</p>
          <p className="flex items-center justify-center p-1 text-xs rounded-md bg-text125 text-text400">
            2달간 주 1회
          </p>
        </div>
        <p className="text-text400">스쿼트 하기</p>
        <p className="text-text150 text-">2024.08.01-2024.10.01</p>
      </div>
    </section>
  );
};

export default ColCard;
