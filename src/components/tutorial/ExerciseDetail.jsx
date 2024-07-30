import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ExerciseData } from './ExerciseData';
import StateCard from './StateCard';
import BackButton from './BackButton';
import YouTube from "react-youtube";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
  background-color: #F6F6F6;
`;

const HeaderContainer = styled.div`
  height: 60px;
`;

const DetailContainer = styled.div`
  width: 90%;
`;

const TitleDiv = styled.div`
  margin-top: 20px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #353535;
`;

const EngTitle = styled.span`
  font-size: 10px;
  color: #ABABAB;
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Content = styled.p`
  font-size: 12px;
  color: #353535;
  white-space: pre-line;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const TestButton = styled.button`
  width: 150px;
  height: 38px;
  margin-top: 20px;
  color: #FFFFFF;
  background-color: #FB8500;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

const ExerciseDetail = () => {
  const { id } = useParams();
  const exercise = ExerciseData.find((item) => item.id === parseInt(id));

  if (!exercise) {
    return <PageContainer>운동 정보를 찾을 수 없습니다.</PageContainer>;
  }

  return (
    <PageContainer>
      <HeaderContainer>
        <BackButton />
      </HeaderContainer>
      <DetailContainer>
        <YouTube
          videoId={exercise.video}
          opts={{
            width: "100%",
            height: "270px",
          }}
        />
        <TitleDiv>
          <Title>{exercise.title} </Title>
          <EngTitle>{exercise.engtitle}</EngTitle>
        </TitleDiv>
        <CardList>
          <StateCard text1="시간" title={exercise.time} text2="" />
          <StateCard text1="세트" title={exercise.sets} text2="" />
        </CardList>
        <Content>{exercise.content}</Content>
        <ButtonWrapper>
          <TestButton>
            <p>자세 측정하러가기</p>
          </TestButton>
        </ButtonWrapper>
      </DetailContainer>
    </PageContainer>
  );
};

export default ExerciseDetail;
