// 더미 라우팅입니다.

import { useNavigate } from 'react-router-dom';

const ExercisePage = () => {
  const navigate = useNavigate();

  // 운동명을 props로 전달받기
  const goPlayHandler = (exercise) => () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        navigate(`/play/${exercise}`);
      })
      .catch((error) => {
        console.error('Error accessing webcam: ', error);
      });
  };
  return (
    <div>
      <p
        className="flex items-center justify-center w-40 h-32"
        onClick={goPlayHandler('squart')}
      >
        스쿼트 하러가기
      </p>
      <p
        className="flex items-center justify-center w-40 h-32"
        onClick={goPlayHandler('lunge')}
      >
        런지 하러가기
      </p>
      <p
        className="flex items-center justify-center w-40 h-32"
        onClick={goPlayHandler('stretch')}
      >
        스트레칭 하러가기
      </p>
    </div>
  );
};

export default ExercisePage;
