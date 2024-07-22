import { useNavigate } from 'react-router-dom';

const GroupButton = () => {
  const navigate = useNavigate();

  return (
    <div className="grid items-center w-screen grid-cols-2 gap-4 px-10 text-xl text-center">
      <div
        className="py-3 rounded-xl bg-text50 text-text400"
        onClick={() => navigate('/')}
      >
        <p>나가기</p>
      </div>
      <div
        className="py-3 rounded-xl bg-orange2 text-text50"
        onClick={() => navigate(-1)}
      >
        <p>다시하기</p>
      </div>
    </div>
  );
};

export default GroupButton;
