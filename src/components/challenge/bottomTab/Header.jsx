import { format } from "date-fns";
import { ko } from "date-fns/locale";

const Header = ({ count }) => {
  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex flex-col gap-1">
        <p className="mt-4 text-xl font-semibold">
          {format(new Date(), "M월 d일 EEEE", { locale: ko })} (오늘)
        </p>
        <p className="text-sm text-text200">
          현재 {count}개의 챌린지도 진행중이세요!
        </p>
      </div>
    </header>
  );
};

export default Header;
