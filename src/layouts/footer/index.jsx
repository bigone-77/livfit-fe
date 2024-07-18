import { Outlet, useLocation } from 'react-router-dom';

import home from '@svgs/footer/home.svg';
import live from '@svgs/footer/live.svg';
import review from '@svgs/footer/review.svg';
import store from '@svgs/footer/store.svg';
import profile from '@svgs/footer/profile.svg';

import selectedHome from '@svgs/footer/home-select.svg';
import selectedLive from '@svgs/footer/live-select.svg'

import CategoryBox from './CategoryBox';

const Footer = () => {
  const pathname = useLocation().pathname;
  
  return (
    <>
      <Outlet />
      <footer className="fixed bottom-0 left-0 right-0 grid w-full grid-cols-5 shadow-2xl place-items-center bg-text75">
        <CategoryBox imageSrc={home} selectedImageSrc={selectedHome} title="홈" selected={pathname === '/'} url="/" />
        <CategoryBox imageSrc={live} selectedImageSrc={selectedLive} title="운동 측정" selected={pathname === '/exercise'} url="/exercise" />
        <CategoryBox imageSrc={review} title="후기" selected={pathname === 'review'} url="/review" />
        <CategoryBox imageSrc={store} title="스토어" selected={pathname === 'store'} url="/store" />
        <CategoryBox imageSrc={profile} title="마이" selected={pathname === 'profile'} url="/profile" />
      </footer>
    </>
  );
};

export default Footer;
