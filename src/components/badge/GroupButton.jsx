const GroupButton = () => {
  const selected = true; // 나중에 버튼 선택 표시를 위해
  return (
    <div className="flex items-center justify-start w-[60%] gap-2 text-sm">
      <button
        className={`flex items-center justify-center w-full p-1 px-2 whitespace-nowrap ${
          selected ? "text-text50 bg-orange2" : "text-text100 bg-text50"
        }  rounded-[13px]`}
      >
        활동 배지
      </button>
      <button
        className={`flex items-center justify-center w-full p-1 px-2 whitespace-nowrap ${
          selected ? "text-text50 bg-orange2" : "text-text100 bg-text50"
        }  rounded-[13px]`}
      >
        목표 배지
      </button>
      <button
        className={`flex items-center justify-center w-full p-1 px-2 whitespace-nowrap ${
          selected ? "text-text50 bg-orange2" : "text-text100 bg-text50"
        }  rounded-[13px]`}
      >
        성장 배지
      </button>
    </div>
  );
};

export default GroupButton;
