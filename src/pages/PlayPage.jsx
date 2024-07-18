import Navbar from '@layouts/Navbar';
import { useParams } from 'react-router-dom';
import { parsedPlay } from '../constants/parsedPlay';

const PlayPage = () => {
  const exercise = useParams().exercise;
  console.log(exercise);
  return (
    <>
      <Navbar title={parsedPlay(exercise)} closed styles />
    </>
  )
}

export default PlayPage
