const RowCard = ({ desc, point, accPoint }) => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-start gap-10">
        <p className="text-[#AFAFAF] text-sm">07.15</p>
        <div>
          <p className="text-lg text-text400">스쿼트 100개 달성</p>
          <p className="text-xs text-[#AFAFAF]">{desc}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-lg text-orange2">{point}P</p>
        <p className="text-xs text-[#AFAFAF]">{accPoint}P</p>
      </div>
    </section>
  );
};

export default RowCard;
