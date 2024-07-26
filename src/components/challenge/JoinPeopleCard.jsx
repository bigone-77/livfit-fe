import people from "@svgs/challenge/people.svg";

const JoinPeopleCard = () => {
  return (
    <div className="p-1 flex items-center justify-center bg-[#585858] bg-opacity-50 rounded-md gap-1">
      <img src={people} alt="people" />
      <p className="text-[10px] text-text50">161명</p>
    </div>
  );
};

export default JoinPeopleCard;
