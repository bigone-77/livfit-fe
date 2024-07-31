const RecordSection = ({ itemSrc, name }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-1 py-2 cursor-pointer rounded-xl bg-text50">
      <img src={itemSrc} alt={itemSrc} />
      <p className="text-sm text-text200">{name}</p>
    </div>
  );
};

export default RecordSection;
