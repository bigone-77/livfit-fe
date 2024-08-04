import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

import axios from "axios";

import { format } from "date-fns";
import { useSelector } from "react-redux";

import TipSection from "@commons/TipSection";
import EffectText from "@components/commons/EffectText";
import GroupButton from "@components/turtle/GroupButton";
import Navbar from "@layouts/Navbar";

import clover_three from "@images/badge/clover_three.png";

const ResultPage = () => {
  const score = useSelector((state) => state.turtle.angle);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkBadgeCondition = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        try {
          // Post 요청 ( 뱃지 획득 요청 )
          const response = await axios.post(
            `${
              import.meta.env.VITE_SERVER_BASE_URL
            }/api/userbadges/check-award`,
            {
              badgeId: "clover_three",
              conditionCheck: true,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          // 요청이 성공적으로 오면 모달 띄우기
          if (response.status === 200 && response.data.success) {
            setShowModal(true);
          } else {
            setShowModal(false);
          }
        } catch (error) {
          console.error("Error checking badge condition:", error);
          setShowModal(false);
        }
      }
    };

    checkBadgeCondition();
  }, []); //userEffect 딱 한번만 실행

  // 모달
  const renderModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">🎉축하합니다!🎉</h2>
        <p className="mb-6">새로운 배지를 얻었습니다 !</p>
        <img
          src={clover_three}
          alt="Clover Badge"
          className="mb-4 w-20 h-20 mx-auto"
        />

        <p className="mb-6">&quot;행운의 클로버 배지&quot;</p>

        <div className="flex justify-center px-5 text-sm text-center space-x-4">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-text50 text-text400 rounded border border-text400"
          >
            <p>닫기</p>
          </button>
          <button
            onClick={() => navigate("/badge")}
            className="px-4 py-2 bg-green-500 text-text50 rounded"
          >
            얻은 뱃지 보러가기
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full h-full overflow-auto bg-black">
      <Navbar closed turtle={format(new Date(), "yyyy-MM-dd")} />
      <section className="relative w-full mt-10 text-center text-text50">
        <div className="absolute z-10 w-full h-40 bg-center bg-no-repeat bg-cover top-10 bg-turtle_effect" />
        <EffectText text={score} turtle />
        <div className="px-8 mb-10">
          <p className="mb-2 font-semibold">오늘의 거북목 측정결과입니다!</p>
          <p className="mb-12 font-semibold">
            수시로 측정하여 바른 자세를 유지해보세요!
          </p>
          <TipSection
            tipColor="#00D26A"
            bgColor="#FFFFFF"
            desc="거북목을 예방하기 위해서는 바른 자세와 스트레칭 필수!"
          />
        </div>
        <div className="w-full pb-10 mt-20">
          <GroupButton />
        </div>
      </section>
      {/* 상태에 따른 모달요청 */}
      {showModal && renderModal()}
    </div>
  );
};

export default ResultPage;
