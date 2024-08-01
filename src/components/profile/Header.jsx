import EditBadge from "@commons/EditBadge";

import chick from "@images/badge/chick-badge.png";

const Header = ({ nickname, badgeName }) => {
  console.log(badgeName);
  return (
    <header className="flex flex-col items-center gap-2 mt-8">
      <EditBadge imageSrc={chick} />
      <p className="text-lg">{nickname}</p>
    </header>
  );
};

export default Header;
