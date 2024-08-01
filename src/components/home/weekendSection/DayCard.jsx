import whiteChecked from "@svgs/white-checked.svg";

const DayCard = ({ day, isSuccess }) => {
  return (
    <div className="flex flex-col items-center gap-2 font-semibold">
      <div>
        <span className="text-text200">{day}</span>
      </div>
      <div className="relative w-12 h-12 rounded-full bg-orange2">
        {isSuccess && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={whiteChecked} alt="checked" />
          </div>
        )}
      </div>
      <p className="text-sm text-text150">{isSuccess ? "완료" : "도전"}</p>
    </div>
  );
};

export default DayCard;
