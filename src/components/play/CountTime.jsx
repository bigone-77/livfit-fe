import one from "@images/play/one.png";
import two from "@images/play/two.png";
import three from "@images/play/three.png";

import restOne from "@images/rest/one.png";
import restTwo from "@images/rest/two.png";
import restThree from "@images/rest/three.png";

const CountTime = ({ time, restTime }) => {
  if (time === 1) {
    return <img src={one} alt={time} />;
  }

  if (time === 2) {
    return <img src={two} alt={time} />;
  }

  if (time === 3) {
    return <img src={three} alt={time} />;
  }

  if (restTime === 1) {
    return <img src={restOne} alt={restTime} />;
  }

  if (restTime === 2) {
    return <img src={restTwo} alt={restTime} />;
  }

  if (restTime === 3) {
    return <img src={restThree} alt={restTime} />;
  }
};

export default CountTime;
