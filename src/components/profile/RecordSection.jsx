import { useNavigate } from "react-router-dom";

const RecordSection = ({ itemSrc, name, url }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${url}`)}
      className="flex flex-col items-center justify-center w-full gap-1 py-2 cursor-pointer rounded-xl bg-text50"
    >
      <img src={itemSrc} alt={itemSrc} />
      <p className="text-sm text-text200">{name}</p>
    </div>
  );
};

export default RecordSection;
