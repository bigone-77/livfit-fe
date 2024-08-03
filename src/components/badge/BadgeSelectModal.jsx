import { useState } from "react";
import Modal from "react-modal";

import ShowBadge from "@commons/ShowBadge";
import { badgeArray } from "@constants/badgeArray";
import { badgeSelectModalStyle } from "@constants/badgeSelectModalStyle";

const BadgeSelectModal = ({
  modalOpen,
  setModalOpen,
  badges,
  selected,
  setSelected,
  submitHandler,
}) => {
  console.log(selected);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
    }, 750); // 닫힘 애니메이션 시간과 일치시킵니다.
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={handleClose}
      style={{
        ...badgeSelectModalStyle,
        content: {
          ...badgeSelectModalStyle.content,
          animation: isClosing
            ? "slideOut 0.75s forwards"
            : "slideIn 0.75s forwards",
        },
      }}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <div className="flex flex-col items-center w-full h-full">
        <p className="text-2xl">메인 배지 수정</p>
        <section className="flex items-center justify-center w-2/3 gap-6 py-3 mt-6 border-2 rounded-lg border-orange2">
          {badgeArray
            .filter((badge) => badges.includes(badge.name))
            .map((badge, index) => (
              <div
                className="flex flex-col items-center justify-center gap-3 max-w-64 overscroll-x-auto scroll-smooth"
                key={index}
              >
                <div
                  onClick={() => setSelected(badge.name)}
                  className={`text-center cursor-pointer ${
                    selected === badge.name &&
                    "border border-text200 rounded-2xl"
                  }`}
                >
                  <ShowBadge name={badge.name} />
                  <p className="text-sm text-text400">{badge.desc}</p>
                </div>
              </div>
            ))}
        </section>
        <button
          onClick={submitHandler}
          disabled={!selected}
          className="w-2/3 py-1 mt-4 rounded-lg disabled:bg-gray-500 text-text50 bg-orange2"
        >
          수정하기
        </button>
      </div>
    </Modal>
  );
};

export default BadgeSelectModal;