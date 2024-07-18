// 더미 라우팅입니다.

import { useNavigate } from 'react-router-dom';

const ExercisePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p
        className="flex items-center justify-center w-40 h-32"
        onClick={() => navigate('/play/squart')}
      >
        스쿼트 하러가기
      </p>
      <p
        className="flex items-center justify-center w-40 h-32"
        onClick={() => navigate('/play/lunge')}
      >
        런지 하러가기
      </p>
      <p
        className="flex items-center justify-center w-40 h-32"
        onClick={() => navigate('/play/stretch')}
      >
        스트레칭 하러가기
      </p>
    </div>
  );
};

export default ExercisePage;
