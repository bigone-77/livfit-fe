import { useState } from "react";

import filledHeart from "@svgs/challenge/heart-fill.svg";
import heart from "@svgs/challenge/heart.svg";

const GroupButton = () => {
  const [onClick, setOnClick] = useState(false);
  return (
    <div className="flex items-center justify-between w-full">
      {onClick ? (
        <img
          src={filledHeart}
          alt="heart-fill"
          onClick={() => setOnClick(!onClick)}
          className="transition-all duration-150 ease-in-out"
        />
      ) : (
        <img
          src={heart}
          alt="heart"
          onClick={() => setOnClick(!onClick)}
          className="transition-all duration-150 ease-in-out"
        />
      )}
      <button className="w-[80%] px-6 py-4 text-text50 bg-orange2 rounded-xl">
        참여하기
      </button>
    </div>
  );
};

export default GroupButton;
