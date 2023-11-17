import React from 'react';
import car from '../../images/car-home.png';
import road from '../../images/road.png';
import { HomeTitle, HomeWrapper, Img, ImgRoad, TitleWrap } from './Home.styled';
import BtnToCatalog from '../../components/BtnToCatalog/BtnToCatalog';

const Home = () => {
  return (
    <HomeWrapper>
      <TitleWrap>
        <HomeTitle>Selection of cars for comfortable travel</HomeTitle>
        <BtnToCatalog text="Rental now" />
      </TitleWrap>
      <Img src={car} alt="car" />
      <ImgRoad src={road} alt="road" />
    </HomeWrapper>
  );
};

export default Home;
