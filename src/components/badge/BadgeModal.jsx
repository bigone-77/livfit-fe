import { useState } from "react";
import Modal from "react-modal";

import { useNavigate } from "react-router-dom";

import { badgeModalStyle } from "@constants/badgeModalStyle";
import tiger_gray from "@images/badge/tiger-badge-gray.png";
import lockIcon from "@svgs/badge/dark-lock.svg";
import nextArrow from "@svgs/right-arrow.svg";
import ShowBadge from "../commons/ShowBadge";

const badgeInstructions = {
  cat: [ // 스쿼트초보
    "첫 스쿼트 챌린지 성공 🐱",
    "목표 | 스쿼트 50회 달성 💪"
  ],
  chick: [ //꾸준한그대
    "첫 운동 측정 도전 성공 🏃‍♀️",
    "목표 | 5일 연속 운동 측정 💪"
  ],
  chicken: [ //30초
    "첫 스쿼트 30초 도전 성공 ",
    "목표 | 런지 30초 달성 💪"
  ],
  clover_four: [ //포인트수집가
    "누적포인트 10000p 달성🪙",
    "목표 | 누적포인트 15000p 달성 👏"
  ],
  clover_three: [ //거북이탈출
    "거북목 측정 완료 🐢",
    "목표 | 거묵복 측정 700점 달성 🏆"
  ],
  egg: [ // 웰컴배지
    "회원가입을 축하합니다🎉",
    "LIVFIT에서 함께 건강한 여정을 시작해봐요✨"
  ],
  medal_bronze: [ //동메달
    "오늘의 세번째 스쿼트 측정 사용자 🥉",
    "목표 | 오늘의 세번째 런지 측정 사용자 😝"
  ],
  medal_silver: [ //은메달
    "오늘의 두번째 스쿼트 측정 사용자 🥈",
    "목표 | 오늘의 두번째 런지 측정 사용자 😝"
  ],
  medal_gold: [ //금메달
    "오늘의 첫번째 스쿼트 측정 사용자 🥇",
    "목표 | 오늘의 첫번째 런지 측정 사용자 😝"
  ],
  rainbow: [ // 챌린지마스터
    "챌린지 5회 완료 성공 🌈",
    "목표 | 챌린지 10회 완료 😄",
  ],
  star: [ //달성률
    "오늘의 운동 일주일 달성률 50% 🎈",
    "목표 | 오늘의 운동 일주일 달성률 100% 😊",
  ],
  star_big: [ //스토어이용
    "스토어 10회 이용 🛍️",
    "목표 | 스토어에서 LIVFIT 운동복 구매 🙂",
  ],
  sun: [ //아침형인간
    "오전 운동(스쿼트) 완료 🔅",
    "목표 | 오전 운동(푸시업) 도전 😃"
  ],
  sun_smile: [ //오후형인간
    "오후 운동(스쿼트) 완료 🌞",
    "목표 | 오후 운동(푸시업) 도전 😃"
  ],
  tiger: [ //SET
    "5세트 이상 운동 완료 ⏲️",
    "목표 | 10세트 이상 운동하기 🚀"
  ],
};

const BadgeModal = ({
  modalOpen,
  setModalOpen,
  badgeImgSrc,
  badgeDesc,
  badgeId,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
    }, 750); // 닫힘 애니메이션 시간과 일치시킵니다.
  };

  // Get the instructions for the selected badge
  const instructions = badgeInstructions[badgeId] || [
    "히든 미션!",
    "어떻게 하면 얻을 수 있을까요?",
  ];

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={handleClose}
      style={{
        ...badgeModalStyle,
        content: {
          ...badgeModalStyle.content,
          animation: isClosing
            ? "slideOut 0.75s forwards"
            : "slideIn 0.75s forwards",
        },
      }}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <div className="flex flex-col items-center w-full h-full">
        <div className="absolute flex items-center justify-center w-32 h-32 border-[6px] rounded-full border-orange2 -translate-y-20 z-20 bg-text50">
          <div className="absolute w-[130%] h-full bg-top bg-no-repeat bg-contain bg-badge_effect -top-10" />
          <ShowBadge name={badgeImgSrc} />
        </div>
        <div className="flex flex-col items-center h-full mt-12">
          <p className="text-sm font-semibold text-text200">챌린지 6회 달성</p>
          <span className="flex items-center gap-2 text-lg font-semibold">
            <p className="text-orange2">{badgeDesc}</p>
            <p className="text-text400">배지 획득!</p>
          </span>
          <section className="w-full px-10 py-4 text-center bg-text90 rounded-2xl">
            <span className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-text125">
                {badgeId === 5 && <img src={tiger_gray} alt="selected-badge" />}
              </div>
              <img src={nextArrow} alt="next-arrow" />
              <div className="flex items-center justify-center border rounded-full w-28 h-28 bg-text100">
                <img src={lockIcon} alt="locked badge" />
              </div>
            </span>
            <span className="flex items-center mt-2 text-sm font-semibold whitespace-nowrap">
              <p>다음 단계로 이동해서</p>
              <p className="ml-1 text-orange2">새로운 배지</p>
              <p> 를 획득하세요!</p>
            </span>
            <ul className="mt-2 text-sm text-left list-disc list-inside text-text200">
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </section>
          <p className="mt-2 text-xs text-text150">
            진행중인 내역은 마이페이지에서 확인할 수 있어요
          </p>
          <p className="my-3 font-semibold text-text400">
            배지 획득하러 가시겠어요?
          </p>
          <section className="grid w-full grid-cols-2 gap-3 text-sm font-semibold">
            <button
              className="p-2 border-2 text-text150 border-text150 rounded-xl"
              onClick={handleClose}
            >
              다음에 할게요
            </button>
            <button
              className="p-2 text-text50 bg-orange2 rounded-xl"
              onClick={() => navigate("/challenge")}
            >
              네 좋아요!
            </button>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default BadgeModal;
