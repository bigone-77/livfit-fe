import React, { useState } from 'react';
import styled from 'styled-components';

import BrandGroup from "@components/store/BrandGroup";
import FilterSection from "@components/store/FilterSection";
import BackButton from "@components/store/BackButton";
import BrandLogo from "@components/store/BrandLogo";

import storeMain from '@images/store/storemain.png';

const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  padding-bottom: 70px;
`;

const HeroShot = styled.div`
  position: relative;
  width: 100%;
  & .mainImage {
    width: 100%;
    height: auto;
  }
`;


const Store = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <StoreContainer>
      <HeroShot>
        <BackButton />
        <img className='mainImage' src={storeMain} alt="Store Main" />
      </HeroShot>
      <BrandLogo selectedBrand={selectedBrand} onBrandClick={handleBrandClick} />
      <BrandGroup selectedBrand={selectedBrand} />
    </StoreContainer>
  );
};

export default Store;
