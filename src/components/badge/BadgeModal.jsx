import { useState } from "react";
import Modal from "react-modal";

import { useNavigate } from "react-router-dom";

import { badgeModalStyle } from "@constants/badgeModalStyle";
import tiger_gray from "@images/badge/tiger-badge-gray.png";
import lockIcon from "@svgs/badge/dark-lock.svg";
import nextArrow from "@svgs/right-arrow.svg";
import ShowBadge from "../commons/ShowBadge";

const badgeInstructions = {
  cat: ["고양이처럼 유연하게 5일 연속 운동하기", "매일 물 충분히 마시기"],
  chick: ["연속 3일 아침 운동 참여하기", "신선한 과일과 채소 섭취하기"],
  chicken: ["닭처럼 부지런히 10일 연속 조깅하기", "단백질 충분히 섭취하기"],
  clover_four: ["네잎 클로버 찾기 챌린지 완료하기", "행운의 상징 4개 모으기"],
  clover_three: ["세잎 클로버 찾기 챌린지 완료하기", "행운의 상징 3개 모으기"],
  egg: ["에그 요리 7가지 도전하기", "영양가 높은 식단 유지하기"],
  medal_bronze: ["브론즈 레벨 달성하기", "초급 과제 3개 완료하기"],
  medal_silver: ["실버 레벨 달성하기", "중급 과제 5개 완료하기"],
  medal_gold: ["골드 레벨 달성하기", "고급 과제 10개 완료하기"],
  rainbow: [
    "무지개 배지 얻기 위해 다양한 활동 참여하기",
    "7가지 색깔 아이템 모으기",
  ],
  star: [
    "스타 배지 얻기 위해 5가지 특수 활동 참여하기",
    "특별한 이벤트 참여하기",
  ],
  star_big: [
    "대스타 배지 얻기 위해 10가지 특수 활동 참여하기",
    "특별한 성취 달성하기",
  ],
  sun: ["태양 배지 얻기 위해 30일 동안 긍정적 활동하기", "매일 일출 보기"],
  sun_smile: [
    "웃는 태양 배지 얻기 위해 15일 연속 미소 짓기",
    "긍정적인 태도 유지하기",
  ],
  tiger: ["호랑이 배지 얻기 위해 6개월 연속 운동하기", "정신적 강인함 기르기"],
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
