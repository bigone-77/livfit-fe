import { calcShoulderNoseAngle } from "../calcAngle";

const detectTurtleNeck = (landmarks) => {
  const turtleDetectionAngle = calcShoulderNoseAngle(landmarks);
  console.log(turtleDetectionAngle);
};

export default detectTurtleNeck;
