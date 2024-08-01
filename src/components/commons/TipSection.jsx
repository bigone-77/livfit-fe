const TipSection = ({ desc }) => {
  return (
    <div className="px-6 py-2 w-full bg-[#F7ECD1] border rounded-xl flex items-center gap-6 text-sm">
      <p className="font-bold text-orange2">TIP!</p>
      <p className="text-[#595959] whitespace-nowrap">{desc}</p>
    </div>
  );
};

export default TipSection;
