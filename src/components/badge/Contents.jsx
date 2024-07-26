import BadgeCard from "./BadgeCard";
import GroupButton from "./GroupButton";

const Contents = () => {
  return (
    <section className="w-full">
      <GroupButton />
      <div className="grid grid-cols-3 gap-6 mt-10">
        {Array.from({ length: 12 }).map((_, index) => (
          <BadgeCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default Contents;
