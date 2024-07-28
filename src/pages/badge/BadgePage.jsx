import Contents from "@components/badge/Contents";
import Header from "@components/badge/Header";

const BadgePage = () => {
  return (
    <div className="max-w-[500px] w-full h-screen overflow-y-hidden flex flex-col">
      <header className="w-full bg-badge bg-badge_color bg-opacity-[0.12] px-6">
        <Header />
      </header>
      <div className="h-8 rounded-t-[32px] border-t w-full bg-[#F6F6F6] -translate-y-3" />
      <div className="w-full h-full p-6 overflow-y-hidden bg-[#F6F6F6]">
        <div className="h-full overflow-y-scroll">
          <Contents />
        </div>
      </div>
    </div>
  );
};

export default BadgePage;
