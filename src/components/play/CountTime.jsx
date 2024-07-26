import one from "@images/play/one.png";
import three from "@images/play/three.png";
import two from "@images/play/two.png";

import restOne from "@images/rest/one.png";
import restThree from "@images/rest/three.png";
import restTwo from "@images/rest/two.png";

const CountTime = ({ time, restTime }) => {
  if (time === 1) {
    return <img src={one} alt={time} className="pb-20" />;
  }

  if (time === 2) {
    return <img src={two} alt={time} className="pb-20" />;
  }

  if (time === 3) {
    return <img src={three} alt={time} className="pb-20" />;
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
