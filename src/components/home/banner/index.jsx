import handshake from "@svgs/handshake.svg";
import MissonSwiper from "./MissonSwiper";

const Banner = ({ guest }) => {
  console.log(guest);
  return (
    <section className="px-8 mt-6">
      <div
        className={`${
          guest && "blur-sm bg-text50"
        } flex items-center gap-4 p-4 mb-4 rounded-xl bg-orange3 bg-opacity-15`}
      >
        <img src={handshake} alt="handshake" />
        <div className="w-full">
          <span className="flex items-center">
            <p>안녕하세요,</p>
            <p className="pl-2 text-orange">GUEST</p>님
          </span>
          <p>오늘도 힘차게 미션을 달성해봐요!</p>
        </div>
      </div>
      <MissonSwiper />
    </section>
  );
};

export default Banner;
