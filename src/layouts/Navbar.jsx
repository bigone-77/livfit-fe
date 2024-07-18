import { Outlet, useNavigate } from 'react-router-dom';

import backArrow from '@svgs/left-arrow.svg';
import close from '@svgs/close.svg';

// 이때 closed는 boolean으로 닫기창이 필요한 네비게이션바일 경우
// closed를 props로 부여합니다.
// styles같은 경우엔 play 페이지에서는 title에 별도의 style이 적용이 되어있습니다. (boolean값))
const Navbar = ({ title, closed, styles }) => {
  const navigate = useNavigate();
  return (
    <>
      <nav
        className={`${
          closed ? 'relative justify-between' : 'justify-center'
        } flex items-center p-10`}
      >
        <img
          src={backArrow}
          alt={backArrow}
          onClick={() => navigate(-1)}
          className={`${!closed && 'absolute top-12 left-10'}`}
        />
        <p
          className={`text-3xl text-text500 ${
            styles && 'text-center bg-text100 text-lg w-60 p-2 rounded-[82px]'
          }`}
        >
          {title}
        </p>
        {closed && (
          <img src={close} alt={close} onClick={() => navigate('/')} />
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
