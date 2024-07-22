import { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';

import config from '@utils/mediapipe/config';
import useDrawLandmarks from '@utils/mediapipe/useDrawLandmarks';
import { simplifyPoseLandmarks } from '@utils/mediapipe/calcAngle';
import updateSquatCount from '@utils/mediapipe/classifier/squat.classifier';

const WebCam = ({ start, end }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraRef = useRef(null); // camera 객체를 참조할 변수
  const frameInterval = useRef(0);

  const pose = config();
  const drawLandmarks = useDrawLandmarks();

  useEffect(() => {
    pose.onResults(onResults);

    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null
    ) {
      const camera = new window.Camera(webcamRef.current.video, {
        onFrame: async () => {
          frameInterval.current++;
          if (frameInterval.current % 4 === 0) {
            await pose.send({ image: webcamRef.current.video });
          }
        },
      });
      
      if (start) {
        camera.start();
        cameraRef.current = camera; // camera 객체를 참조 변수에 저장
      }
    }

    function onResults(results) {
      const canvasCtx = canvasRef.current.getContext('2d');
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
        // TODO: 아래 기능은 부위별 canvas 상에서의 상대 위치 및 가시 정도를 뽑아낸 후
        // 각 classifier별로 로직을 다르게 가져갑니다.
        const simplifiedLandmarks = simplifyPoseLandmarks(results);
        updateSquatCount(simplifiedLandmarks);
      }
      canvasCtx.restore(); // save했던 드로잉 상태를 복원
    }
  }, [start]);

  useEffect(() => {
    if (end && cameraRef.current) {
      cameraRef.current.stop();
    }
  }, [end])

  return (
    <div className="fixed inset-0 w-full h-screen">
      <Webcam ref={webcamRef} className="hidden" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <section className="absolute text-5xl text-orange">
      </section>
    </div>
  );
};

export default WebCam;
