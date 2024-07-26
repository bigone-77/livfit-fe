import Contents from "@components/badge/Contents";
import Header from "@components/badge/Header";

const BadgePage = () => {
  return (
    <div className="max-w-[500px] w-full h-screen overflow-y-hidden flex flex-col">
      <header className="w-full bg-badge bg-badge_color bg-opacity-[0.12] px-6">
        <Header />
      </header>
      <div className="flex-1 h-full p-6 overflow-y-hidden border -translate-y-5 rounded-tl-[32px] rounded-tr-[32px] pb-4 shadow-lg bg-[#F6F6F6]">
        <div className="h-full overflow-y-scroll">
          <Contents />
        </div>
      </div>
    </div>
  );
};

export default BadgePage;
