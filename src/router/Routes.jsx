import { useEffect } from "react";
import { Routes as ReactRouters, Route, useLocation } from "react-router-dom";

import ActiveBadgePage from "@pages/badge/ActiveBadgePage";
import BadgePage from "@pages/badge/BadgePage";

import ChallengePage from "@pages/challenge/ChallengePage";
import DetailChallengePage from "@pages/challenge/DetailChallengePage";

import DetailExercisePage from "@pages/exercise/DetailExercisePage";
import ExercisePage from "@pages/exercise/ExercisePage";
import PlayPage from "@pages/exercise/PlayPage";

import TurtlePage from "@pages/turtle/TurtlePage";
import TurtlePlayPage from "@pages/turtle/TurtlePlayPage";

import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import ProfilePage from "@pages/ProfilePage";
import ResultPage from "@pages/ResultPage";
import StorePage from "@pages/StorePage";

import Footer from "@layouts/footer";
import Navbar from "@layouts/Navbar";

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
        <Route path="/exercise" element={<Navbar closed />}>
          <Route index element={<ExercisePage />} />
        </Route>
        {/* 거북목 측정 페이지입니다. */}
        <Route path="/turtle" element={<Navbar closed bgColor={"#F6F6F6"} />}>
          <Route index element={<TurtlePage />} />
        </Route>
        {/* 스토어 페이지입니다. */}
        <Route path="/store" element={<StorePage />} />
        {/* 마이페이지입니다. */}
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      {/* 운동 옵션 선택 페이지 */}
      <Route path="/exercise/:name" element={<DetailExercisePage />} />

      {/* 실제 운동이 이행될 페이지입니다. */}
      <Route path="/play/:exercise" element={<PlayPage />} />
      <Route path="/:exercise/result" element={<ResultPage />} />

      {/* 거북목 측정 페이지 */}
      <Route path="/turtle/play" element={<TurtlePlayPage />} />

      {/* 로그인 페이지 */}
      <Route path="/login" element={<LoginPage />} />

      {/* 배지 페이지 */}
      <Route path="/badge" element={<BadgePage />} />
      <Route
        path="/badge/active"
        element={<Navbar closed bgColor={"#F6F6F6"} />}
      >
        <Route index element={<ActiveBadgePage />} />
      </Route>
      {/* 챌린지 페이지 */}
      <Route path="/challenge" element={<ChallengePage />} />
      {/* <Route path="/challenge/:id" element={<DetailChallengePage />} /> */}
      <Route
        path="/challenge/:id"
        element={<Navbar closed bgColor={"#F6F6F6"} />}
      >
        <Route index element={<DetailChallengePage />} />
      </Route>
    </ReactRouters>
  );
};

export default Routes;
