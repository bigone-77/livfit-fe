import lunge from "@images/lunge.png";
import pushup from "@images/pushup.png";
import squat from "@images/squat.png";

const SelectEx = () => {
  return (
    <div className="flex overflow-x-auto scroll-smooth">
      <img src={lunge} alt="lunge" className="w-40 h-48 mr-2 shrink-0" />
      <img src={squat} alt="squat" className="w-40 h-48 mr-2 shrink-0" />
      <img src={pushup} alt="pushup" className="w-40 h-48 mr-2 shrink-0" />
    </div>
  );
};

export default SelectEx;
