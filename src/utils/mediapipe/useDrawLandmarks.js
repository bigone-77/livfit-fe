import { useCallback } from 'react';

const useDrawLandmarks = () => {
  const drawLandmarks = useCallback((ctx, landmarks, connections) => {
    for (let i = 11; i < landmarks.length; i++) { // 얼굴 부분은 제외
      const landmark = landmarks[i];
      ctx.beginPath();
      ctx.arc(landmark.x * ctx.canvas.width, landmark.y * ctx.canvas.height, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();
    }

    if (connections) {
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      for (let i = 9; i < connections.length; i++) {  // 인덱스 10부터 시작
        const [startIdx, endIdx] = connections[i];
        const startLandmark = landmarks[startIdx];
        const endLandmark = landmarks[endIdx];
        ctx.beginPath();
        ctx.moveTo(startLandmark.x * ctx.canvas.width, startLandmark.y * ctx.canvas.height);
        ctx.lineTo(endLandmark.x * ctx.canvas.width, endLandmark.y * ctx.canvas.height);
        ctx.stroke();
      }
    }
  }, []);

  return drawLandmarks;
};

export default useDrawLandmarks;
