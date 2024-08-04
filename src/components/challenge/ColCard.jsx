import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import dummy from "@images/challenge/dummy.png";

const ColCard = ({ title, desc, start, end, freq, id }) => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col w-full gap-2 transition-all cursor-pointer hover:scale-95"
      onClick={() => navigate(`/challenge/${id}`)}
    >
      <img src={dummy} alt="dummy" />
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between w-full font-semibold">
          <p className="text-lg">{title}</p>
          <p className="flex items-center justify-center px-4 py-1 text-xs rounded-md bg-text125 text-text400">
            {freq}
          </p>
        </div>
        <p className="text-text400">{desc}</p>
        <p className="text-text150 text-">
          {format(new Date(start), "yyyy.MM.dd")}-
          {format(new Date(end), "yyyy.MM.dd")}
        </p>
      </div>
    </section>
  );
};

export default ColCard;
