import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import progress from "@images/progress.png";

const DUMMY_MISSONS = [
  {
    id: 1,
    name: "스쿼트",
    goal: "100개",
  },
  {
    id: 2,
    name: "런지",
    goal: "200개",
  },
  {
    id: 3,
    name: "푸시업",
    goal: "200개",
  },
  {
    id: 4,
    name: "플랭크",
    goal: "5분30초",
  },
];

const MissonSwiper = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={30}
        initialSlide={0}
        loop
      >
        {DUMMY_MISSONS.map((mission, index) => {
          return (
            <SwiperSlide key={index}>
              <section className="relative flex flex-col gap-2 p-6 border shadow-xl rounded-2xl">
                <h1 className="text-xs font-light text-orange">오늘의 미션</h1>
                <span className="flex items-center gap-2 text-2xl font-semibold text-text500">
                  <p className="">{mission.name}</p>
                  <p>{mission.goal}</p>
                  <p>성공하기</p>
                </span>
                <img src={progress} alt="dummy-progress" className="mb-8" />
                <div className="absolute left-0 flex items-center justify-center w-full gap-1 text-[44px] font-bold -bottom-2 font-English">
                  <p className="text-outline-black">TODAY</p>
                  <p className="text-text500">MISSION</p>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MissonSwiper;
