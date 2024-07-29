import { useState } from "react";

import BadgeModal from "./BadgeModal";

import tiger from "@images/badge/tiger-badge.png";
import lockIcon from "@svgs/badge/lock.svg";

const USER_BADGE_ID = [5];

// 배지 ID에 따라 이미지 맵핑
const badgeImages = {
  5: tiger,
  // TODO: 추가 배지 ID와 이미지를 여기에 추가하기
};

const BadgeCard = ({ name, id, desc }) => {
  // id가 USER_BADGE_ID에 포함되어 있는지 확인
  const isOwnedBadge = USER_BADGE_ID.includes(id);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {isOwnedBadge ? (
        <div className="text-center" onClick={() => setShowModal(true)}>
          <img src={badgeImages[id]} alt={`${name} badge`} />
          <p className="text-sm text-text400">{desc}</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center rounded-full shadow-lg w-24 h-24 bg-[#E8E7E7]">
            <img src={lockIcon} alt="Locked badge" />
          </div>
          <p className="text-sm text-text150">활동 배지</p>
        </>
      )}
      {showModal && (
        <BadgeModal
          modalOpen={showModal}
          setModalOpen={setShowModal}
          badgeImgSrc={badgeImages[id]}
          badgeDesc={desc}
          badgeId={id}
        />
      )}
    </div>
  );
};

export default BadgeCard;
