import logo from '@svgs/logo.svg';
import badge from '@svgs/badge.svg';
import alarm from '@svgs/alarm.svg';
import search from '@svgs/search.svg';

const Header = () => {
  return (
    <header className="relative flex items-center justify-between w-full px-8 h-52 bg-gradient-triple">
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-full bg-center bg-no-repeat bg-contain bg-opacity-10 bg-main" />
      <img src={badge} alt="Badge" />
      <img src={logo} alt="Logo" className="pl-7" />
      <section className="flex items-center gap-4">
        <img src={alarm} alt="Alarm" />
        <img src={search} alt="Search" />
      </section>
    </header>
  );
};

export default Header;
