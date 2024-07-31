const ItemCard = () => {
  return (
    <section className="flex flex-col gap-1">
      <div className="h-48 w-52 rounded-xl bg-text200" />
      <div className="flex items-center gap-2">
        <p>Livfit Slim T-shirts</p>
        <p className="text-xs px-2 py-[1px] bg-orange2 rounded-[13px] text-text50">
          자체제작
        </p>
      </div>
    </section>
  );
};

export default ItemCard;
