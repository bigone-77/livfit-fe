import dummy from "@images/challenge/dummy.png";

const RowCard = ({ id, title, status }) => {
  return (
    <div className="bg-text50 rounded-[13px] flex items-center w-full border">
      <img src={dummy} alt="dummy" className="w-3/5 h-32" />
      <div className="w-2/5 p-4">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default RowCard;
