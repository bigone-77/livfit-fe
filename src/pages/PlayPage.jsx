import Navbar from '@layouts/Navbar';
import { useParams } from 'react-router-dom';
import { parsedPlay } from '../constants/parsedPlay';
import GroupButton from '@components/play/GroupButton';
import Timer from '@components/play/Timer';
import Score from '@components/play/Score';

const PlayPage = () => {
  const exercise = useParams().exercise;
  console.log(exercise);
  return (
    <>
      <Navbar title={parsedPlay(exercise)} closed styles />
      <Score />
      <Timer />
      <GroupButton />
    </>
  )
}

export default PlayPage
