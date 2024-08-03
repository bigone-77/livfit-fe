import lunge from "@images/lunge.png";
import pushup from "@images/pushup.png";
import squat from "@images/squat.png";

const SelectEx = () => {
  return (
    <div className="flex overflow-x-auto scroll-smooth">
      <img
        src={lunge}
        alt="lunge"
        className="w-40 h-48 mr-2 transition-all cursor-pointer shrink-0 hover:scale-95"
      />
      <img
        src={squat}
        alt="squat"
        className="w-40 h-48 mr-2 transition-all cursor-pointer shrink-0 hover:scale-95"
      />
      <img
        src={pushup}
        alt="pushup"
        className="w-40 h-48 mr-2 transition-all cursor-pointer shrink-0 hover:scale-95"
      />
    </div>
  );
};

export default SelectEx;
