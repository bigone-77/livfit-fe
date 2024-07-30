import whiteChecked from "@svgs/white-checked.svg";

const DayCard = ({ day, rate }) => {
  const percentage = rate / 100;
  const angle = 360 * percentage;

  return (
    <div className="flex flex-col items-center gap-2 font-semibold">
      <div>
        <span className="text-text200">{day}</span>
      </div>
      <div
        className="relative w-12 h-12 rounded-full"
        style={{
          background: `conic-gradient(#FB8500 ${angle}deg, #F2F2F2 ${angle}deg)`,
        }}
      >
        {rate === 100 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={whiteChecked} alt="checked" />
          </div>
        )}
      </div>
      <p className="text-sm text-text150">{rate}%</p>
    </div>
  );
};

export default DayCard;
