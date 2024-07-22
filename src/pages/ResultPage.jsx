import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Navbar from '@layouts/Navbar';

import EndingGroupButton from '@components/ending/GroupButton';
import BreakEnding from '@components/ending/BreakEnding';
// import GoalEnding from '@components/ending/GoalEnding';

import { parsedPlay } from '@constants/parsedPlay';

const ResultPage = () => {
  const exercise = useParams().exercise; // 어떤 운동인지 ? parameter값 가져오기 용도
  const scoreArr = useSelector((state) => state.play.scoreArray || []); // 리덕스 저장된 전역변수 불러오기

  console.log(scoreArr);

  return (
    <>
      {/* <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-black"> */}
      <div className="flex flex-col items-center justify-center bg-black">
        <Navbar title={parsedPlay(exercise)} styles />
        {/* goal이라는 변수가 넘어오면 GoalEnding으로 보내기 */}
        {/* <GoalEnding scoreLength={scoreArr.length} /> */}
        <BreakEnding scoreArr={scoreArr} />
        <section className="absolute bottom-12">
          <EndingGroupButton />
        </section>
      </div>
    </>
  );
};

export default ResultPage;
