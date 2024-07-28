import { useEffect, useRef } from "react";
import Webcam from "react-webcam";

import { simplifyPoseLandmarks } from "@utils/mediapipe/calcAngle";
import detectTurtleNeck from "@utils/mediapipe/classifier/turtle.classifier";
import config from "@utils/mediapipe/config";
import useDrawLandmarks from "@utils/mediapipe/useDrawLandmarks";

const WebCam = ({ start }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraRef = useRef(null);
  const frameInterval = useRef(0);

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
        detectTurtleNeck(simplifiedLandmarks);
      }
      canvasCtx.restore(); // save했던 드로잉 상태를 복원
    }
  }, [start]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* <Webcam ref={webcamRef} className="hidden" /> */}
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
      <section className="absolute text-5xl text-orange"></section>
    </div>
  );
};

export default WebCam;
