import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

import { privateApi, publicApi } from "@api/axios";

import { simplifyPoseLandmarks } from "@utils/mediapipe/calcAngle";
import detectTurtleNeck from "@utils/mediapipe/classifier/turtle.classifier";
import config from "@utils/mediapipe/config";
import useDrawLandmarks from "@utils/mediapipe/useDrawLandmarks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAngle } from "../../app/redux/slices/turtleSlice";
import SendNicknameModal from "./SendNicknameModal";

// WebCam 컴포넌트
const WebCam = ({ start, end }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const webcamRef = useRef(null); // 웹캠 요소 참조
  const canvasRef = useRef(null); // 캔버스 요소 참조
  const cameraRef = useRef(null); // 카메라 인스턴스 참조
  const frameInterval = useRef(0); // 프레임 간격 계산용 참조
  const [angles, setAngles] = useState([]); // 각도 데이터 상태
  const [nickname, setNickname] = useState(""); // 사용자 닉네임 상태
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부 상태
  const [lastRecordedScore, setLastRecordedScore] = useState(null); // 마지막 기록된 점수 상태
  // 카메라 준비 상태 추가
  const [isCameraReady, setIsCameraReady] = useState(false);

  const mutation = useMutation({
    mutationFn: async (body) => {
      try {
        if (localStorage.getItem("accessToken")) {
          await privateApi.post("/turtle/o/save_turtle_record", body);
          navigate("/turtle/result");
        }
      } catch (error) {
        setShowModal(true);
        console.log(showModal);
      }
    },
  });

  // 비회원 일 경우 닉네임 서버로 전송
  const handleNicknameSubmit = async (nickname) => {
    setShowModal(false);
    dispatch(setAngle({ angle: Number(lastRecordedScore) * 10 }));
    try {
      await publicApi.post("/turtle/x/save_turtle_record", {
        nickname,
        score: Number(lastRecordedScore) * 10,
        localDate: format(new Date(), "yyyy-MM-dd"),
      });
      navigate("/turtle/result");
    } catch (error) {
      console.error("Public API 요청 중 에러 발생:", error);
    }
  };

  // 포즈 감지 설정 및 랜드마크 그리기 설정
  const pose = config(); // MediaPipe 설정 초기화
  const drawLandmarks = useDrawLandmarks("all"); // 랜드마크 그리기 설정

  // 카메라 및 포즈 감지
  useEffect(() => {
    //카메라 먼저 시작 방지 추가
    if (!start || isCameraReady) return;

    // MediaPipe 결과 처리 함수
    pose.onResults(onResults);

    // 모바일 카메라 조건 걸림
    //1. webcamRef.current != null 로 지정할시 모바일 Notreadable오류
    //2. webcamRef.current.video.readyState === 4 이거 없을 시 Notreadable오류
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {
      // 카메라 인스턴스 생성
      const camera = new window.Camera(webcamRef.current.video, {
        onFrame: async () => {
          frameInterval.current++;
          // 매 4프레임마다 포즈 데이터 전송
          if (frameInterval.current % 4 === 0) {
            await pose.send({ image: webcamRef.current.video });
          }
        },
        width: 1280, // 비디오 너비 설정
        height: 720, // 비디오 높이 설정
      });

      camera.start(); // 측정 시작 시 카메라 시작
      cameraRef.current = camera; // 카메라 객체를 참조 변수에 저장
      setIsCameraReady(true); // 카메라 준비 상태 업데이트

      return () => {
        // 컴포넌트가 언마운트될 때 스트림 정리
        if (cameraRef.current) {
          console.log("Stopping the camera...");
          cameraRef.current.stop();
        }
      };
    }

    // 포즈 감지 결과 처리 함수
    function onResults(results) {
      const canvas = canvasRef.current;
      const canvasCtx = canvas.getContext("2d");
      canvas.width = 1280;
      canvas.height = 720;
      canvasCtx.save(); // canvas 드로잉 상태 저장
      canvasCtx.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      canvasCtx.drawImage(
        // results.image는 미디어파이프가 제공해주는 이미지
        results.image,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      if (results.poseLandmarks) {
        drawLandmarks(
          canvasCtx,
          results.poseLandmarks,
          window.POSE_CONNECTIONS
        );
        // TODO: 아래 기능은 거북목 판단
        const simplifiedLandmarks = simplifyPoseLandmarks(results);
        const angle = detectTurtleNeck(simplifiedLandmarks);
        setAngles((prevAngles) => {
          const newAngles = [...prevAngles, angle];
          return newAngles;
        });
      }
      canvasCtx.restore(); // save했던 드로잉 상태를 복원
    }
  }, [start]);

  useEffect(() => {
    if (end && cameraRef.current) {
      cameraRef.current.stop();
      if (angles.length > 0) {
        const avgAngle =
          angles.reduce((acc, val) => acc + val, 0) / angles.length;
        setLastRecordedScore(Number(avgAngle.toFixed(1)));

        if (localStorage.getItem("accessToken")) {
          dispatch(setAngle({ angle: Number(avgAngle.toFixed(1)) * 10 }));
          mutation.mutate({
            score: Number(avgAngle.toFixed(1)) * 10,
            localDate: format(new Date(), "yyyy-MM-dd"),
          });
        } else {
          setShowModal(true);
        }
      } else {
        console.log("No angles detected.");
      }
    }
  }, [angles, end]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Webcam
        ref={webcamRef}
        videoConstraints={{
          //ideal 의 의미 : '선호' 한다 하지만 필수는 아니다.
          width: { ideal: 1280 }, //해상도
          height: { ideal: 720 }, //해상도
          facingMode: "user", // 전면 카메라 사용
          frameRate: { ideal: 30, max: 60 },
        }}
        style={{ display: "none" }}
        // 모바일에서 인라인 재생 허용
        playsInline={true}
        autoPlay // 수정 -> 자동재생 설정
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {showModal && (
        <SendNicknameModal
          enteredNickname={nickname}
          setEnteredNickname={setNickname}
          modalOpen={showModal}
          setModalOpen={setShowModal}
          submitHandler={handleNicknameSubmit}
        />
      )}
    </div>
  );
};

export default WebCam;
