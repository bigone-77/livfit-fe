import bigDummy from "@images/challenge/big-dummy.png";
import running from "@images/challenge/running.png";
import squat from "@images/challenge/squat.png";
import lunge from "@images/challenge/lunge.png";
import exe from "@images/challenge/exe.png";

// ID에 따른 이미지 매핑
const images = {
  11: running,
  12: squat,
  13: lunge,
  14: exe
  // 필요한 만큼 추가
};

// ID에 해당하는 이미지를 반환하는 함수
export const getImageById = (id) => {
  return images[id] || bigDummy;
};
