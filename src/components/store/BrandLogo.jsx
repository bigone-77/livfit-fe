import React from 'react';
import styled from 'styled-components';

const LogoDiv = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 15px;
`

const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ isSelected }) => (isSelected ? '#FB8500' : '#D8E3E8')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
`;

const LogoImage = styled.img`
  width: auto;
  height: 60%;
`;

const BrandName = styled.div`
  font-size: 12px;
  text-align: center;
  color: #949494;
`;

const BrandLogo = ({ logo, brandName, onClick, isSelected }) => {
  return (
    <LogoDiv>
      <Logo onClick={onClick} isSelected={isSelected}>
        <LogoImage src={logo} alt="Brand Logo" />
      </Logo>
      <BrandName>{brandName}</BrandName>
    </LogoDiv>
    
  );
};

export default BrandLogo;