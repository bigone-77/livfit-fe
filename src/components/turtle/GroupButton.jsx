import { resetAngle } from "@redux/slices/turtleSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const GroupButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myHandler = () => {
    dispatch(resetAngle());
    navigate("/");
  };

  const allHandler = () => {
    dispatch(resetAngle());
    navigate("/turtle/ranking");
  };

  return (
    <div className="grid items-center w-full grid-cols-2 gap-4 px-10 text-sm text-center">
      <div
        className="py-3 cursor-pointer rounded-xl bg-text50 text-text400"
        onClick={myHandler}
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
