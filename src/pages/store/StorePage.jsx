import styled from 'styled-components';

import BrandGroup from "@components/store/BrandGroup";
import FilterSection from "@components/store/FilterSection";
import ProductCard from "@components/store/ProductCard";
import SearchBar from "@components/store/SearchBar";
import BackButton from "@components/store/BackButton"

import storeMain from '@images/store/storemain.png';


const HeroShot = styled.div`
  width: 100%;
  & .mainImage {
    width: 100%;
    height: auto;
  }
`;

const StorePage = () => {
  // const { data: items } = useQuery({
  //   queryKey: ["store"],
  //   queryFn: () => publicApi("/items"),
  // });
  // console.log(items);
  return (
    
    <div className="w-full h-full">
      <HeroShot>
        <BackButton />
        <img className='mainImage' src={storeMain} alt="Store Main" />
      </HeroShot>
      <div className="relative z-30 w-full h-screen overflow-y-hidden -translate-y-3 bg-text50 rounded-t-2xl">
        <SearchBar />
        <BrandGroup />
        <hr className="mx-6 my-6" />
        <section className="px-6">
          <FilterSection />
          <div className="grid w-full grid-cols-2 gap-2 mt-4 place-items-center">
            <ProductCard/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StorePage;
