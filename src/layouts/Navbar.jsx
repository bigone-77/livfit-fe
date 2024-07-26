import { Outlet, useNavigate } from "react-router-dom";

import close from "@svgs/close.svg";
import backArrow from "@svgs/left-arrow.svg";
import lightClose from "@svgs/light-close.svg";
import lightBackArrow from "@svgs/light-left-arrow.svg";

// 이때 closed는 boolean으로 닫기창이 필요한 네비게이션바일 경우
// closed를 props로 부여합니다.

// isWhite -> white navbar
const Navbar = ({ isWhite, bgColor, closed }) => {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  const closeHandler = () => {
    navigate("/");
  };

  return (
    <>
      <nav
        className={`flex items-center justify-between px-6 pt-10 bg-[${bgColor}]`}
      >
        {isWhite ? (
          <img src={lightBackArrow} alt={backArrow} onClick={backHandler} />
        ) : (
          <img src={backArrow} alt={backArrow} onClick={backHandler} />
        )}

        {closed && isWhite ? (
          <img src={lightClose} alt={close} onClick={closeHandler} />
        ) : (
          <img src={close} alt={close} onClick={closeHandler} />
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
