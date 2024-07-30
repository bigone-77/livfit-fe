import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import emptyIcon from "@images/tutorial/emptyheart.png";
import fullIcon from "@images/tutorial/fullheart.png";
import header from "@images/tutorial/header.png";
import lunge from "@images/tutorial/lunge.png";
import pushup from "@images/tutorial/pushup.png";
import squat from "@images/tutorial/squat.png";
import BackButton from "../../components/tutorial/BackButton";

const TutorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
  padding-bottom: 80px;
`;

const TutorialHeader = styled.div`
  width: 100%;
  height: 9vh;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

const ExerciseList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
  width: 100%;
`;

const ExerciseCard = styled.div`
  width: 90%;
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  align-items: center;

  & .cardImage {
    width: 100%;
  }
`;

const LikeButton = styled.button`
  position: absolute;
  top: 15px;
  left: 10px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  z-index: 10;

  &:focus {
    outline: none;
  }

  img {
    width: 22px;
    height: 20px;
  }
`;

export default function AllPage() {
  const [liked, setLiked] = useState([false, false, false]);

  const handleLikeClick = (index) => {
    setLiked((prevLiked) => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  const exercises = [
    { image: squat, name: "squat", path: "/exercise/tutorial/squat" },
    { image: lunge, name: "lunge", path: "/exercise/tutorial/lunge" },
    { image: pushup, name: "pushup", path: "/exercise/tutorial/pushup" },
  ];

  return (
    <TutorialContainer>
      <TutorialHeader>
        <BackButton />
      </TutorialHeader>
      <ExerciseList>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index}>
            <Link to={exercise.path}>
              <img
                className="cardImage"
                src={exercise.image}
                alt={exercise.name}
              />
            </Link>
            <LikeButton onClick={() => handleLikeClick(index)}>
              <img src={liked[index] ? fullIcon : emptyIcon} alt="like" />
            </LikeButton>
          </ExerciseCard>
        ))}
      </ExerciseList>
    </TutorialContainer>
  );
}
