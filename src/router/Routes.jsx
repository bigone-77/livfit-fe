import { Route, Routes as ReactRouters, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import HomePage from '@pages/HomePage';
import ExercisePage from '@pages/ExercisePage';
import PlayPage from '@pages/PlayPage';
import LoginPage from '@pages/LoginPage';
import ResultPage from '@pages/ResultPage';

import Footer from '@layouts/footer';
import Navbar from '@layouts/Navbar';

const Routes = () => {
  const location = useLocation();

  // 페이지 전환 시 path 변화 감지 -> 시점 (0, 0) 시작
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      <Route path="/:exercise/result" element={<ResultPage />} />

      {/* 로그인 페이지 */}
      <Route path="/login" element={<LoginPage />} />
    </ReactRouters>
  );
};

export default Routes;
