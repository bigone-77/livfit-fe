import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { parsedPlay } from "@constants/parsedPlay";

import filledHeart from "@svgs/challenge/heart-fill.svg";
import heart from "@svgs/challenge/heart.svg";
import goButton from "@svgs/exercise/go-button.svg";

const ExerciseCard = ({ exercise }) => {
  const bgClasses = {
    squat: "bg-squat",
    lunge: "bg-lunge",
    pushup: "bg-pushup",
  };
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false);

  const goPlayHandler = (exercise) => () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        // navigate(`/play/${exercise}`);
        navigate(`/exercise/${exercise}`);
      })
      .catch((error) => {
        console.error("Error accessing webcam: ", error);
      });
  };

  const likeHandler = (event) => {
    event.stopPropagation();
    setIsLiked((prev) => !prev);
  };

  return (
    <section
      className={`relative w-full bg-center bg-no-repeat bg-cover rounded-xl ${bgClasses[exercise]} h-60`}
      onClick={goPlayHandler(exercise)}
    >
      <div className="absolute inset-0 bg-black/35 rounded-xl">
        <div className="relative w-full h-full p-4">
          <img
            src={isLiked ? filledHeart : heart}
            alt={isLiked ? "filled-heart" : "heart"}
            onClick={likeHandler}
            className="z-10 w-6 h-5 transition-all duration-150 cursor-pointer hover:scale-105 hover:ease-in-out"
          />
          <div className="relative flex items-center justify-end gap-2 mt-28">
            <p className="text-6xl uppercase font-English text-orange2">
              {exercise}
            </p>
            <img src={goButton} alt="go-button" />
            <p className="absolute text-sm -top-4 right-16 text-text50">
              {parsedPlay(exercise)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseCard;
