import lockIcon from "@svgs/badge/lock.svg";
import { useNavigate } from "react-router-dom";

const BadgeCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center gap-3"
      onClick={() => navigate("active")}
    >
      <div className="flex items-center justify-center rounded-full shadow-lg w-24 h-24  bg-[#E8E7E7]">
        <img src={lockIcon} alt={lockIcon} />
      </div>
      <p className="text-sm text-text150">활동 배지</p>
    </div>
  );
};

export default BadgeCard;
