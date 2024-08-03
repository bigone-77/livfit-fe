import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ isSelected }) => (isSelected ? '#FB8500' : '#D8E3E8')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 15px 10px;
  padding: 5px;
`;

const LogoImage = styled.img`
  width: auto;
  height: 60%;
`;

const BrandLogo = ({ logo, onClick, isSelected }) => {
  return (
    <Circle onClick={onClick} isSelected={isSelected}>
      <LogoImage src={logo} alt="Brand Logo" />
    </Circle>
  );
};

export default BrandLogo;
