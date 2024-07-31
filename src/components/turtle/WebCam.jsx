import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

import { privateApi, publicApi } from "@api/axios";

import { simplifyPoseLandmarks } from "@utils/mediapipe/calcAngle";
import detectTurtleNeck from "@utils/mediapipe/classifier/turtle.classifier";
import config from "@utils/mediapipe/config";
import useDrawLandmarks from "@utils/mediapipe/useDrawLandmarks";
import { useNavigate } from "react-router-dom";
import SendNicknameModal from "./SendNicknameModal";

const WebCam = ({ start, end }) => {
  const navigate = useNavigate();

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraRef = useRef(null);
  const frameInterval = useRef(0);
  const [angles, setAngles] = useState([]);
  const [nickname, setNickname] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [lastRecordedScore, setLastRecordedScore] = useState(null);

  const mutation = useMutation({
    mutationFn: async (body) => {
      try {
        if (localStorage.getItem("accessToken")) {
          await privateApi.post("/turtle/o/save_turtle_record", body);
          navigate("/turtle/ranking");
        }
      } catch (error) {
        setShowModal(true);
        console.log(showModal);
      }
    },
  });

  const handleNicknameSubmit = async (nickname) => {
    setShowModal(false);
    try {
      await publicApi.post("/turtle/x/save_turtle_record", {
        nickname,
        score: lastRecordedScore,
      });
      navigate("/turtle/ranking");
    } catch (error) {
      console.error("Public API 요청 중 에러 발생:", error);
    }
  };

  const pose = config();
  const drawLandmarks = useDrawLandmarks("all");

  useEffect(() => {
    pose.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      const camera = new window.Camera(webcamRef.current.video, {
        onFrame: async () => {
          frameInterval.current++;
          if (frameInterval.current % 4 === 0) {
            await pose.send({ image: webcamRef.current.video });
          }
        },
        width: 1280,
        height: 720,
      });

      if (start) {
        camera.start();
        cameraRef.current = camera; // camera 객체를 참조 변수에 저장
      }
    }

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
        setLastRecordedScore(Number(avgAngle.toFixed(2)));

        if (localStorage.getItem("accessToken")) {
          mutation.mutate({ score: Number(avgAngle.toFixed(2)) });
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
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user",
          frameRate: { ideal: 30, max: 60 },
        }}
        style={{ display: "none" }}
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
