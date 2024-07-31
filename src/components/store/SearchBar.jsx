import searchSrc from "@svgs/store/search.svg";

const SearchBar = () => {
  return (
    <div className="relative w-full h-10 px-6 mt-6">
      <input
        placeholder="검색어를 입력해주세요"
        className="w-full rounded-[106px] bg-[#ECECEC] pl-12 py-3 outline-none text-[#ECECEC]"
      />
      <img src={searchSrc} alt="search" className="absolute left-10 top-4" />
    </div>
  );
};

export default SearchBar;
