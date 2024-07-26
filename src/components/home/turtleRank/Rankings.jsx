import turtleImage from "@images/turtle.png";
import one from "@svgs/home/one.svg";
import three from "@svgs/home/three.svg";
import two from "@svgs/home/two.svg";

const Rankings = () => {
  return (
    <section className="relative flex flex-col w-full gap-2 mt-6">
      <div className="relative h-8 rounded-[46px] bg-[#FFDB63] w-[80%]">
        <img src={one} alt="one" className="absolute left-0" />
      </div>
      <div className="relative h-8 rounded-[46px] bg-[#FFECAD] w-[70%]">
        <img src={two} alt="two" className="absolute left-0" />
      </div>
      <div className="relative h-8 rounded-[46px] bg-[#FFF2C6] w-[60%]">
        <img src={three} alt="three" className="absolute left-0" />
      </div>
      <img
        src={turtleImage}
        alt="turtle-image"
        className="absolute bottom-0 right-2"
      />
    </section>
  );
};

export default Rankings;
