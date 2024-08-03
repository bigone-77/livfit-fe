import ShowBadge from "@commons/ShowBadge";

const Header = ({ nickname, badgeName }) => {
  return (
    <header className="flex flex-col items-center gap-2 mt-8">
      <ShowBadge name={badgeName} edit />
      <p className="text-lg">{nickname}</p>
    </header>
  );
};

export default Header;
