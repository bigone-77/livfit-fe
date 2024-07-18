import { Route, Routes as ReactRouters } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import ExercisePage from '@pages/ExercisePage';
import PlayPage from '@pages/PlayPage';

import Footer from '@layouts/footer';
import Navbar from '@layouts/Navbar';

const Routes = () => {
  return (
    <ReactRouters>
      {/* 공통 푸터 적용입니다 */}
      <Route path="/" element={<Footer />}>
        <Route index element={<HomePage />} />
        {/* 운동 측정하기 페이지입니다   */}
        <Route path="/exercise" element={<Navbar title="운동 측정하기" />}>
          <Route index element={<ExercisePage />} />
        </Route>
      </Route>
      
      {/* 실제 운동이 이행될 페이지입니다. */}
      <Route path="/play/:exercise" element={<PlayPage />} />

    </ReactRouters>
  );
};

export default Routes;
