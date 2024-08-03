import ShowBadge from "@commons/ShowBadge";
import { badgeArray } from "@constants/badgeArray";
import GroupButton from "./GroupButton";

const Contents = ({ badges, selected, setSelected }) => {
  let content;

  if (selected === "전체 배지") {
    content = badgeArray.map((badge, index) => (
      <div
        className="flex flex-col items-center justify-center gap-3"
        key={index}
      >
        <div className="text-center">
          <ShowBadge name={badge.name} />
          <p className="text-sm text-text400">{badge.desc}</p>
        </div>
      </div>
    ));
  }

  if (selected === "목표 배지") {
    content = badgeArray
      .filter((badge) => !badges.includes(badge.name))
      .map((badge, index) => (
        <div
          className="flex flex-col items-center justify-center gap-3"
          key={index}
        >
          <div className="text-center">
            <ShowBadge name={badge.name} />
            <p className="text-sm text-text400">{badge.desc}</p>
          </div>
        </div>
      ));
  }

  if (selected === "성공 배지") {
    content = badgeArray
      .filter((badge) => badges.includes(badge.name))
      .map((badge, index) => (
        <div
          className="flex flex-col items-center justify-center gap-3"
          key={index}
        >
          <div className="text-center">
            <ShowBadge name={badge.name} />
            <p className="text-sm text-text400">{badge.desc}</p>
          </div>
        </div>
      ));
  }

  return (
    <section className="w-full">
      <GroupButton selected={selected} setSelected={setSelected} />
      <div className="grid grid-cols-3 gap-6 mt-10">{content}</div>
    </section>
  );
};

export default Contents;
