import close from "@svgs/close.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between pt-10">
        <p className="text-3xl">배지</p>
        <img src={close} alt="close" onClick={() => navigate("/")} />
      </div>
      <p className="mt-[6px] text-text200">미션을 달성하고 배지를 모아보세요</p>
      <div className="flex items-center justify-between py-12">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex flex-col items-start">
            <p className="text-5xl">3</p>
            <p className="text-text200">활동 배지</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-5xl">7</p>
            <p className="text-text200">목표 배지</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-5xl">5</p>
            <p className="text-text200">성공 배지</p>
          </div>
        </div>
        <div className="w-32 h-32 rounded-full bg-apricot"></div>
      </div>
    </>
  );
};

export default Header;
