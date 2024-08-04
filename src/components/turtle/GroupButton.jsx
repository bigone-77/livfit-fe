import { resetAngle } from "@redux/slices/turtleSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const GroupButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myHandler = () => {
    dispatch(resetAngle());
    navigate("/turtle/my-ranking");
  };

  const allHandler = () => {
    dispatch(resetAngle());
    navigate("/turtle/ranking");
  };

  const handleClick = (handler) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      handler();
    } else {
      alert("나만의 기록을 위해 로그인해주세요!");
      navigate("/login");
    }
  };

  return (
    <div className="grid items-center w-full grid-cols-2 gap-4 px-10 text-sm text-center">
      <div
        className="py-3 cursor-pointer rounded-xl bg-text50 text-text400"
        onClick={() => handleClick(myHandler)}
      >
        <p>내 결과 보러가기</p>
      </div>
      <div
        className="py-3 cursor-pointer rounded-xl bg-orange2 text-text50"
        onClick={allHandler}
      >
        <p>전체 랭킹 보러가기</p>
      </div>
    </div>
  );
};

export default GroupButton;
