import lunge from "@images/lunge.png";
import squart from "@images/squart.png";
import stretch from "@images/stretch.png";

const SelectEx = () => {
  return (
    <div className="flex overflow-x-auto scroll-smooth">
      <img src={lunge} alt="lunge" className="w-40 h-48 mr-2 shrink-0" />
      <img src={squart} alt="squart" className="w-40 h-48 mr-2 shrink-0" />
      <img src={stretch} alt="stretch" className="w-40 h-48 mr-2 shrink-0" />
    </div>
  );
};

export default SelectEx;
