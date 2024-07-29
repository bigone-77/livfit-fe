import { BADGES_NAME } from "@constants/badgeName";
import BadgeCard from "./BadgeCard";
import GroupButton from "./GroupButton";

const Contents = () => {
  return (
    <section className="w-full">
      <GroupButton />
      <div className="grid grid-cols-3 gap-6 mt-10">
        {BADGES_NAME.map((badge, index) => (
          <BadgeCard
            key={index}
            name={badge.name}
            id={badge.id}
            desc={badge.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Contents;
