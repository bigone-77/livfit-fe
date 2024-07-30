import styled, { css, keyframes } from 'styled-components';

export const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: #F6F6F6;
`;

export const HeroShot = styled.div`
  position: relative;
  width: 100%;
  
  & .mainImage {
    width: 100%;
    height: auto;
  }
`;

export const MiniDivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 20px;
`;

export const MainTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #353535;
`;

export const AdvancedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const DetailDiv = styled.div`
  width: 100%;
  height: 121px;
  background-color: #D9D9D9;
  border-radius: 10px;
  margin-top: 10px;
`;

